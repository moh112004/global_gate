import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/nav';

export default function Navbar({ darkHero = false }) {
  const [scrolled, setScrolled] = useState(!darkHero);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!darkHero) { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [darkHero]);

  const isTrans = darkHero && !scrolled;
  const lc = isTrans ? 'rgba(255,255,255,.88)' : '#1A2744';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1000, height: 76,
        background: isTrans ? 'rgba(8,15,30,.25)' : 'rgba(255,255,255,.97)',
        backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
        borderBottom: isTrans ? 'none' : '1px solid rgba(123,53,208,.08)',
        boxShadow: isTrans ? 'none' : '0 2px 24px rgba(10,22,40,.07)',
        transition: 'all .38s ease',
      }}>
        <div className="gc" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>

          <Link to="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <img
              src={isTrans ? '/images/logo-white.png' : '/images/logo.png'}
              alt="Global Gate Academy"
              style={{ height: 44 }}
            />
          </Link>

          <div className="nav-desktop" style={{ gap: 0, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {navLinks.map(l => {
              const active = pathname === l.path;
              return (
                <Link key={l.path} to={l.path} style={{
                  display: 'inline-block', padding: '8px 10px', borderRadius: 8,
                  fontSize: 13, fontWeight: active ? 700 : 500,
                  fontFamily: 'var(--fb)',
                  color: active ? '#7B35D0' : lc,
                  background: active ? 'rgba(123,53,208,.08)' : 'transparent',
                  transition: 'all .2s', whiteSpace: 'nowrap',
                  borderBottom: active ? '2px solid #7B35D0' : '2px solid transparent',
                }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#7B35D0'; e.currentTarget.style.background = 'rgba(123,53,208,.07)'; } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = lc; e.currentTarget.style.background = 'transparent'; } }}
                >{l.label}</Link>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <Link to="/contact" className="nav-desktop g-btn g-btn-prim" style={{ padding: '10px 18px', fontSize: 13.5 }}>
              احجز استشارة
            </Link>
            <button
              className="nav-mobile-btn"
              onClick={() => setMenuOpen(o => !o)}
              style={{
                background: 'none', border: 'none', padding: 8,
                color: isTrans ? 'white' : '#1A2744',
                cursor: 'pointer', display: 'none', alignItems: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                  : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
                }
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 76, right: 0, left: 0, zIndex: 999,
          background: 'rgba(255,255,255,.98)', backdropFilter: 'blur(20px)',
          padding: '12px 0 20px',
          borderBottom: '1px solid rgba(123,53,208,.08)',
          boxShadow: '0 8px 32px rgba(10,22,40,.1)',
          animation: 'slideDown .22s ease',
        }}>
          <div className="gc">
            {navLinks.map((l, i) => (
              <Link key={l.path} to={l.path} style={{
                display: 'block', padding: '13px 0', fontSize: 15, fontWeight: 500,
                fontFamily: 'var(--fb)',
                color: pathname === l.path ? '#7B35D0' : '#1A2744',
                textDecoration: 'none',
                borderBottom: i < navLinks.length - 1 ? '1px solid rgba(123,53,208,.06)' : 'none',
              }}>{l.label}</Link>
            ))}
            <Link to="/contact" style={{
              display: 'block', marginTop: 16,
              background: 'linear-gradient(135deg,#7B35D0,#1B87E4)',
              color: 'white', padding: '14px', borderRadius: 12, textAlign: 'center',
              fontSize: 16, fontWeight: 700, fontFamily: 'var(--fh)',
            }}>احجز استشارة</Link>
          </div>
        </div>
      )}
    </>
  );
}
