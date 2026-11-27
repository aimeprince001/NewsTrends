import { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'
import { useNewsArticles } from '../data/useNewsArticles'
import { useLang } from '../context/LanguageContext'

export default function Home() {
  const { lang, t } = useLang()
  const [filter, setFilter] = useState('All')

  const filters = [
    { id: 'All', label: t('filterAll') },
    { id: 'Latest', label: t('filterLatest') },
    { id: 'Trending', label: t('filterTrending') },
    { id: 'Most Read', label: t('filterMostRead') },
  ]

  const { articles: all } = useNewsArticles(lang)
  const trending = all.filter((a) => a.trending).slice(0, 6)

  const list = useMemo(() => {
    if (filter === 'Trending') return all.filter((a) => a.trending)
    if (filter === 'Most Read')
      return [...all].sort((a, b) => b.readMins - a.readMins)
    if (filter === 'Latest') return all.slice(0, 6)
    return all
  }, [filter, lang])

  return (
    <div className="page">
      <Hero />

      <section className="section trending-row">
        <div className="section-head">
          <h2>🔥 {t('trendingNow')}</h2>
        </div>
        <div className="trending-grid">
          {trending.map((a, i) => (
            <div className="trending-item" key={a.id}>
              <span className="trending-rank">{i + 1}</span>
              <div>
                <span className="trending-cat">{a.category}</span>
                <p>{a.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{t('topStories')}</h2>
          <div className="filter-tabs">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filter-tab ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="news-grid">
          {list.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      </section>
    </div>
  )
}