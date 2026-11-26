import { Link, useSearchParams } from 'react-router-dom'
import { searchArticles } from '../data/newsData'
import { useLang } from '../context/LanguageContext'
import NewsCard from '../components/NewsCard'

export default function Search() {
  const [params] = useSearchParams()
  const { t } = useLang()
  const q = params.get('q') || ''
  const results = searchArticles(q)

  return (
    <div className="page">
      <div className="section-head page-title">
        <h1>{t('searchResults')}</h1>
        <span className="muted">
          {results.length} {t('resultsFor')} “{q}”
        </span>
      </div>

      {results.length === 0 ? (
        <div className="empty">
          <h2>{t('noMatches')}</h2>
          <p>{t('noMatchesDesc')}</p>
          <Link to="/" className="btn btn-primary">
            {t('backHome')}
          </Link>
        </div>
      ) : (
        <div className="news-grid">
          {results.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </div>
  )
}