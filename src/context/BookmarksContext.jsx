import { createContext, useContext, useEffect, useState } from 'react'

const BookmarksContext = createContext(null)
const KEY = 'trendz_bookmarks'

export function BookmarksProvider({ children }) {
  const [ids, setIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(ids))
  }, [ids])

  const toggle = (id) =>
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )

  const has = (id) => ids.includes(id)

  return (
    <BookmarksContext.Provider value={{ ids, toggle, has }}>
      {children}
    </BookmarksContext.Provider>
  )
}

export const useBookmarks = () => useContext(BookmarksContext)