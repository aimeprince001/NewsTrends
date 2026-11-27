import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useBookmarks } from '../context/BookmarksContext'
import { useHistory } from '../context/HistoryContext'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LanguageContext'
import { getArticles, getArticleById, categoryLabel } from '../data/newsData'
import NewsCard from '../components/NewsCard'

const timeAgo = (ts) => {
  const s = Math.floor((Date.now() - ts) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)} min ago`
  if (s < 86400) return `${Math.floor(s / 3600)} hr ago`
  return `${Math.floor(s / 86400)} d ago`
}

export default function Profile() {
  const { user, updateProfile } = useAuth()
  const { ids } = useBookmarks()
  const { history, clear } = useHistory()
  const { theme, toggleTheme } = useTheme()
  const { lang, t } = useLang()
  const [tab, setTab] = useState('overview')

  const [name, setName] = useState(user?.name || '')
  const [avatar, setAvatar] = useState(user?.avatar || '')
  const [banner, setBanner] = useState(user?.banner || '')
  const [saved, setSaved] = useState(false)
  const [err, setErr] = useState('')
  const fileRef = useRef(null)
  const bannerRef = useRef(null)

  const TABS = [
    { id: 'overview', label: t('overview'), icon: '📊' },
    { id: 'saved', label: t('savedStories'), icon: '★' },
    { id: 'history', label: t('readingHistory'), icon: '🕘' },
    { id: 'edit', label: t('editProfile'), icon: '✏️' },
    { id: 'preferences', label: t('preferences'), icon: '⚙️' },
  ]

  const savedArticles = useMemo(
    () => getArticles(lang).filter((a) => ids.includes(a.id)),
    [ids, lang]
  )
  const historyArticles = useMemo(
    () =>
      history
        .map((h) => ({ ...getArticleById(h.id, lang), at: h.at }))
        .filter((a) => a.id),
    [history, lang]
  )

  const readMins = historyArticles.reduce((s, a) => s + (a.readMins || 0), 0)
  const topCategory = useMemo(() => {
    const counts = {}
    historyArticles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1
    })
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]
    return top ? categoryLabel(top[0], lang) : '—'
  }, [historyArticles, lang])

  const joined = user
    ? new Date(user.joined || Date.now()).toLocaleDateString(undefined, {
        month: 'short',
        year: 'numeric',
      })
    : ''

  const readImage = (file, onDone) => {
    if (!file.type.startsWith('image/')) {
      setErr(t('chooseImage'))
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      setErr(t('imageTooBig'))
      return
    }
    setErr('')
    const reader = new FileReader()
    reader.onload = () => {
      onDone(reader.result)
      setSaved(false)
    }
    reader.readAsDataURL(file)
  }

  const onFile = (e) => {
    const file = e.target.files?.[0]
    if (file) readImage(file, setAvatar)
  }

  const onBannerFile = (e) => {
    const file = e.target.files?.[0]
    if (file) readImage(file, setBanner)
  }

  const saveProfile = async (e) => {
    e.preventDefault()
    setErr('')
    setSaved(false)
    const res = await updateProfile({ name, avatar, banner })
    if (res.ok) {
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } else {
      setErr(res.error === 'Name cannot be empty.' ? t('nameEmpty') : res.error)
    }
  }

  return (
    <div className="page profile-page">
      <div
        className={`profile-banner ${user?.banner ? 'has-banner' : ''}`}
        style={
          user?.banner
            ? { backgroundImage: `url(${user.banner})` }
            : undefined
        }
      >
        {user?.banner && <div className="profile-banner-overlay" />}
        <div className="profile-avatar">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            user?.name?.charAt(0).toUpperCase()
          )}
        </div>
        <div className="profile-id">
          <h1>{user?.name}</h1>
          <p>{user?.email}</p>
          <span className="profile-joined">
            {t('memberSince')} {joined}
          </span>
        </div>
      </div>

      <div className="profile-layout">
        <aside className="profile-side">
          {TABS.map((tabItem) => (
            <button
              key={tabItem.id}
              className={`profile-tab ${tab === tabItem.id ? 'is-active' : ''}`}
              onClick={() => setTab(tabItem.id)}
            >
              <span>{tabItem.icon}</span> {tabItem.label}
            </button>
          ))}
        </aside>

        <div className="profile-main">
          {tab === 'overview' && (
            <div className="profile-pane">
              <div className="stat-grid">
                <div className="stat-card">
                  <span className="stat-icon">★</span>
                  <strong>{savedArticles.length}</strong>
                  <span>{t('savedStoriesCount')}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">🕘</span>
                  <strong>{historyArticles.length}</strong>
                  <span>{t('storiesRead')}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">⏱️</span>
                  <strong>{readMins}</strong>
                  <span>{t('minutesRead')}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">📂</span>
                  <strong className="stat-cat">{topCategory}</strong>
                  <span>{t('topCategory')}</span>
                </div>
              </div>

              <div className="section-head">
                <h2>{t('continueReading')}</h2>
              </div>
              {historyArticles.length === 0 ? (
                <div className="empty small">
                  <p>{t('noHistory')}</p>
                  <Link to="/" className="btn btn-primary btn-sm">
                    {t('exploreNews')}
                  </Link>
                </div>
              ) : (
                <div className="history-list">
                  {historyArticles.slice(0, 4).map((a) => (
                    <Link
                      to={`/article/${a.id}`}
                      className="history-row"
                      key={a.id}
                    >
                      <img src={a.image} alt="" />
                      <div>
                        <h4>{a.title}</h4>
                        <span className="muted">
                          {categoryLabel(a.category, lang)} · {timeAgo(a.at)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'saved' && (
            <div className="profile-pane">
              <div className="section-head">
                <h2>
                  {t('savedStories')} ({savedArticles.length})
                </h2>
              </div>
              {savedArticles.length === 0 ? (
                <div className="empty small">
                  <p>{t('noSaved')}</p>
                  <Link to="/" className="btn btn-primary btn-sm">
                    {t('browseStories')}
                  </Link>
                </div>
              ) : (
                <div className="news-grid">
                  {savedArticles.map((a) => (
                    <NewsCard key={a.id} article={a} />
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'history' && (
            <div className="profile-pane">
              <div className="section-head">
                <h2>
                  {t('readingHistory')} ({historyArticles.length})
                </h2>
                {historyArticles.length > 0 && (
                  <button className="btn btn-ghost btn-sm" onClick={clear}>
                    {t('clearHistory')}
                  </button>
                )}
              </div>
              {historyArticles.length === 0 ? (
                <div className="empty small">
                  <p>{t('nothingRead')}</p>
                </div>
              ) : (
                <div className="history-list">
                  {historyArticles.map((a) => (
                    <Link
                      to={`/article/${a.id}`}
                      className="history-row"
                      key={a.id}
                    >
                      <img src={a.image} alt="" />
                      <div>
                        <h4>{a.title}</h4>
                        <span className="muted">
                          {categoryLabel(a.category, lang)} · {a.readMins}{' '}
                          {t('minRead')} · {timeAgo(a.at)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'edit' && (
            <div className="profile-pane">
              <div className="section-head">
                <h2>{t('editProfile')}</h2>
              </div>
              <form className="edit-profile" onSubmit={saveProfile}>
                <div className="avatar-edit">
                  <div className="avatar-preview">
                    {avatar ? (
                      <img src={avatar} alt="Preview" />
                    ) : (
                      user?.name?.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div className="avatar-controls">
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => fileRef.current?.click()}
                    >
                      📷 {t('changePhoto')}
                    </button>
                    {avatar && (
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => {
                          setAvatar('')
                          setSaved(false)
                        }}
                      >
                        {t('remove')}
                      </button>
                    )}
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={onFile}
                    />
                    <p className="muted small-hint">{t('uploadHint')}</p>
                  </div>
                </div>

                <div className="banner-edit">
                  <div
                    className={`banner-preview ${banner ? 'has-image' : ''}`}
                    style={
                      banner ? { backgroundImage: `url(${banner})` } : undefined
                    }
                  >
                    {!banner && <span className="banner-placeholder">🖼️</span>}
                  </div>
                  <div className="avatar-controls">
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => bannerRef.current?.click()}
                    >
                      🖼️ {t('changeBanner')}
                    </button>
                    {banner && (
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => {
                          setBanner('')
                          setSaved(false)
                        }}
                      >
                        {t('remove')}
                      </button>
                    )}
                    <input
                      ref={bannerRef}
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={onBannerFile}
                    />
                    <p className="muted small-hint">{t('bannerHint')}</p>
                  </div>
                </div>

                <label className="edit-field">
                  {t('displayName')}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      setSaved(false)
                    }}
                    placeholder={user?.name}
                    maxLength={40}
                  />
                </label>

                <label className="edit-field">
                  {t('email')}
                  <input type="email" value={user?.email} disabled />
                  <span className="muted small-hint">
                    {t('emailCannotChange')}
                  </span>
                </label>

                {err && <div className="auth-error">{err}</div>}
                {saved && <div className="edit-saved">✓ {t('profileUpdated')}</div>}

                <button className="btn btn-primary" type="submit">
                  {t('saveChanges')}
                </button>
              </form>
            </div>
          )}

          {tab === 'preferences' && (
            <div className="profile-pane">
              <div className="section-head">
                <h2>{t('preferences')}</h2>
              </div>
              <div className="pref-list">
                <div className="pref-row">
                  <div>
                    <h4>{t('darkMode')}</h4>
                    <p className="muted">{t('darkModeDesc')}</p>
                  </div>
                  <button
                    className={`switch ${theme === 'dark' ? 'on' : ''}`}
                    onClick={toggleTheme}
                    aria-label={t('darkMode')}
                  >
                    <span />
                  </button>
                </div>
                <div className="pref-row">
                  <div>
                    <h4>{t('emailBriefing')}</h4>
                    <p className="muted">{t('emailBriefingDesc')}</p>
                  </div>
                  <input type="checkbox" className="pref-check" defaultChecked />
                </div>
                <div className="pref-row">
                  <div>
                    <h4>{t('breakingAlerts')}</h4>
                    <p className="muted">{t('breakingDesc')}</p>
                  </div>
                  <input type="checkbox" className="pref-check" defaultChecked />
                </div>
              </div>
              <div className="pref-note">{t('prefsNote')}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}