import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { BookmarksProvider } from './context/BookmarksContext'
import { HistoryProvider } from './context/HistoryContext'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
        <ThemeProvider>
          <AuthProvider>
            <BookmarksProvider>
              <HistoryProvider>
                <App />
              </HistoryProvider>
            </BookmarksProvider>
          </AuthProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
