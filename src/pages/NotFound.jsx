import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLang()
  return (
    <div className="page">
      <div className="empty notfound">
        <span className="notfound-code">404</span>
        <h2>{t('pageNotFound')}</h2>
        <p>{t('notFoundDesc')}</p>
        <Link to="/" className="btn btn-primary">
          {t('backHome')}
        </Link>
      </div>
    </div>
  )
}