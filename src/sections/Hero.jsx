import { Link } from 'react-router-dom';
import { heroStats } from '../data/stats';

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      minHeight: '100vh',
      background: `
        radial-gradient(ellipse at 78% 14%, rgba(100,45,210,.38) 0%, transparent 52%),
        radial-gradient(ellipse at 14% 82%, rgba(0,201,200,.22) 0%, transparent 52%),
        radial-gradient(ellipse at 48% 55%, rgba(27,135,228,.09) 0%, transparent 65%),
        #080F1E
      `,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '120px 28px 160px',
    }}>
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(123,53,208,.032) 1px, transparent 1px),
          linear-gradient(90deg, rgba(123,53,208,.032) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }} />

      {/* Orbs */}
      <div style={{ position: 'absolute', top: '5%', right: '2%', width: 520, height: 520, background: 'radial-gradient(circle, rgba(123,53,208,.24) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(36px)', animation: 'glow 7s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '2%', width: 420, height: 420, background: 'radial-gradient(circle, rgba(0,201,200,.18) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(36px)', animation: 'glow 9s ease-in-out infinite 3s', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '45%', left: '35%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(27,135,228,.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', animation: 'glow 11s ease-in-out infinite 1s', pointerEvents: 'none' }} />

      {/* Main content */}
      <div style={{ maxWidth: 800, width: '100%', textAlign: 'center', position: 'relative', zIndex: 1, animation: 'fadeUp .9s ease forwards' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(123,53,208,.13)',
          border: '1px solid rgba(123,53,208,.3)',
          borderRadius: 100, padding: '7px 22px', marginBottom: 36,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'linear-gradient(135deg,#B48EFF,#00C9C8)', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ color: 'rgba(255,255,255,.82)', fontSize: 13.5, fontFamily: 'var(--fb)', fontWeight: 500 }}>
            بوابتك الذكية نحو التعليم الدولي
          </span>
        </div>

        <h1 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(32px,5.5vw,68px)', fontWeight: 700, color: 'white', lineHeight: 1.28, marginBottom: 28 }}>
          نصنع{' '}
          <span style={{ background: 'linear-gradient(135deg,#B48EFF 0%,#73C3FF 50%,#5EECEA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            مستقبلك الأكاديمي
          </span>
          <br />بخطوات أكثر وضوحاً وثقة
        </h1>

        <p style={{ fontFamily: 'var(--fb)', fontSize: 'clamp(14px,1.8vw,17px)', color: 'rgba(255,255,255,.58)', lineHeight: 2.05, maxWidth: 640, margin: '0 auto 48px' }}>
          مؤسسة متخصصة في الإرشاد الأكاديمي وخدمات الدراسة بالخارج، تساعد الطلاب على بناء مسارات تعليمية واضحة والوصول إلى أفضل الفرص الجامعية الدولية عبر تجربة احترافية متكاملة.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="g-btn g-btn-prim" style={{ fontSize: 16, padding: '15px 36px' }}>ابدأ رحلتك</Link>
          <Link to="/services" className="g-btn g-btn-glass" style={{ fontSize: 16, padding: '15px 36px' }}>استكشف خدماتنا</Link>
        </div>

        {/* Scroll hint — sits below buttons in normal flow, never overlaps them */}
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', animation: 'bounce 2.4s ease-in-out infinite', opacity: .3, cursor: 'pointer' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{
        position: 'absolute', bottom: 0, right: 0, left: 0,
        background: 'linear-gradient(to top, rgba(8,15,30,.95) 0%, transparent 100%)',
        padding: '48px 28px 28px',
      }}>
        <div className="hero-stats" style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 'clamp(20px,4vw,80px)', flexWrap: 'wrap' }}>
          {heroStats.map(s => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(18px,2.8vw,32px)', fontWeight: 700, background: 'linear-gradient(135deg,#B48EFF,#73C3FF,#5EECEA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {s.num}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', fontFamily: 'var(--fb)', marginTop: 3 }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
