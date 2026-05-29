import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { programs } from '../data/programs';

export default function Programs({ hideHeader = false }) {
  const r1 = useReveal(0);
  const r2 = useReveal(120);

  return (
    <section id="programs" className="gs" style={{
      background: 'linear-gradient(160deg,#080F1E 0%,#0C1830 50%,#080F1E 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(123,53,208,.14) 0%,transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 350, height: 350, background: 'radial-gradient(circle,rgba(0,201,200,.1) 0%,transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="gc" style={{ position: 'relative', zIndex: 1 }}>
        {!hideHeader && (
          <div style={{ textAlign: 'center', marginBottom: 52, ...r1.style }} ref={r1.ref}>
            <div className="g-tag" style={{ display: 'inline-flex', background: 'rgba(123,53,208,.18)', borderColor: 'rgba(123,53,208,.3)', color: '#B48EFF' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#B48EFF,#00C9C8)', display: 'inline-block', flexShrink: 0 }} />
              برامجنا
            </div>
            <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(24px,3vw,44px)', color: 'white', margin: '12px 0 10px' }}>برامج الأكاديمية</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.52)', lineHeight: 1.9, maxWidth: 560, margin: '0 auto' }}>
              ثلاثة برامج متخصصة تغطي كل احتياجات الطالب من التوجيه الأولي حتى الوصول إلى وجهته الدراسية.
            </p>
          </div>
        )}

        <div className="g-grid-3" style={r2.style} ref={r2.ref}>
          {programs.map((p, i) => (
            <div key={i} style={{
              padding: '32px 28px', borderRadius: 20,
              background: 'rgba(255,255,255,.04)',
              border: `1px solid ${p.accent}30`,
              backdropFilter: 'blur(8px)',
              transition: 'transform .3s ease,box-shadow .3s ease',
              position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 48px ${p.accent}28`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, left: 0, height: 3, background: `linear-gradient(90deg,transparent,${p.accent},transparent)` }} />

              <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 100, background: p.tagBg, color: p.accent, fontSize: 12, fontWeight: 600, marginBottom: 16, fontFamily: 'var(--fb)' }}>{p.tag}</span>

              <h3 style={{ fontFamily: 'var(--fh)', fontSize: 20, color: 'white', marginBottom: 14, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,.55)', lineHeight: 1.9, marginBottom: 24 }}>{p.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg,${p.accent}40,${p.accent}80)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: p.accent, fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,.65)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" style={{
                display: 'block', width: '100%', padding: '12px', borderRadius: 10,
                border: `1px solid ${p.accent}50`,
                background: `${p.accent}12`, color: p.accent,
                fontSize: 14, fontWeight: 700, fontFamily: 'var(--fh)',
                textAlign: 'center', transition: 'all .25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = `${p.accent}22`; }}
              onMouseLeave={e => { e.currentTarget.style.background = `${p.accent}12`; }}
              >
                اعرف المزيد
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
