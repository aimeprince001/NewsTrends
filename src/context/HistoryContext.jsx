import { createContext, useContext, useEffect, useState } from 'react'

const HistoryContext = createContext(null)
const KEY = 'trendz_history'

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(history))
  }, [history])

  const record = (id) => {
    setHistory((prev) => {
      const rest = prev.filter((x) => x.id !== id)
      return [{ id, at: Date.now() }, ...rest].slice(0, 50)
    })
  }

  const clear = () => setHistory([])

  return (
    <HistoryContext.Provider value={{ history, record, clear }}>
      {children}
    </HistoryContext.Provider>
  )
}

export const useHistory = () => useContext(HistoryContext)