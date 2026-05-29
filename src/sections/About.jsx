import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const values = [
  { title: 'الاحترافية',      desc: 'نعمل وفق معايير مؤسسية واضحة تضمن تقديم خدمات دقيقة وعالية الجودة.' },
  { title: 'الشفافية',        desc: 'نؤمن بأهمية الوضوح والمصداقية في جميع مراحل التقديم والتواصل.' },
  { title: 'التمكين',         desc: 'نسعى إلى بناء الثقة لدى الطلاب لاتخاذ قراراتهم الأكاديمية بثبات واستقلالية.' },
  { title: 'الجودة',          desc: 'نلتزم بتقديم تجربة تعليمية واستشارية متكاملة بمعايير دولية.' },
  { title: 'الابتكار',        desc: 'نعتمد على حلول وأساليب حديثة تواكب التطورات العالمية في التعليم.' },
  { title: 'التطوير المستمر', desc: 'نحرص على تطوير خدماتنا وأساليبنا بشكل دائم لمواكبة التحولات العالمية.' },
];

const challenges = [
  'ضعف الإرشاد الأكاديمي والتوجيهي',
  'محدودية الوصول للفرص التعليمية الدولية',
  'الفجوة بين التعليم وسوق العمل',
  'غياب التخطيط الأكاديمي طويل المدى',
  'التحديات الاقتصادية والظروف غير المستقرة',
];

const cardBorder = ['#7B35D0', '#1B87E4', '#00C9C8', '#9B59B6', '#3498DB', '#1ABC9C'];

export default function About({ hideHeader = false }) {
  const r1 = useReveal(0);
  const r2 = useReveal(100);
  const r3 = useReveal(200);

  return (
    <>
      <section id="about" className="gs" style={{ background: 'var(--bg)' }}>
        <div className="gc">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center', ...r1.style }} ref={r1.ref}>
            <div>
              {!hideHeader && <div className="g-tag"><span className="g-dot" />عن الأكاديمية</div>}
              {!hideHeader && <h2 className="g-title">نبني مستقبلك الأكاديمي<br />بثقة وخبرة</h2>}
              {!hideHeader && <div className="g-divider" />}
              <p style={{ color: 'var(--mt)', lineHeight: 2, marginBottom: 18, fontSize: 15.5 }}>
                <strong style={{ color: 'var(--tx)' }}>Global Gate Academy</strong> مؤسسة متخصصة في الإرشاد الأكاديمي وخدمات الدراسة بالخارج، تقدم حلولاً تعليمية متكاملة للطلاب الراغبين في مواصلة تعليمهم الجامعي والدراسات العليا في أفضل الوجهات الدولية.
              </p>
              <p style={{ color: 'var(--mt)', lineHeight: 2, fontSize: 15.5 }}>
                نعمل على بناء مسار أكاديمي واضح لكل طالب من خلال الجمع بين الاستشارة التعليمية، والتحليل الأكاديمي، والتخطيط الاستراتيجي، وإدارة التقديمات، والمتابعة المستمرة.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ padding: '26px 28px', borderRadius: 16, background: 'linear-gradient(135deg,rgba(123,53,208,.06),rgba(27,135,228,.06))', border: '1px solid rgba(123,53,208,.14)', borderRight: '4px solid #7B35D0' }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--pp)', marginBottom: 8, letterSpacing: '.05em', fontFamily: 'var(--fb)' }}>الرؤية</div>
                <p style={{ fontSize: 15, color: 'var(--tx)', lineHeight: 1.85 }}>
                  أن نكون المنصة التعليمية الرائدة في الإرشاد الأكاديمي والتوجيه نحو التعليم الدولي في السودان والمنطقة العربية وأفريقيا.
                </p>
              </div>
              <div style={{ padding: '26px 28px', borderRadius: 16, background: 'linear-gradient(135deg,rgba(0,201,200,.06),rgba(27,135,228,.06))', border: '1px solid rgba(0,201,200,.16)', borderRight: '4px solid #00C9C8' }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--cy)', marginBottom: 8, letterSpacing: '.05em', fontFamily: 'var(--fb)' }}>الرسالة</div>
                <p style={{ fontSize: 15, color: 'var(--tx)', lineHeight: 1.85 }}>
                  تمكين الطلاب من الوصول إلى أفضل الفرص التعليمية العالمية عبر تقديم خدمات أكاديمية واستشارية احترافية تساعدهم على بناء مستقبل أكاديمي ومهني أكثر نجاحاً.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gs" style={{ background: 'var(--wh)' }}>
        <div className="gc">
          <div style={{ textAlign: 'center', marginBottom: 52, ...r2.style }} ref={r2.ref}>
            <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />قيمنا</div>
            <h2 className="g-title" style={{ margin: '12px 0 0' }}>القيم التي نبني عليها</h2>
          </div>
          <div className="g-grid-3" style={r2.style}>
            {values.map((v, i) => (
              <div key={i} className="g-card" style={{ padding: '28px 24px' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, marginBottom: 16, background: 'linear-gradient(135deg,rgba(123,53,208,.09),rgba(27,135,228,.09))', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `3px solid ${cardBorder[i]}` }}>
                  <span style={{ fontSize: 20, fontWeight: 700, fontFamily: 'monospace', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{i + 1}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, fontFamily: 'var(--fh)', color: 'var(--tx)' }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--mt)', lineHeight: 1.85 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gs" style={{ background: 'var(--bg)' }}>
        <div className="gc">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 56, alignItems: 'center', ...r3.style }} ref={r3.ref}>
            <div>
              <div className="g-tag"><span className="g-dot" />لماذا Global Gate Academy؟</div>
              <h2 className="g-title">التحديات التي نواجهها معاً</h2>
              <div className="g-divider" />
              <p style={{ color: 'var(--mt)', lineHeight: 2, fontSize: 15.5, marginBottom: 28 }}>
                يمر قطاع التعليم العالي في السودان والمنطقة بتحديات كبيرة أثرت على مستقبل الطلاب. تعمل الأكاديمية على سد هذه الفجوة عبر توفير تجربة تعليمية واستشارية متكاملة.
              </p>
              {challenges.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, marginTop: 1, background: 'linear-gradient(135deg,rgba(123,53,208,.12),rgba(27,135,228,.12))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--pp)', fontWeight: 700 }}>✕</span>
                  <span style={{ fontSize: 15, color: 'var(--mt)', lineHeight: 1.8 }}>{c}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: '40px 36px', borderRadius: 20, background: 'linear-gradient(135deg,#080F1E,#0C1830)', border: '1px solid rgba(123,53,208,.2)', boxShadow: '0 20px 60px rgba(8,15,30,.4)' }}>
              <h3 style={{ fontFamily: 'var(--fh)', fontSize: 22, color: 'white', marginBottom: 28 }}>كيف نساعد الطلاب؟</h3>
              {[
                'الإرشاد الأكاديمي الذكي لاختيار التخصص المناسب',
                'بناء مسار أكاديمي واضح من التشتت إلى الخطة',
                'التوجيه نحو جامعات دولية معتمدة وفرص منح',
                'إدارة كاملة لمراحل التقديم والمتابعة',
                'التأهيل الأكاديمي والنفسي للحياة الجامعية',
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, marginTop: 1, background: 'linear-gradient(135deg,#7B35D0,#00C9C8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'white', fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: 14.5, color: 'rgba(255,255,255,.72)', lineHeight: 1.8 }}>{s}</span>
                </div>
              ))}
              <Link to="/contact" className="g-btn g-btn-prim" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
                احجز استشارة مجانية
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
