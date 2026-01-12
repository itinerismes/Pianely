# 💰 Guide Monétisation avec Stripe

**À utiliser quand tu veux rentabiliser l'hébergement VPS**

---

## 🎯 Stratégie de Monétisation

### Modèle Recommandé : Freemium

```
┌─────────────────────────────────────┐
│  Gratuit (Free)                     │
├─────────────────────────────────────┤
│  ✅ Accès aux leçons                │
│  ✅ Piano virtuel                   │
│  ✅ IMSLP (morceaux classiques)     │
│  ✅ 5 conversions/mois              │ ← Limite
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  Premium - 9€/mois                  │
├─────────────────────────────────────┤
│  ✅ Tout du Free                    │
│  ✅ Conversions illimitées          │
│     • PDF → MIDI                    │
│     • Audio → MIDI                  │
│     • YouTube → MIDI                │
│  ✅ Partitions sans publicité       │
│  ✅ Téléchargement MIDI             │
│  ✅ Support prioritaire             │
└─────────────────────────────────────┘
```

**Pourquoi 9€/mois** :
- Couvre le VPS (9€)
- Marge pour croissance
- Aligné avec le marché (Flowkey : 20€, Simply Piano : 15€)

---

## 🔧 Implémentation Technique

### Stack Stripe

```bash
# Install Stripe SDK
npm install stripe @stripe/stripe-js
npm install -D @types/stripe
```

### Architecture

```
┌─────────────────────────────────────┐
│  Frontend (Next.js)                 │
│  • Bouton "Upgrade Premium"         │
│  • Checkout Stripe embeddé          │
└──────────────┬──────────────────────┘
               │
               v
┌─────────────────────────────────────┐
│  API Routes Next.js                 │
│  /api/stripe/checkout               │
│  /api/stripe/webhook                │
│  /api/stripe/portal                 │
└──────────────┬──────────────────────┘
               │
               v
┌─────────────────────────────────────┐
│  Stripe API                         │
│  • Payment processing               │
│  • Subscription management          │
└──────────────┬──────────────────────┘
               │
               v
┌─────────────────────────────────────┐
│  Supabase Database                  │
│  • Table: user_subscriptions        │
│  • Sync statut abonnement           │
└─────────────────────────────────────┘
```

---

## 📋 Étapes d'Implémentation

### Étape 1 : Compte Stripe

```
1. Créer compte sur https://stripe.com
2. Activer mode Test (toggle en haut à droite)
3. Récupérer les clés API :
   - Publishable key (pk_test_...)
   - Secret key (sk_test_...)
4. Ajouter dans .env :
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
```

### Étape 2 : Créer le Produit Stripe

```
Dashboard Stripe → Products → Add product

Name: Pianely Premium
Description: Conversions illimitées + fonctionnalités premium
Price: 9€/mois (recurring)
```

Récupère le **Price ID** : `price_xxxxxxxxxxxx`

### Étape 3 : Schema Database

```sql
-- Ajouter à Supabase
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  status TEXT CHECK (status IN ('active', 'canceled', 'past_due', 'trialing')),
  plan TEXT CHECK (plan IN ('free', 'premium')),
  current_period_end TIMESTAMP WITH TIME ZONE,
  conversions_used_this_month INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- RLS
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own subscription"
  ON user_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- Index
CREATE INDEX idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX idx_user_subscriptions_stripe_customer_id ON user_subscriptions(stripe_customer_id);
```

### Étape 4 : API Checkout

```typescript
// app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia'
})

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Vérifier si déjà customer Stripe
    const { data: existingSub } = await supabase
      .from('user_subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', user.id)
      .single()

    let customerId = existingSub?.stripe_customer_id

    // Créer customer si n'existe pas
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_user_id: user.id
        }
      })
      customerId = customer.id

      // Sauvegarder dans Supabase
      await supabase.from('user_subscriptions').upsert({
        user_id: user.id,
        stripe_customer_id: customerId,
        plan: 'free',
        status: 'active'
      })
    }

    // Créer Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!, // price_xxxx
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings?canceled=true`,
      metadata: {
        user_id: user.id
      }
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
```

### Étape 5 : Webhook Stripe

```typescript
// app/api/stripe/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia'
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

