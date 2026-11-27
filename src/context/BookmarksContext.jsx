import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { supabase } from '../lib/supabase'

const BookmarksContext = createContext(null)

export function BookmarksProvider({ children }) {
  const { user } = useAuth()
  const [ids, setIds] = useState([])

  useEffect(() => {
    let active = true
    if (!user) {
      setIds([])
      return () => { active = false }
    }

    supabase
      .from('bookmarks')
      .select('article_id')
      .eq('user_id', user.id)
      .then(({ data, error }) => {
        if (!active) return
        if (error) {
          console.error('Could not load saved stories:', error.message)
          return
        }
        setIds((data || []).map((row) => row.article_id))
      })

    return () => { active = false }
  }, [user?.id])

  const toggle = async (id) => {
    if (!user) return
    const alreadySaved = ids.includes(id)
    setIds((current) =>
      alreadySaved ? current.filter((savedId) => savedId !== id) : [...current, id]
    )

    const result = alreadySaved
      ? await supabase.from('bookmarks').delete().eq('user_id', user.id).eq('article_id', id)
      : await supabase.from('bookmarks').insert({ user_id: user.id, article_id: id })

    if (result.error) {
      console.error('Could not update saved stories:', result.error.message)
      setIds((current) =>
        alreadySaved ? [...current, id] : current.filter((savedId) => savedId !== id)
      )
    }
  }

  const has = (id) => ids.includes(id)

  return (
    <BookmarksContext.Provider value={{ ids, toggle, has }}>
      {children}
    </BookmarksContext.Provider>
  )
}

export const useBookmarks = () => useContext(BookmarksContext)
