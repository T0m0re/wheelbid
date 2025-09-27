import { supabase } from './supabaseClient'

export async function signUpUser(email: string, password: string) {
  // 1. Create user in Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (authError) throw authError

  // 2. Save extra info in "users" table
  const userId = authData.user?.id

  if (userId) {
    const { error: dbError } = await supabase
      .from('users')
      .insert([{ id: userId }])

    if (dbError) throw dbError
  }

  return authData
}

export async function signInUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  })

  if (error) console.error('Google Sign-in Error:', error)
  return data
}