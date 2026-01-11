'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema, type SignupInput } from '@/lib/auth/schemas'
import { signup } from '@/lib/auth/actions'
import { AuthErrorDisplay } from './AuthErrorDisplay'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, UserPlus } from 'lucide-react'

export function SignupForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors } } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data: SignupInput) => {
    setLoading(true)
    setError(null)

    const result = await signup(data)

    if (result?.error) {
      setError(result.error.message)
      setLoading(false)
    }
    // Si succès, redirect automatique par server action
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </Label>
        <Input
          {...register('email')}
          id="email"
          type="email"
          placeholder="ton@email.com"
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
        />
        {errors.email && (
          <p className="text-sm text-red-600 font-medium">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-700 font-medium">
          Mot de passe
        </Label>
        <Input
          {...register('password')}
          id="password"
          type="password"
          placeholder="••••••••"
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
        />
        {errors.password && (
          <p className="text-sm text-red-600 font-medium">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
          Confirmer le mot de passe
        </Label>
        <Input
          {...register('confirmPassword')}
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-600 font-medium">{errors.confirmPassword.message}</p>
        )}
      </div>

      <AuthErrorDisplay error={error} />

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Création en cours...
          </>
        ) : (
          <>
            <UserPlus className="w-4 h-4 mr-2" />
            Créer mon compte
          </>
        )}
      </Button>
    </form>
  )
}
