import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArticleById, getArticlesByCategory, categoryLabel } from '../data/newsData'
import { useBookmarks } from '../context/BookmarksContext'
import { useHistory } from '../context/HistoryContext'
import { useLang } from '../context/LanguageContext'
import NewsCard from '../components/NewsCard'

export default function Article() {
  const { id } = useParams()
  const { lang, t } = useLang()
  const article = getArticleById(id, lang)
  const { has, toggle } = useBookmarks()
  const { record } = useHistory()

  useEffect(() => {
    if (id) record(id)
  }, [id])

  if (!article) {
    return (
      <div className="page">
        <div className="empty">
          <h2>{t('storyNotFound')}</h2>
          <Link to="/" className="btn btn-primary">
            {t('backHome')}
          </Link>
        </div>
      </div>
    )
  }

  const saved = has(article.id)
  const related = getArticlesByCategory(article.category, lang)
    .filter((a) => a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="page article-page">
      <div className="breadcrumbs">
        <Link to="/">{t('home')}</Link>
        <span>/</span>
        <Link to={`/category/${article.category}`}>
          {categoryLabel(article.category, lang)}
        </Link>
        <span>/</span>
        <span className="crumb-current">{t('story')}</span>
      </div>

      <article className="article">
        <header className="article-head">
          <span className="hero-badge">
            {categoryLabel(article.category, lang)}
          </span>
          <h1>{article.title}</h1>
          <p className="article-lead">{article.excerpt}</p>
          <div className="article-meta">
            <span className="author">
              {t('by')} {article.author}
            </span>
            <span className="dot">•</span>
            <span>{article.source}</span>
            <span className="dot">•</span>
            <span>{article.time}</span>
            <span className="dot">•</span>
            <span>
              {article.readMins} {t('minRead')}
            </span>
          </div>
          <div className="article-actions">
            <button
              className={`btn ${saved ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => toggle(article.id)}
            >
              {saved ? `★ ${t('savedStory')}` : `☆ ${t('saveStory')}`}
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
            >
              🔗 {t('share')}
            </button>
          </div>
        </header>

        <img className="article-cover" src={article.image} alt={article.title} />

        <div className="article-body">
          {article.body.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section">
          <div className="section-head">
            <h2>{t('relatedStories')}</h2>
          </div>
          <div className="news-grid">
            {related.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}