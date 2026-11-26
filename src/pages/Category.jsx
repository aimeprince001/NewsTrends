import { Link, useParams } from 'react-router-dom'
import { getArticlesByCategory, categories, categoryLabel } from '../data/newsData'
import { useLang } from '../context/LanguageContext'
import NewsCard from '../components/NewsCard'

export default function Category() {
  const { id } = useParams()
  const { lang, t } = useLang()
  const cat = categories.find((c) => c.id === id)
  const list = getArticlesByCategory(id, lang)

  return (
    <div className="page">
      <div className="page-hero">
        <div className="page-hero-icon">{cat?.icon || '📰'}</div>
        <div>
          <h1>{categoryLabel(id, lang)}</h1>
          <p className="muted">
            {list.length} {t('stories')} {t('streamingLive')}
          </p>
        </div>
      </div>

      {list.length === 0 ? (
        <div className="empty">
          <h2>{t('noMatches')}</h2>
          <Link to="/" className="btn btn-primary">
            {t('backHome')}
          </Link>
        </div>
      ) : (
        <div className="news-grid">
          {list.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  )
}