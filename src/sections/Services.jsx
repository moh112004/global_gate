import { useReveal } from '../hooks/useReveal';
import { services } from '../data/services';

export default function ServicesSection({ hideHeader = false }) {
  const r1 = useReveal(0);
  const r2 = useReveal(80);

  return (
    <section id="services" className="gs" style={{ background: 'var(--wh)' }}>
      <div className="gc">
        {!hideHeader && (
          <div style={{ textAlign: 'center', marginBottom: 56, ...r1.style }} ref={r1.ref}>
            <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />خدماتنا</div>
            <h2 className="g-title" style={{ margin: '12px 0 10px' }}>منظومة الخدمات</h2>
            <p className="g-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
              نقدم خدمات متكاملة تغطي كل مراحل رحلتك الأكاديمية من الاستشارة الأولى حتى الاستقرار في وجهتك الدراسية.
            </p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24, ...r2.style }} ref={r2.ref}>
          {services.map((s, i) => (
            <div key={i} className="g-card" style={{ padding: '28px 26px', borderTop: `3px solid ${s.color}`, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -10, left: -6, fontSize: 80, fontWeight: 900, fontFamily: 'var(--fh)', color: `${s.color}08`, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{s.num}</div>

              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, marginBottom: 16, background: `${s.color}14`, fontSize: 13, fontWeight: 800, color: s.color, fontFamily: 'monospace' }}>{s.num}</div>

              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, fontFamily: 'var(--fh)', color: 'var(--tx)', lineHeight: 1.4 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--mt)', lineHeight: 1.85, marginBottom: 18 }}>{s.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {s.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg,${s.color},#1B87E4)` }} />
                    <span style={{ fontSize: 13.5, color: 'var(--mt)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
