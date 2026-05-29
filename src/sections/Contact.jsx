import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { contactInfo, socialLinks } from '../data/contact';
import SocialIcon from '../components/SocialIcon';

export default function Contact({ hideHeader = false }) {
  const r1 = useReveal(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    borderRadius: 12, fontSize: 15,
    fontFamily: 'var(--fb)',
    background: 'var(--bg)',
    border: '1.5px solid rgba(123,53,208,.14)',
    color: 'var(--tx)', outline: 'none',
    transition: 'border-color .2s',
    direction: 'rtl', textAlign: 'right',
  };

  return (
    <section id="contact" className="gs" style={{ background: 'var(--bg)' }}>
      <div className="gc">
        {!hideHeader && (
          <div style={{ textAlign: 'center', marginBottom: 52, ...r1.style }} ref={r1.ref}>
            <div className="g-tag" style={{ display: 'inline-flex' }}><span className="g-dot" />تواصل معنا</div>
            <h2 className="g-title" style={{ margin: '12px 0 10px' }}>تواصل معنا</h2>
            <p className="g-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
              يسعدنا دائماً استقبال استفسارات الطلاب وأولياء الأمور والشركاء.
            </p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40 }}>
          <div>
            <div className="g-card" style={{ padding: '32px 28px', marginBottom: 24 }}>
              <h3 style={{ fontFamily: 'var(--fh)', fontSize: 18, marginBottom: 24, color: 'var(--tx)' }}>بيانات التواصل</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {contactInfo.map((c, i) => (
                  <a key={i} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--tx)', textDecoration: 'none' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, background: 'linear-gradient(135deg,rgba(123,53,208,.08),rgba(27,135,228,.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--mt)', marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontSize: 15, color: 'var(--tx)', fontWeight: 500 }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="g-card" style={{ padding: '24px 28px' }}>
              <h3 style={{ fontFamily: 'var(--fh)', fontSize: 16, marginBottom: 18, color: 'var(--tx)' }}>تابعنا على</h3>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} title={s.label} style={{ width: 42, height: 42, borderRadius: 10, background: `${s.color}14`, border: `1px solid ${s.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, textDecoration: 'none', transition: 'all .22s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}14`; e.currentTarget.style.color = s.color; }}
                  ><SocialIcon name={s.label} size={18} /></a>
                ))}
              </div>
            </div>
          </div>

          <div className="g-card" style={{ padding: '36px 32px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', margin: '0 auto 20px', background: 'linear-gradient(135deg,#7B35D0,#00C9C8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>✓</div>
                <h3 style={{ fontFamily: 'var(--fh)', fontSize: 20, color: 'var(--tx)', marginBottom: 10 }}>تم إرسال رسالتك!</h3>
                <p style={{ color: 'var(--mt)', fontSize: 15 }}>سنتواصل معك في أقرب وقت ممكن.</p>
                <button className="g-btn g-btn-outline" style={{ marginTop: 24 }}
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}>
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'var(--fh)', fontSize: 18, marginBottom: 24, color: 'var(--tx)' }}>أرسل رسالة</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: 13, color: 'var(--mt)', marginBottom: 6 }}>الاسم *</label>
                      <input name="name" required value={form.name} onChange={handleChange}
                        placeholder="اسمك الكامل" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--pp)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(123,53,208,.14)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, color: 'var(--mt)', marginBottom: 6 }}>رقم الهاتف</label>
                      <input name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+20 ..." style={{ ...inputStyle, direction: 'ltr', textAlign: 'right' }}
                        onFocus={e => e.target.style.borderColor = 'var(--pp)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(123,53,208,.14)'}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'var(--mt)', marginBottom: 6 }}>البريد الإلكتروني *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="example@email.com" style={{ ...inputStyle, direction: 'ltr', textAlign: 'right' }}
                      onFocus={e => e.target.style.borderColor = 'var(--pp)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(123,53,208,.14)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'var(--mt)', marginBottom: 6 }}>الرسالة *</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={e => e.target.style.borderColor = 'var(--pp)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(123,53,208,.14)'}
                    />
                  </div>
                  <button type="submit" className="g-btn g-btn-prim" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 16, opacity: sending ? 0.75 : 1 }} disabled={sending}>
                    {sending ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
