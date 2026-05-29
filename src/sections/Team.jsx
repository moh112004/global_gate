import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { departments, theses } from '../data/team';

function DepartmentCard({ dept, index }) {
  const r = useReveal(index * 60);
  return (
    <div style={{ marginBottom: 72, ...r.style }} ref={r.ref}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12, flexShrink: 0,
          background: `${dept.color}18`, border: `2px solid ${dept.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, color: dept.color, fontFamily: 'monospace', fontWeight: 700,
        }}>{index + 1}</div>
        <div>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 22, color: 'var(--tx)', marginBottom: 4 }}>{dept.title}</h2>
          <p style={{ fontSize: 14.5, color: 'var(--mt)', lineHeight: 1.7 }}>{dept.desc}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 20 }}>
        {dept.members.map((m, mi) => (
          <div key={mi} className="g-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            {m.image
              ? <img src={m.image} alt={m.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 16, boxShadow: `0 6px 20px ${dept.color}30` }} />
              : (
                <div style={{
                  width: 80, height: 80, borderRadius: '50%', marginBottom: 16,
                  background: `linear-gradient(135deg,${dept.color},${dept.color}88)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 22, fontWeight: 700, fontFamily: 'var(--fh)',
                  boxShadow: `0 6px 20px ${dept.color}30`,
                }}>{m.initials}</div>
              )
            }
            <h3 style={{ fontFamily: 'var(--fh)', fontSize: 17, color: 'var(--tx)', marginBottom: 6 }}>{m.name}</h3>
            <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 100, background: `${dept.color}12`, color: dept.color, fontSize: 12, fontWeight: 600, marginBottom: 12, fontFamily: 'var(--fb)' }}>{m.role}</span>
            <p style={{ fontSize: 13.5, color: 'var(--mt)', lineHeight: 1.75 }}>{m.bio}</p>
            {m.linkedin && (
              <a href={m.linkedin} target="_blank" rel="noreferrer" style={{ marginTop: 14, width: 32, height: 32, borderRadius: 8, background: `${dept.color}10`, border: `1px solid ${dept.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: dept.color, fontFamily: 'monospace' }}>li</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ThesesSection() {
  const r = useReveal(0);
  if (!theses.length) return null;

  return (
    <section className="gs" style={{ background: 'var(--wh)' }}>
      <div className="gc">
        <div style={{ textAlign: 'center', marginBottom: 52, ...r.style }} ref={r.ref}>
          <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />الأبحاث</div>
          <h2 className="g-title" style={{ margin: '12px 0 10px' }}>الأبحاث والرسائل الأكاديمية</h2>
          <p className="g-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            إسهامات أكاديمية وبحثية من فريق الأكاديمية.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
          {theses.map((t, i) => (
            <div key={i} className="g-card" style={{ padding: '28px 24px', borderRight: '4px solid var(--pp)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, gap: 12 }}>
                <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 100, background: 'rgba(123,53,208,.08)', color: 'var(--pp)', fontSize: 12, fontWeight: 600, fontFamily: 'var(--fb)', whiteSpace: 'nowrap' }}>{t.category}</span>
                <span style={{ fontSize: 12, color: 'var(--mt)', fontFamily: 'monospace', flexShrink: 0 }}>{t.year}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--fh)', fontSize: 16, color: 'var(--tx)', marginBottom: 10, lineHeight: 1.5 }}>{t.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--mt)', marginBottom: 8 }}>{t.author}</p>
              {t.desc && <p style={{ fontSize: 13.5, color: 'var(--mt)', lineHeight: 1.8 }}>{t.desc}</p>}
              {t.link && (
                <a href={t.link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', marginTop: 14, fontSize: 13, color: 'var(--pp)', fontWeight: 600, fontFamily: 'var(--fb)' }}>
                  اقرأ البحث ←
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Team() {
  const r1 = useReveal(0);

  return (
    <>
      <section className="gs" style={{ background: 'var(--bg)' }} id="team-content">
        <div className="gc">
          <div style={{ maxWidth: 760, margin: '0 auto 72px', textAlign: 'center', ...r1.style }} ref={r1.ref}>
            <p style={{ fontSize: 16.5, color: 'var(--mt)', lineHeight: 2 }}>
              يضم فريق <strong style={{ color: 'var(--tx)' }}>Global Gate Academy</strong> مجموعة من المختصين في الإرشاد الأكاديمي، التوجيه المهني، وإدارة التقديمات الجامعية الدولية، يعملون بخبرة وشغف لمساعدة الطلاب على بناء مستقبل أكاديمي أكثر وضوحاً واستقراراً.
            </p>
          </div>

          {departments.map((dept, i) => (
            <DepartmentCard key={i} dept={dept} index={i} />
          ))}

          <div style={{ marginTop: 20, padding: '48px 36px', borderRadius: 20, textAlign: 'center', background: 'linear-gradient(135deg,#080F1E,#0C1830)', border: '1px solid rgba(123,53,208,.2)' }}>
            <h3 style={{ fontFamily: 'var(--fh)', fontSize: 26, color: 'white', marginBottom: 12 }}>انضم إلى فريقنا</h3>
            <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.55)', lineHeight: 1.9, maxWidth: 520, margin: '0 auto 28px' }}>
              نرحب دائماً بالكفاءات المتميزة الراغبة في المساهمة في بناء مستقبل تعليمي أفضل.
            </p>
            <Link to="/contact" className="g-btn g-btn-prim" style={{ fontSize: 16, padding: '14px 36px' }}>تواصل معنا</Link>
          </div>
        </div>
      </section>

      <ThesesSection />
    </>
  );
}
