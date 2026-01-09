'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import type { LoginInput, SignupInput } from './schemas'

export async function login(data: LoginInput) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password
  })

  if (error) {
    return { error: { message: error.message } }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(data: SignupInput) {
  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password
  })

  if (error) {
    return { error: { message: error.message } }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}
