import { Link } from 'react-router-dom';
import { Trophy, Mail, Phone, MapPin } from 'lucide-react';

const Instagram = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Youtube = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

function Footer() {
  return (
    <footer className="glass-panel" style={{
      borderRadius: '16px 16px 0 0',
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      margin: '48px 12px 0 12px',
      padding: '48px 24px 24px 24px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Logo & About */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Trophy size={24} style={{ color: 'hsl(var(--primary))' }} />
              <span style={{
                fontFamily: 'var(--font-title)',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase'
              }}>
                APEX<span style={{ color: 'hsl(var(--primary))' }}>KARTING</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
              Experience high-octane electric go-karting at Visakhapatnam's premier racing destination in Anandapuram. State-of-the-art karts, technical track layouts, and absolute safety.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" className="social-icon-link" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="social-icon-link" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="social-icon-link" aria-label="Youtube"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/track" className="footer-link">The Track & Karts</Link>
              <Link to="/pricing" className="footer-link">Pricing & Packages</Link>
              <Link to="/leaderboard" className="footer-link">Leaderboard</Link>
              <Link to="/rules" className="footer-link">Rules & Safety</Link>
            </div>
          </div>

          {/* Timing */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hours of Operation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div>
                <p style={{ fontWeight: 600, color: 'hsl(var(--text-main))' }}>Weekdays (Mon - Fri)</p>
                <p>2:00 PM - 10:00 PM</p>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'hsl(var(--text-main))' }}>Weekends & Holidays</p>
                <p style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'hsl(var(--primary))', flexShrink: 0, marginTop: '2px' }} />
                <span>Survey No. 42, Anandapuram Highway, Visakhapatnam, AP, 530052</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'hsl(var(--primary))', flexShrink: 0 }} />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'hsl(var(--primary))', flexShrink: 0 }} />
                <span>info@apexkarting.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid hsl(var(--border))',
          paddingTop: '24px',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'hsl(var(--text-muted))'
        }}>
          <p>© {new Date().getFullYear()} APEX Karting Anandapuram. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: hsl(var(--primary)) !important;
          padding-left: 4px;
        }
        .social-icon-link {
          color: hsl(var(--text-muted));
          transition: var(--transition-fast);
        }
        .social-icon-link:hover {
          color: hsl(var(--primary)) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
