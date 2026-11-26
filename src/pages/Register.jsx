import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LanguageContext'

const strengthOf = (pw) => {
  let s = 0
  if (pw.length >= 8) s++
  if (/[A-Z]/.test(pw)) s++
  if (/[0-9]/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  return s
}

export default function Register() {
  const { register } = useAuth()
  const { t } = useLang()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)

  const change = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const strength = strengthOf(form.password)
  const strengthLabels = [t('weak'), t('fair'), t('good'), t('strong'), t('excellent')]

  const submit = (e) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirm) {
      setError(t('passwordMismatch'))
      return
    }
    const res = register({
      name: form.name,
      email: form.email,
      password: form.password,
    })
    if (res.ok) navigate('/', { replace: true })
    else setError(t('exists'))
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-visual">
          <div className="auth-visual-inner">
            <span className="brand-mark big">N</span>
            <h2>{t('joinCommunity')}</h2>
            <p>{t('joinSub')}</p>
            <ul>
              <li>✓ {t('liUnlimited')}</li>
              <li>✓ {t('liFeed')}</li>
              <li>✓ {t('liAlerts')}</li>
            </ul>
          </div>
        </div>

        <form className="auth-form" onSubmit={submit}>
          <h1>{t('createAccount')}</h1>
          <p className="auth-sub">{t('createAccountSub')}</p>

          {error && <div className="auth-error">{error}</div>}

          <label>
            {t('fullName')}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={change}
              required
              placeholder="Jane Doe"
            />
          </label>

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
                placeholder={t('createPassword')}
              />
              <button
                type="button"
                className="pw-toggle"
                onClick={() => setShow((s) => !s)}
              >
                {show ? t('hide') : t('show')}
              </button>
            </div>
            {form.password && (
              <div className="pw-strength">
                <div className="pw-bars">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={i < strength ? 'on' : ''}
                      data-level={strength}
                    />
                  ))}
                </div>
                <span className="pw-label">{strengthLabels[strength]}</span>
              </div>
            )}
          </label>

          <label>
            {t('confirmPassword')}
            <input
              type={show ? 'text' : 'password'}
              name="confirm"
              value={form.confirm}
              onChange={change}
              required
              placeholder={t('reenterPassword')}
            />
          </label>

          <label className="checkbox">
            <input type="checkbox" required /> {t('agreeTerms')}
          </label>

          <button className="btn btn-primary btn-block" type="submit">
            {t('createAccount')}
          </button>

          <p className="auth-switch">
            {t('haveAccount')}{' '}
            <Link to="/login" className="auth-link">
              {t('loginTitle')}
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}