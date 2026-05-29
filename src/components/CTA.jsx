import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const r = useReveal(0);
  return (
    <section className="gs" style={{
      background: 'linear-gradient(160deg,#080F1E 0%,#0C1830 50%,#080F1E 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', right: '10%', width: 400, height: 400,
        background: 'radial-gradient(circle,rgba(123,53,208,.2) 0%,transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%', width: 320, height: 320,
        background: 'radial-gradient(circle,rgba(0,201,200,.14) 0%,transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="gc" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', ...r.style }} ref={r.ref}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(123,53,208,.14)', border: '1px solid rgba(123,53,208,.3)',
            borderRadius: 100, padding: '7px 22px', marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'linear-gradient(135deg,#B48EFF,#00C9C8)', display: 'inline-block' }} />
            <span style={{ color: 'rgba(255,255,255,.8)', fontSize: 13, fontFamily: 'var(--fb)', fontWeight: 500 }}>ابدأ اليوم</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--fh)',
            fontSize: 'clamp(28px,4vw,52px)', color: 'white',
            marginBottom: 20, lineHeight: 1.3,
          }}>
            ابدأ رحلتك التعليمية{' '}
            <span style={{
              background: 'linear-gradient(135deg,#B48EFF,#73C3FF,#5EECEA)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>معنا</span>
          </h2>

          <p style={{
            fontSize: 'clamp(14px,1.8vw,17px)',
            color: 'rgba(255,255,255,.55)',
            lineHeight: 2, marginBottom: 40, maxWidth: 580, margin: '0 auto 40px',
          }}>
            سواء كنت تبحث عن جامعة مناسبة، منحة دراسية، أو تخطيط أكاديمي واضح، فإن Global Gate Academy هنا لمساعدتك في كل خطوة.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="g-btn g-btn-prim" style={{ fontSize: 16, padding: '15px 36px' }}>احجز استشارة</Link>
            <Link to="/contact" className="g-btn g-btn-glass" style={{ fontSize: 16, padding: '15px 36px' }}>تواصل معنا</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
