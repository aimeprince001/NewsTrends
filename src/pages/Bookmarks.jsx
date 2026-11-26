import { Link } from 'react-router-dom'
import { getArticles } from '../data/newsData'
import { useBookmarks } from '../context/BookmarksContext'
import { useLang } from '../context/LanguageContext'
import NewsCard from '../components/NewsCard'

export default function Bookmarks() {
  const { ids } = useBookmarks()
  const { lang, t } = useLang()
  const saved = getArticles(lang).filter((a) => ids.includes(a.id))

  return (
    <div className="page">
      <div className="section-head page-title">
        <h1>★ {t('savedTitle')}</h1>
        <span className="muted">
          {saved.length} {t('savedStoriesCount').toLowerCase()}
        </span>
      </div>

      {saved.length === 0 ? (
        <div className="empty">
          <h2>{t('nothingSaved')}</h2>
          <p>{t('nothingSavedDesc')}</p>
          <Link to="/" className="btn btn-primary">
            {t('browseStories')}
          </Link>
        </div>
      ) : (
        <div className="news-grid">
          {saved.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  )
}