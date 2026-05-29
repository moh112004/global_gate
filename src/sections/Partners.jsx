import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { partnerTypes, partnerLogos } from '../data/partners';

const SHOW_LOGOS = false; // set to true when logos are ready

export default function PartnersContent() {
  const r1 = useReveal(0);
  const r2 = useReveal(100);
  const r3 = useReveal(160);

  return (
    <>
      <section className="gs" style={{ background: 'var(--bg)' }}>
        <div className="gc">
          <div style={{ textAlign: 'center', marginBottom: 52, ...r1.style }} ref={r1.ref}>
            <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />شراكاتنا</div>
            <h2 className="g-title" style={{ margin: '12px 0 10px' }}>أنواع شركائنا</h2>
            <p className="g-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
              نفخر بشراكاتنا مع مؤسسات تعليمية وجامعات ومراكز تدريب ومنظمات شبابية تسهم في تعزيز فرص التعليم والتطوير للشباب.
            </p>
          </div>

          <div className="g-grid-3" style={r2.style} ref={r2.ref}>
            {partnerTypes.map((p, i) => (
              <div key={i} className="g-card" style={{ padding: '28px 24px', borderTop: `3px solid ${p.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, flexShrink: 0, background: `${p.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: p.color, fontFamily: 'monospace' }}>{p.count}</div>
                  <h3 style={{ fontFamily: 'var(--fh)', fontSize: 17, color: 'var(--tx)' }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: 'var(--mt)', lineHeight: 1.85 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {SHOW_LOGOS && (
        <section className="gs" style={{ background: 'var(--wh)', paddingTop: 72, paddingBottom: 72 }}>
          <div className="gc">
            <div style={{ textAlign: 'center', marginBottom: 44, ...r3.style }} ref={r3.ref}>
              <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />شعارات الشركاء</div>
              <h2 className="g-title" style={{ margin: '12px 0 10px' }}>شركاؤنا</h2>
              <p className="g-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
                نعمل مع نخبة من المؤسسات التعليمية والمنظمات الدولية لتوفير أفضل الفرص لطلابنا.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 16, ...r3.style }}>
              {partnerLogos.map((l, i) => (
                <div key={i} style={{
                  height: 100, borderRadius: 12,
                  background: 'var(--bg)', border: '1px solid rgba(220,225,245,.8)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: 8, cursor: 'default', transition: 'all .3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = l.color + '60'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${l.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(220,225,245,.8)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: `${l.color}18`, border: `2px dashed ${l.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: l.color, fontWeight: 700, fontFamily: 'monospace' }}>P</div>
                  <span style={{ fontSize: 11, color: 'var(--mt)', fontFamily: 'var(--fb)' }}>شريك {i + 1}</span>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: 32, fontSize: 13.5, color: 'var(--mt)', fontStyle: 'italic' }}>
              * سيتم تحديث شعارات الشركاء قريباً
            </p>
          </div>
        </section>
      )}

      <section className="gs" style={{ background: 'var(--bg)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="gc">
          <div style={{ padding: '52px 40px', borderRadius: 24, textAlign: 'center', background: 'linear-gradient(160deg,#080F1E,#0C1830)', border: '1px solid rgba(123,53,208,.2)', boxShadow: '0 24px 64px rgba(8,15,30,.3)', position: 'relative', overflow: 'hidden', ...r1.style }}>
            <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(123,53,208,.15) 0%,transparent 70%)', borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none' }} />
            <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(24px,3vw,38px)', color: 'white', marginBottom: 14, position: 'relative', zIndex: 1 }}>
              هل تريد أن تصبح شريكاً؟
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', lineHeight: 1.9, maxWidth: 520, margin: '0 auto 32px', position: 'relative', zIndex: 1 }}>
              نرحب بالتعاون مع الجامعات والمؤسسات التعليمية والمنظمات الشبابية التي تشاركنا رؤيتنا في تمكين الطلاب.
            </p>
            <Link to="/contact" className="g-btn g-btn-prim" style={{ fontSize: 16, padding: '14px 36px', position: 'relative', zIndex: 1 }}>
              تواصل معنا للشراكة
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
