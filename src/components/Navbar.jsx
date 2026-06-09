import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';

function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Track', path: '/track' },
    { name: 'Pricing & Packages', path: '/pricing' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Rules & Safety', path: '/rules' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderRadius: '0 0 16px 16px',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      margin: '0 12px 24px 12px',
      padding: '12px 24px'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trophy size={28} className="primary-color" style={{ color: 'hsl(var(--primary))' }} />
          <span style={{
            fontFamily: 'var(--font-title)',
            fontWeight: 800,
            fontSize: '1.4rem',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase'
          }}>
            APEX<span style={{ color: 'hsl(var(--primary))' }}>KARTING</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: isActive ? 'hsl(var(--primary))' : 'hsl(var(--text-muted))',
                  position: 'relative',
                  padding: '6px 0',
                }}
                className="nav-hover-link"
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'hsl(var(--primary))',
                    borderRadius: '2px'
                  }} />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="desktop-cta" style={{ display: 'none' }}>
          <button onClick={onOpenBooking} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', borderRadius: '6px' }}>
            Book Session
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'hsl(var(--text-main))', 
            cursor: 'pointer',
            display: 'block'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px 0 12px 0',
          borderTop: '1px solid hsl(var(--border))',
          marginTop: '12px'
        }} className="mobile-dropdown">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: isActive ? 'hsl(var(--primary))' : 'hsl(var(--text-muted))',
                  padding: '8px 0'
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <button 
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }} 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '12px', marginTop: '8px' }}
          >
            Book Session
          </button>
        </div>
      )}

      {/* Inline styles for responsive layout toggles */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-hover-link:hover {
          color: hsl(var(--primary)) !important;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
