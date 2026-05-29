import { useReveal } from '../hooks/useReveal';
import { testimonials } from '../data/testimonials';

export default function   Testimonials() {
  const r1 = useReveal(0);
  const r2 = useReveal(120);

  return (
    <>
      <section className="gs" style={{ background: 'var(--wh)' }}>
        <div className="gc">
          <div style={{ textAlign: 'center', marginBottom: 52, ...r1.style }} ref={r1.ref}>
            <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />آراء الطلاب</div>
            <h2 className="g-title" style={{ margin: '12px 0 0' }}>تجارب طلابنا</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, ...r2.style }} ref={r2.ref}>
            {testimonials.map((q, i) => (
              <div key={i} className="g-card" style={{ padding: '32px 28px', position: 'relative' }}>
                <div style={{ fontSize: 72, lineHeight: 1, fontFamily: 'Georgia,serif', color: `${q.color}15`, position: 'absolute', top: 16, left: 20, userSelect: 'none', pointerEvents: 'none' }}>"</div>
                <p style={{ fontSize: 15, color: 'var(--tx)', lineHeight: 1.95, marginBottom: 24, position: 'relative', zIndex: 1, fontStyle: 'italic' }}>{q.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, background: `linear-gradient(135deg,${q.color},${q.color}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 14, fontWeight: 700, fontFamily: 'var(--fh)' }}>{q.initials}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--tx)', fontFamily: 'var(--fh)' }}>{q.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--mt)' }}>{q.role}</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0, height: 3, borderRadius: '0 0 var(--r) var(--r)', background: `linear-gradient(90deg,transparent,${q.color},transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
