import { Link } from 'react-router-dom'
import { getTrending, categoryLabel } from '../data/newsData'
import { useLang } from '../context/LanguageContext'

const categoryIcons = {
  world: '🌍',
  politics: '🏛️',
  business: '📈',
  technology: '💻',
  tech: '💻',
  sports: '🏆',
  entertainment: '🎬',
  health: '🩺',
  science: '🔬',
  lifestyle: '✨',
  default: '📰',
}

function categoryIcon(category) {
  return categoryIcons[String(category || '').toLowerCase()] || categoryIcons.default
}

export default function LiveTicker() {
  const { lang, t } = useLang()
  const base = getTrending(lang)
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
              <span className="ticker-cat"><span className="ticker-cat-icon" aria-hidden="true">{categoryIcon(a.category)}</span>{categoryLabel(a.category, lang)}</span>
              <span className="ticker-headline">{a.title}</span>
              <span className="ticker-item-mark" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
