import { Link } from 'react-router-dom'
import { categories, categoryLabel } from '../data/newsData'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { lang, t } = useLang()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">N</span>
            <span className="brand-text">New Trendz</span>
          </div>
          <p>{t('footerTagline')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('categories')}</h4>
          {categories.slice(1).map((c) => (
            <Link key={c.id} to={`/category/${c.id}`}>
              {categoryLabel(c.id, lang)}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>{t('company')}</h4>
          <Link to="/">{t('about')}</Link>
          <Link to="/">{t('careers')}</Link>
          <Link to="/">{t('contact')}</Link>
          <Link to="/">{t('advertise')}</Link>
        </div>

        <div className="footer-col">
          <h4>{t('stayUpdated')}</h4>
          <p className="footer-note">{t('newsletterText')}</p>
          <form className="footer-sub" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={t('yourEmail')} aria-label={t('email')} />
            <button className="btn btn-primary btn-sm" type="submit">
              {t('subscribe')}
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} New Trendz. {t('rights')}
        </span>
        <div className="footer-social">
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </div>
    </footer>
  )
}