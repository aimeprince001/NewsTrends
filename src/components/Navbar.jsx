import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { useBookmarks } from '../context/BookmarksContext'
import { useLang } from '../context/LanguageContext'
import { categories, categoryLabel } from '../data/newsData'

export default function Navbar() {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const { ids } = useBookmarks()
  const { lang, setLang, t, languages } = useLang()
  const [q, setQ] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          <span className="brand-text">New Trendz</span>
        </Link>

        <form className="nav-search" onSubmit={submit}>
          <input
            type="search"
            placeholder={t('searchPlaceholder')}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label={t('searchPlaceholder')}
          />
          <button type="submit" aria-label="Search">
            🔍
          </button>
        </form>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            {t('home')}
          </NavLink>
          <NavLink to="/category/politics" onClick={() => setMenuOpen(false)}>
            {t('politics')}
          </NavLink>
          <NavLink to="/category/sports" onClick={() => setMenuOpen(false)}>
            {t('sports')}
          </NavLink>
          <NavLink to="/category/entertainment" onClick={() => setMenuOpen(false)}>
            {t('entertainment')}
          </NavLink>
          <NavLink to="/bookmarks" onClick={() => setMenuOpen(false)}>
            {t('saved')}{' '}
            {ids.length > 0 && <span className="nav-count">{ids.length}</span>}
          </NavLink>
          {user && (
            <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
              {t('dashboard')}
            </NavLink>
          )}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={t('toggleTheme')}
            title={t('toggleTheme')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <div className="lang-switch">
            <button
              className="icon-btn"
              onClick={() => setLangOpen((o) => !o)}
              aria-label={t('language')}
              title={t('language')}
            >
              🌐
            </button>
            {langOpen && (
              <>
                <div
                  className="lang-backdrop"
                  onClick={() => setLangOpen(false)}
                />
                <div className="lang-menu">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      className={`lang-opt ${
                        lang === l.code ? 'is-active' : ''
                      }`}
                      onClick={() => {
                        setLang(l.code)
                        setLangOpen(false)
                      }}
                    >
                      <span>{l.flag}</span> {l.label}
                      {lang === l.code && <span className="lang-check">✓</span>}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {user ? (
            <div className="user-menu">
              <Link to="/profile" className="user-profile-link">
                <span className="user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    user.name.charAt(0).toUpperCase()
                  )}
                </span>
                <span className="user-name">{user.name.split(' ')[0]}</span>
              </Link>
              <button className="btn btn-ghost btn-sm" onClick={logout}>
                {t('logout')}
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm">
                {t('login')}
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                {t('signup')}
              </Link>
            </>
          )}

          <button
            className="icon-btn nav-burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      <div className="cat-strip">
        {categories.map((c) => (
          <NavLink key={c.id} to={c.id === 'all' ? '/' : `/category/${c.id}`}>
            <span>{c.icon}</span> {categoryLabel(c.id, lang)}
          </NavLink>
        ))}
      </div>
    </header>
  )
}