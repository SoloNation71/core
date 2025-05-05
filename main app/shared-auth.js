// shared-auth.js (to be used in all repositories)
import { createClient } from '@supabase/supabase-js'

// These should be stored in environment variables
const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Authentication functions
export const auth = {
  // Get current session
  getSession: async () => {
    const { data } = await supabase.auth.getSession()
    return data.session
  },
  
  // Sign in
  signIn: async (email, password) => {
    return await supabase.auth.signInWithPassword({ email, password })
  },
  
  // Sign up
  signUp: async (email, password) => {
    return await supabase.auth.signUp({ email, password })
  },
  
  // Sign out
  signOut: async () => {
    return await supabase.auth.signOut()
  },
  
  // Subscribe to auth changes
  onAuthChange: (callback) => {
    return supabase.auth.onAuthStateChange((event, session) => {
      callback(event, session)
    })
  }
}