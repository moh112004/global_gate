import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { countries } from '../data/destinations';

export default function Destinations({ hideHeader = false }) {
  const r1 = useReveal(0);
  const r2 = useReveal(100);

  return (
    <section id="destinations" className="gs" style={{ background: 'var(--bg)' }}>
      <div className="gc">
        {!hideHeader && (
          <div style={{ textAlign: 'center', marginBottom: 52, ...r1.style }} ref={r1.ref}>
            <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />وجهاتنا</div>
            <h2 className="g-title" style={{ margin: '12px 0 10px' }}>وجهاتنا التعليمية</h2>
            <p className="g-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
              نوفر فرصاً تعليمية في عدد من الوجهات الدولية المتميزة مع تقديم استشارات تساعد الطالب على اختيار الوجهة الأنسب.
            </p>
          </div>
        )}

        <div className="g-grid-3" style={r2.style} ref={r2.ref}>
          {countries.map((c, i) => (
            <div key={i} className="g-card" style={{ padding: '28px 24px', cursor: 'default', borderTop: `3px solid ${c.color}`, overflow: 'hidden', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <img
                  src={`https://flagcdn.com/w80/${c.code}.png`}
                  alt={c.en}
                  width={48}
                  height={36}
                  style={{ borderRadius: 6, objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,.18)', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 19, fontWeight: 700, color: 'var(--tx)' }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--mt)', fontFamily: 'monospace', letterSpacing: '.06em' }}>{c.en}</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--mt)', lineHeight: 1.85 }}>{c.desc}</p>
              <img
                src={`https://flagcdn.com/w160/${c.code}.png`}
                alt=""
                aria-hidden="true"
                style={{ position: 'absolute', bottom: -16, left: -10, width: 100, opacity: .06, pointerEvents: 'none', borderRadius: 4 }}
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center', padding: '36px', borderRadius: 20, background: 'linear-gradient(135deg,rgba(123,53,208,.07),rgba(27,135,228,.07))', border: '1px solid rgba(123,53,208,.12)', ...r1.style }}>
          <p style={{ fontSize: 15.5, color: 'var(--mt)', marginBottom: 20, lineHeight: 1.8 }}>
            هل تحتاج إلى مساعدة في اختيار الوجهة الدراسية الأنسب لك؟ استشارينا جاهزون لمساعدتك.
          </p>
          <Link to="/contact" className="g-btn g-btn-prim">احجز استشارة اختيار الوجهة</Link>
        </div>
      </div>
    </section>
  );
}
