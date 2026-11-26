import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'trendz_users'
const SESSION_KEY = 'trendz_session'

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY)) || null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    else localStorage.removeItem(SESSION_KEY)
  }, [user])

  const register = ({ name, email, password }) => {
    const users = readUsers()
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: 'An account with this email already exists.' }
    }
    const newUser = {
      name,
      email,
      password,
      avatar: '',
      banner: '',
      joined: Date.now(),
    }
    users.push(newUser)
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    const session = { name, email, avatar: '', banner: '', joined: newUser.joined }
    setUser(session)
    return { ok: true }
  }

  const login = ({ email, password }) => {
    const users = readUsers()
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!found) {
      return { ok: false, error: 'Invalid email or password.' }
    }
    const session = {
      name: found.name,
      email: found.email,
      avatar: found.avatar || '',
      banner: found.banner || '',
      joined: found.joined,
    }
    setUser(session)
    return { ok: true }
  }

  const updateProfile = ({ name, avatar, banner }) => {
    if (!user) return { ok: false, error: 'Not signed in.' }
    const cleanName = (name ?? user.name).trim()
    if (!cleanName) return { ok: false, error: 'Name cannot be empty.' }
    const nextAvatar = avatar !== undefined ? avatar : user.avatar || ''
    const nextBanner = banner !== undefined ? banner : user.banner || ''

    const users = readUsers().map((u) =>
      u.email.toLowerCase() === user.email.toLowerCase()
        ? { ...u, name: cleanName, avatar: nextAvatar, banner: nextBanner }
        : u
    )
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    setUser((prev) => ({
      ...prev,
      name: cleanName,
      avatar: nextAvatar,
      banner: nextBanner,
    }))
    return { ok: true }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)