import { Link } from 'react-router-dom'
import { useBookmarks } from '../context/BookmarksContext'
import { useLang } from '../context/LanguageContext'
import { categoryLabel } from '../data/newsData'

export default function NewsCard({ article, layout = 'grid' }) {
  const { has, toggle } = useBookmarks()
  const { lang, t } = useLang()
  const saved = has(article.id)

  return (
    <article className={`news-card news-card--${layout}`}>
      <div className="news-card-media">
        <Link to={`/article/${article.id}`} className="news-card-link">
          <img src={article.image} alt={article.title} loading="lazy" />
        </Link>
        <span className="news-card-tag">
          {categoryLabel(article.category, lang)}
        </span>
        <button
          className={`save-btn ${saved ? 'is-saved' : ''}`}
          onClick={() => toggle(article.id)}
          aria-label={saved ? t('savedStory') : t('saveStory')}
          title={saved ? t('savedStory') : t('saveStory')}
        >
          {saved ? '★' : '☆'}
        </button>
      </div>

      <div className="news-card-body">
        <Link to={`/article/${article.id}`} className="news-card-title">
          <h3>{article.title}</h3>
        </Link>
        <p className="news-card-excerpt">{article.excerpt}</p>
        <div className="news-card-foot">
          <span>{article.source}</span>
          <span className="dot">•</span>
          <span>
            {article.readMins} {t('minRead')}
          </span>
          <span className="dot">•</span>
          <span>{article.time}</span>
        </div>
      </div>
    </article>
  )
}