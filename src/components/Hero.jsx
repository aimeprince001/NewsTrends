import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getArticles, categoryLabel } from '../data/newsData'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLang()
  const slides = getArticles(lang)
    .filter((a) => a.featured)
    .slice(0, 4)
  const [index, setIndex] = useState(0)
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false })
  const wrapRef = useRef(null)

  useEffect(() => {
    setIndex(0)
  }, [lang])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect()
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    })
  }

  const go = (dir) =>
    setIndex((i) => (i + dir + slides.length) % slides.length)

  return (
    <section
      className="hero"
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setCursor((c) => ({ ...c, active: false }))}
    >
      <div
        className="hero-cursor"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
          opacity: cursor.active ? 1 : 0,
        }}
      />

      <div className="hero-slides">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`hero-slide ${i === index ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <span className="hero-badge">{categoryLabel(s.category, lang)}</span>
              <h1>{s.title}</h1>
              <p>{s.excerpt}</p>
              <div className="hero-actions">
                <Link to={`/article/${s.id}`} className="btn btn-primary">
                  {t('readStory')}
                </Link>
                <span className="hero-meta">
                  {s.author} · {s.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow hero-prev" onClick={() => go(-1)} aria-label="Previous">
        ‹
      </button>
      <button className="hero-arrow hero-next" onClick={() => go(1)} aria-label="Next">
        ›
      </button>

      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hero-dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}