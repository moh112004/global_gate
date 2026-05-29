import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const teaserServices = [
  { title: 'الإرشاد الأكاديمي', desc: 'مساعدتك في اختيار التخصص المناسب وبناء مسارك الأكاديمي بوضوح وثقة.', color: '#7B35D0' },
  { title: 'القبولات والمنح',   desc: 'إدارة كاملة لجميع مراحل التقديم الجامعي والبحث عن المنح الدراسية.', color: '#1B87E4' },
  { title: 'الدعم الكامل',      desc: 'متابعة مستمرة من الاستشارة الأولى حتى الاستقرار في وجهتك الدراسية.', color: '#00C9C8' },
];

export default function HomeTeaser() {
  const r = useReveal(0);
  return (
    <section className="gs" style={{ background: 'var(--bg)' }}>
      <div className="gc">
        <div style={{ textAlign: 'center', marginBottom: 48, ...r.style }} ref={r.ref}>
          <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />خدماتنا</div>
          <h2 className="g-title" style={{ margin: '12px 0 10px' }}>ماذا نقدم لك؟</h2>
          <p className="g-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            منظومة خدمات متكاملة تغطي رحلتك من الاستشارة الأولى حتى الاستقرار في وجهتك الدراسية.
          </p>
        </div>

        <div className="g-grid-3" style={r.style}>
          {teaserServices.map((s, i) => (
            <div key={i} className="g-card" style={{ padding: '28px 24px', borderTop: `3px solid ${s.color}` }}>
              <h3 style={{ fontFamily: 'var(--fh)', fontSize: 18, marginBottom: 10, color: 'var(--tx)' }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--mt)', lineHeight: 1.85, marginBottom: 16 }}>{s.desc}</p>
              <Link to="/services" style={{ fontSize: 13.5, color: s.color, fontWeight: 600, fontFamily: 'var(--fb)' }}>اكتشف المزيد ←</Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/services" className="g-btn g-btn-outline" style={{ fontSize: 15 }}>استكشف جميع الخدمات</Link>
        </div>
      </div>
    </section>
  );
}
