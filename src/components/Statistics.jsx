import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';
import { stats } from '../data/stats';

function StatItem({ target, suffix, label }) {
  const [ref, count] = useCounter(target, 2200);
  const display = target >= 1000
    ? (count >= 1000 ? (count / 1000).toFixed(1) + 'K' : count)
    : count;
  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '0 16px' }}>
      <div style={{
        fontFamily: 'var(--fh)',
        fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 700,
        color: 'white', lineHeight: 1.1, marginBottom: 8,
      }}>
        {suffix}{display}
      </div>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', fontFamily: 'var(--fb)', letterSpacing: '.02em' }}>
        {label}
      </div>
    </div>
  );
}

export default function Statistics() {
  const r = useReveal(0);

  return (
    <section className="gs" style={{
      background: 'linear-gradient(135deg,#7B35D0 0%,#1B87E4 55%,#00C9C8 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)`,
        backgroundSize: '52px 52px',
      }} />
      <div style={{
        position: 'absolute', top: '-30%', right: '-10%', width: 500, height: 500,
        background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 70%)',
        borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-10%', width: 500, height: 500,
        background: 'radial-gradient(circle,rgba(0,0,0,.1) 0%,transparent 70%)',
        borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none',
      }} />

      <div className="gc" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 56, ...r.style }} ref={r.ref}>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(24px,3vw,40px)', color: 'white', marginBottom: 10 }}>
            أرقام تعكس أثرنا
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.62)', maxWidth: 480, margin: '0 auto', lineHeight: 1.9 }}>
            نتائج حقيقية بنيناها مع طلابنا عبر سنوات من العمل والتميز.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(16px,4vw,0px)' }}>
          {stats.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
