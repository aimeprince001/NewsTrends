import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

const toAppUser = (authUser, profile = {}) => ({
  id: authUser.id,
  name: profile.full_name || authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'Reader',
  email: authUser.email || '',
  avatar: profile.avatar_url || '',
  banner: profile.banner_url || '',
  joined: profile.created_at ? new Date(profile.created_at).getTime() : new Date(authUser.created_at).getTime(),
})

async function getProfile(authUser) {
  const { data, error } = await supabase
    .from('profiles')
    .select('full_name, avatar_url, banner_url, created_at')
    .eq('id', authUser.id)
    .maybeSingle()

  if (error) throw error
  if (data) return data

  const newProfile = {
    id: authUser.id,
    full_name: authUser.user_metadata?.full_name || '',
  }
  const { data: created, error: insertError } = await supabase
    .from('profiles')
    .insert(newProfile)
    .select('full_name, avatar_url, banner_url, created_at')
    .single()

  if (insertError) throw insertError
  return created
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const loadAppUser = async (authUser) => {
    if (!authUser) {
      setUser(null)
      return
    }
    try {
      const profile = await getProfile(authUser)
      setUser(toAppUser(authUser, profile))
    } catch (error) {
      console.error('Could not load NewsTrends profile:', error.message)
      setUser(toAppUser(authUser))
    }
  }

  useEffect(() => {
    let mounted = true
    supabase.auth.getSession().then(async ({ data, error }) => {
      if (error) console.error(error.message)
      if (mounted) {
        await loadAppUser(data.session?.user || null)
        setLoading(false)
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setTimeout(() => {
          if (mounted) loadAppUser(session?.user || null)
        }, 0)
      }
    })

    return () => {
      mounted = false
      listener.subscription.unsubscribe()
    }
  }, [])

  const register = async ({ name, email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { full_name: name.trim() } },
    })
    if (error) return { ok: false, error: error.message }
    if (data.session && data.user) await loadAppUser(data.user)
    return { ok: true, needsConfirmation: !data.session }
  }

  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    if (error) return { ok: false, error: error.message }
    await loadAppUser(data.user)
    return { ok: true }
  }

  const updateProfile = async ({ name, avatar, banner }) => {
    if (!user) return { ok: false, error: 'Not signed in.' }
    const cleanName = (name ?? user.name).trim()
    if (!cleanName) return { ok: false, error: 'Name cannot be empty.' }

    const updates = {
      id: user.id,
      full_name: cleanName,
      avatar_url: avatar !== undefined ? avatar : user.avatar || '',
      banner_url: banner !== undefined ? banner : user.banner || '',
      updated_at: new Date().toISOString(),
    }
    const { data, error } = await supabase
      .from('profiles')
      .upsert(updates)
      .select('full_name, avatar_url, banner_url, created_at')
      .single()

    if (error) return { ok: false, error: error.message }
    setUser((prev) => ({ ...prev, ...toAppUser({ id: prev.id, email: prev.email, created_at: new Date(prev.joined).toISOString() }, data) }))
    return { ok: true }
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.error('Sign out failed:', error.message)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
