import { Link } from 'react-router-dom'
import { getTrending, categoryLabel } from '../data/newsData'
import { useLang } from '../context/LanguageContext'

export default function LiveTicker() {
  const { lang, t } = useLang()
  const base = getTrending(lang)
  const items = [...base, ...base]

  return (
    <div className="ticker">
      <span className="ticker-label">
        <span className="live-dot" /> {t('live')}
      </span>
      <div className="ticker-track">
        {items.map((a, i) => (
          <Link to={`/article/${a.id}`} className="ticker-item" key={`${a.id}-${i}`}>
            <span className="ticker-cat">{categoryLabel(a.category, lang)}</span>
            {a.title}
          </Link>
        ))}
      </div>
    </div>
  )
}