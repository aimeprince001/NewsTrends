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
                <path d="m27 9 5 0 0 5" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m32 9-8 8" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round"/>
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

        <section className="newhub-footer-col newhub-social" aria-label="Follow us">
          <h2>Follow Us</h2>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/></svg>
            <span>YouTube</span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2.3"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2.3"/><circle cx="17.6" cy="6.5" r="1.3" fill="currentColor"/></svg>
            <span>Instagram</span>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.6 5.6a5.8 5.8 0 0 1-3.5-3.5A6.5 6.5 0 0 1 15.8 1h-4.1v14.2a2.8 2.8 0 1 1-2.8-2.8c.5 0 .9.1 1.3.3V8.5a7.2 7.2 0 0 0-1.3-.1 6.9 6.9 0 1 0 6.9 6.9V8a9.7 9.7 0 0 0 5.4 1.7V5.6h-1.6Z"/></svg>
            <span>TikTok</span>
          </a>
        </section>
      </div>



      <div className="newhub-footer-bottom">
        <p>Copyright © 2026 NewHub. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