// Supabase avec service role (bypass RLS)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Gérer les événements
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session)
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscription)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscription)
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentSucceeded(invoice)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentFailed(invoice)
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const customerId = session.customer as string
  const subscriptionId = session.subscription as string

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  await supabase.from('user_subscriptions').update({
    stripe_subscription_id: subscriptionId,
    status: subscription.status,
    plan: 'premium',
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString()
  }).eq('stripe_customer_id', customerId)
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  await supabase.from('user_subscriptions').update({
    status: subscription.status,
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString()
  }).eq('stripe_subscription_id', subscription.id)
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  await supabase.from('user_subscriptions').update({
    status: 'canceled',
    plan: 'free'
  }).eq('stripe_subscription_id', subscription.id)
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  const subscriptionId = invoice.subscription as string
  await supabase.from('user_subscriptions').update({
    status: 'active',
    conversions_used_this_month: 0 // Reset le compteur
  }).eq('stripe_subscription_id', subscriptionId)
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const subscriptionId = invoice.subscription as string
  await supabase.from('user_subscriptions').update({
    status: 'past_due'
  }).eq('stripe_subscription_id', subscriptionId)
}
```

### Étape 6 : Portal Client (Gérer Abonnement)

```typescript
// app/api/stripe/portal/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia'
})

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: sub } = await supabase
      .from('user_subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', user.id)
      .single()

    if (!sub?.stripe_customer_id) {
      return NextResponse.json({ error: 'No subscription found' }, { status: 404 })
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: sub.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings`
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Portal error:', error)
    return NextResponse.json(
      { error: 'Failed to create portal session' },
      { status: 500 }
    )
  }
}
```

### Étape 7 : Composant Frontend

```typescript
// components/settings/SubscriptionCard.tsx
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Crown, Zap } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface SubscriptionCardProps {
  subscription: {
    plan: 'free' | 'premium'
    status: string
    conversions_used_this_month: number
    current_period_end?: string
  }
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const [loading, setLoading] = useState(false)

  const handleUpgrade = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST'
      })
      const { sessionId } = await response.json()

      const stripe = await stripePromise
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Upgrade error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleManage = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/stripe/portal', {
        method: 'POST'
      })
      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Portal error:', error)
    } finally {
      setLoading(false)
    }
  }

  const isPremium = subscription.plan === 'premium'

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Abonnement</CardTitle>
          {isPremium ? (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          ) : (
            <Badge variant="secondary">Gratuit</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isPremium && (
          <>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-purple-600 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Passez Premium !</h3>
                  <p className="text-sm text-muted-foreground">
                    Conversions illimitées PDF, Audio et YouTube
                  </p>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>✅ Conversions PDF → MIDI illimitées</li>
                    <li>✅ Audio → MIDI illimité</li>
                    <li>✅ YouTube → MIDI illimité</li>
                    <li>✅ Téléchargement MIDI</li>
                    <li>✅ Sans publicité</li>
                  </ul>
                  <div className="pt-2">
                    <span className="text-2xl font-bold">9€</span>
                    <span className="text-muted-foreground">/mois</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Conversions utilisées ce mois : {subscription.conversions_used_this_month}/5
            </div>

            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600"
              onClick={handleUpgrade}
              disabled={loading}
            >
              <Crown className="w-4 h-4 mr-2" />
              Passer Premium
            </Button>
          </>
        )}

        {isPremium && (
          <>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-muted-foreground">Statut : </span>
                <Badge variant="outline" className="capitalize">
                  {subscription.status}
                </Badge>
              </div>
              {subscription.current_period_end && (
                <div className="text-sm text-muted-foreground">
                  Prochain renouvellement :{' '}
                  {new Date(subscription.current_period_end).toLocaleDateString('fr-FR')}
                </div>
              )}
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={handleManage}
              disabled={loading}
            >
              Gérer l'abonnement
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}
```

### Étape 8 : Middleware de Vérification

```typescript
// lib/stripe/check-subscription.ts
import { createClient } from '@/lib/supabase/server'

export async function checkSubscription(userId: string) {
  const supabase = await createClient()

  const { data } = await supabase
    .from('user_subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (!data) {
    // Créer abonnement gratuit par défaut
    await supabase.from('user_subscriptions').insert({
      user_id: userId,
      plan: 'free',
      status: 'active',
      conversions_used_this_month: 0
    })

    return { plan: 'free', conversionsLeft: 5 }
  }

  const isPremium = data.plan === 'premium' && data.status === 'active'
  const conversionsLeft = isPremium ? Infinity : Math.max(0, 5 - data.conversions_used_this_month)

  return {
    plan: data.plan,
    isPremium,
    conversionsLeft,
    status: data.status
  }
}

export async function incrementConversionCount(userId: string) {
  const supabase = await createClient()

  await supabase.rpc('increment_conversions', { user_id: userId })
}
```

```sql
-- Fonction SQL pour incrémenter
CREATE OR REPLACE FUNCTION increment_conversions(user_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE user_subscriptions
  SET conversions_used_this_month = conversions_used_this_month + 1
  WHERE user_subscriptions.user_id = increment_conversions.user_id;
END;
$$ LANGUAGE plpgsql;
```

### Étape 9 : Protéger les Routes API

```typescript
// Dans app/api/upload-pdf/route.ts (et autres)
import { checkSubscription, incrementConversionCount } from '@/lib/stripe/check-subscription'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Vérifier l'abonnement
  const subscription = await checkSubscription(user.id)

  if (!subscription.isPremium && subscription.conversionsLeft <= 0) {
    return NextResponse.json({
      error: 'Limite de conversions atteinte',
      message: 'Passez Premium pour des conversions illimitées !',
      upgrade_url: '/settings'
    }, { status: 403 })
  }

  // ... reste du code de conversion

  // Incrémenter le compteur si free
  if (!subscription.isPremium) {
    await incrementConversionCount(user.id)
  }

  return NextResponse.json({ piece })
}
```

---

## 🔐 Configuration Stripe Dashboard

### 1. Configurer le Webhook

```
Stripe Dashboard → Developers → Webhooks → Add endpoint

Endpoint URL: https://pianely.com/api/stripe/webhook

Events to send:
✅ checkout.session.completed
✅ customer.subscription.updated
✅ customer.subscription.deleted
✅ invoice.payment_succeeded
✅ invoice.payment_failed

Copie le Webhook Secret : whsec_xxxxxxxxxxxx
Ajoute à .env : STRIPE_WEBHOOK_SECRET=whsec_xxx
```

### 2. Activer Customer Portal

```
Stripe Dashboard → Settings → Billing → Customer portal

Features à activer :
✅ Update payment method
✅ View invoice history
✅ Cancel subscription

Save
```

### 3. Mode Production

```
Quand prêt pour prod :

1. Toggle de Test à Live (en haut à droite)
2. Récupère les nouvelles clés (pk_live_..., sk_live_...)
3. Reconfigure le webhook en mode Live
4. Update .env.production avec les clés Live
```

---

## 💡 Optimisations

### 1. Trial Period (7 jours gratuits)

```typescript
// Dans checkout
trial_period_days: 7
```

### 2. Coupons de Réduction

```typescript
// Dashboard Stripe → Products → Coupons
// Ou via API
const coupon = await stripe.coupons.create({
  percent_off: 20,
  duration: 'once',
  name: 'LAUNCH20'
})
```

### 3. Analytics

```typescript
// Track conversions
await supabase.from('conversion_logs').insert({
  user_id: user.id,
  type: 'pdf',
  success: true,
  is_premium: subscription.isPremium
})
```

---

## 📊 Métriques à Suivre

```
Dashboard Stripe (intégré) :
- MRR (Monthly Recurring Revenue)
- Churn rate
- New subscriptions
- Cancellations

Custom (Supabase) :
- Conversions par user
- Taux de conversion Free → Premium
- Usage par type (PDF/Audio/YouTube)
```

---

## 🎯 Prix Recommandés

```
Plan Gratuit : 0€
- 5 conversions/mois
- Attire les utilisateurs

Plan Premium : 9€/mois
- Illimité
- Rentabilise le VPS (9€)
- Profit si >100 users premium

Plan Annuel (optionnel) : 90€/an
- 2 mois gratuits (10 mois au prix de 12)
- Rétention meilleure
```

---

## ✅ Checklist Monétisation

```
□ Compte Stripe créé (mode Test)
□ Produit Premium créé (9€/mois)
□ Price ID récupéré
□ Schema database user_subscriptions
□ API /stripe/checkout créée
□ API /stripe/webhook créée
□ API /stripe/portal créée
□ Webhook configuré dans Stripe
□ Composant SubscriptionCard créé
□ Middleware checkSubscription créé
□ Routes API protégées (limite conversions)
□ Tests en mode Test Stripe
□ Mode Live activé
□ Monitoring metrics en place
```

---

## 🚀 Go Live !

Une fois tout testé en mode Test :

1. **Active mode Live** dans Stripe
2. **Update .env** avec clés Live
3. **Redéploie** sur VPS
4. **Teste** un vrai paiement (petite somme)
5. **Annonce** la fonctionnalité Premium !

**Tu es prêt à gagner de l'argent !** 💰🎉
