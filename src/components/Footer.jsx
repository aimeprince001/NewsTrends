import { Link } from 'react-router-dom'

function ArrowIcon() {
  return <span className="newhub-arrow" aria-hidden="true">↗</span>
}

function ContactIcon({ type }) {
  const paths = {
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>
  }
  return <svg className="newhub-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
}

export default function Footer() {
  return (
    <footer className="footer newhub-footer">
      <div className="newhub-footer-glow" aria-hidden="true" />
      <div className="footer-inner newhub-footer-inner">
        <section className="newhub-footer-brand">
          <Link to="/" className="newhub-footer-logo" aria-label="NewHub home">
            <span className="newhub-logo-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <rect x="1" y="1" width="38" height="38" rx="12" fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeOpacity=".5"/>
                <path d="M9 27V13h4l9 9V13h4v14h-4l-9-9v9H9Z" fill="currentColor"/>
                <path d="m27 9 5 0 0 5" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m32 9-8 8" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="newhub-logo-word"><span>New</span><b>Hub</b></span>
          </Link>
          <p>Your ultimate destination for the latest news, stories, and updates. Explore, stay informed, and be part of our growing community.</p>
          <span className="newhub-brand-underline" aria-hidden="true" />
        </section>

        <nav className="newhub-footer-col" aria-label="Quick links">
          <h2>Quick Links</h2>
          <Link to="/"><ArrowIcon />Home</Link>
          <Link to="/#about"><ArrowIcon />About Us</Link>
          <Link to="/"><ArrowIcon />Latest News</Link>
          <Link to="/#contact"><ArrowIcon />Contact Us</Link>
        </nav>

        <nav className="newhub-footer-col" aria-label="Resources">
          <h2>Resources</h2>
          <Link to="/"><ArrowIcon />News Categories</Link>
          <Link to="/#editorial-policy"><ArrowIcon />Editorial Policy</Link>
          <Link to="/#privacy-policy"><ArrowIcon />Privacy Policy</Link>
          <Link to="/#terms"><ArrowIcon />Terms &amp; Conditions</Link>
        </nav>

        <section className="newhub-footer-col newhub-contact" id="contact">
          <h2>Contact</h2>
          <a href="tel:+250788821628"><ContactIcon type="phone" /><span>+250 788 821 628</span></a>
          <a href="mailto:info@newhub.com"><ContactIcon type="email" /><span>info@newhub.com</span></a>
          <div><ContactIcon type="location" /><span>Rwanda</span></div>
        </section>
      </div>

      <div className="newhub-footer-bottom">
        <p>Copyright © 2026 NewHub. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
