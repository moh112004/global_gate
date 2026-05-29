import { Link } from 'react-router-dom';
import { contactInfo } from '../data/contact';
import SocialIcon from './SocialIcon';

const navLinks = [
  { label: 'الرئيسية',          path: '/' },
  { label: 'من نحن',            path: '/about' },
  { label: 'الخدمات',           path: '/services' },
  { label: 'البرامج',           path: '/programs' },
  { label: 'الوجهات الدراسية',  path: '/destinations' },
  { label: 'فريق العمل',        path: '/team' },
  { label: 'الشركاء',           path: '/partners' },
  { label: 'تواصل معنا',        path: '/contact' },
];

const socials = [
  { label: 'Facebook',  color: '#1877F2', href: '#' },
  { label: 'Instagram', color: '#E4405F', href: '#' },
  { label: 'LinkedIn',  color: '#0A66C2', href: '#' },
  { label: 'Telegram',  color: '#26A5E4', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(160deg,#060D1B 0%,#0A1628 100%)',
      borderTop: '1px solid rgba(123,53,208,.12)',
    }}>
      <div className="gc" style={{ padding: '72px 28px 48px' }}>
        <div className="footer-grid">

          {/* ── Brand column ── */}
          <div>
            <img src="/images/logo-white.png" alt="Global Gate Academy" style={{ height: 56, marginBottom: 20 }} />
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.45)', lineHeight: 2, maxWidth: 280, marginBottom: 24 }}>
              بوابتك الذكية نحو التعليم الدولي. نساعد الطلاب على بناء مستقبل أكاديمي أكثر وضوحاً واستقراراً.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} title={s.label} style={{
                  width: 38, height: 38, borderRadius: 9,
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'all .22s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = s.color; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; }}
                ><SocialIcon name={s.label} /></a>
              ))}
            </div>
          </div>

          {/* ── Nav links column ── */}
          <div>
            <h4 style={{ fontFamily: 'var(--fh)', fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 20 }}>الأقسام</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((l, i) => (
                <Link key={i} to={l.path} style={{
                  fontSize: 14, color: 'rgba(255,255,255,.44)',
                  fontFamily: 'var(--fb)', transition: 'color .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,.85)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.44)'}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* ── Contact info column ── */}
          <div>
            <h4 style={{ fontFamily: 'var(--fh)', fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 20 }}>تواصل معنا</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 28 }}>
              {contactInfo.map((c, i) => (
                <a key={i} href={c.href} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  color: 'rgba(255,255,255,.44)', textDecoration: 'none',
                  fontSize: 13.5, fontFamily: 'var(--fb)', lineHeight: 1.6,
                  transition: 'color .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,.85)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.44)'}
                >
                  <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
                  <span>{c.value}</span>
                </a>
              ))}
            </div>

            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 20px', borderRadius: 100,
              background: 'linear-gradient(135deg,#7B35D0,#1B87E4)',
              color: 'white', fontSize: 13.5, fontWeight: 700,
              fontFamily: 'var(--fh)', transition: 'opacity .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              احجز استشارة
            </Link>
          </div>

        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div className="gc" style={{
          padding: '20px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.3)', fontFamily: 'var(--fb)' }}>
            © 2026 Global Gate Academy — All Rights Reserved
          </p>
          <p style={{ fontSize: 12, fontFamily: 'monospace', letterSpacing: '.06em', color: 'rgba(255,255,255,.75)' }}>
            Smart Gateway To International Education
          </p>
        </div>
      </div>
    </footer>
  );
}
