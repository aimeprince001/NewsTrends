import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'

export default function Login() {
  const { login } = useAuth()
  const { t } = useLang()
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)

  const from = location.state?.from?.pathname || '/'

  const change = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setError('')
    const res = login(form)
    if (res.ok) navigate(from, { replace: true })
    else setError(t('invalidCred'))
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-visual">
          <div className="auth-visual-inner">
            <span className="brand-mark big">N</span>
            <h2>{t('welcomeBack')}</h2>
            <p>{t('welcomeBackSub')}</p>
            <ul>
              <li>✓ {t('liRealtime')}</li>
              <li>✓ {t('liSave')}</li>
              <li>✓ {t('liBriefing')}</li>
            </ul>
          </div>
        </div>

        <form className="auth-form" onSubmit={submit}>
          <h1>{t('loginTitle')}</h1>
          <p className="auth-sub">{t('loginSub')}</p>

          {error && <div className="auth-error">{error}</div>}

          <label>
            {t('email')}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={change}
              required
              placeholder="you@example.com"
            />
          </label>

          <label>
            {t('password')}
            <div className="pw-wrap">
              <input
                type={show ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={change}
                required
                placeholder="••••••••"
              />
              <button
                type="button"
                className="pw-toggle"
                onClick={() => setShow((s) => !s)}
              >
                {show ? t('hide') : t('show')}
              </button>
            </div>
          </label>

          <div className="auth-row">
            <label className="checkbox">
              <input type="checkbox" /> {t('rememberMe')}
            </label>
            <a href="#" className="auth-link">
              {t('forgotPassword')}
            </a>
          </div>

          <button className="btn btn-primary btn-block" type="submit">
            {t('loginTitle')}
          </button>

          <p className="auth-switch">
            {t('noAccount')}{' '}
            <Link to="/register" className="auth-link">
              {t('signUpLink')}
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}