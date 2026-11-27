import { Link } from 'react-router-dom'
import { categoryLabel } from '../data/newsData'
import { useNewsArticles } from '../data/useNewsArticles'
import { useLang } from '../context/LanguageContext'

export default function LiveTicker() {
  const { lang, t } = useLang()
  const { articles } = useNewsArticles(lang)
  const base = articles.filter((a) => a.trending)
  // Duplicate the list so the marquee can loop without a visible jump.
  const items = [...base, ...base]

  return (
    <div className="ticker" role="region" aria-label="Live news headlines">
      <span className="ticker-label">
        <span className="live-dot" aria-hidden="true" />
        <span>{t('live')}</span>
      </span>
      <div className="ticker-window">
        <div className="ticker-track">
          {items.map((a, i) => (
            <Link
              to={`/article/${a.id}`}
              className="ticker-item"
              key={`${a.id}-${i}`}
              aria-hidden={i >= base.length ? true : undefined}
              tabIndex={i >= base.length ? -1 : undefined}
            >
              <span className="ticker-cat">{categoryLabel(a.category, lang)}</span>
              <span className="ticker-headline">{a.title}</span>
              <span className="ticker-item-mark" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
