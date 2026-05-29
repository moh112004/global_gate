export default function PageHero({ title, subtitle = '' }) {
  return (
    <section className="page-hero" style={{
      minHeight: 320,
      background: `
        radial-gradient(ellipse at 72% 18%, rgba(100,45,210,.3) 0%, transparent 55%),
        radial-gradient(ellipse at 18% 80%, rgba(0,201,200,.18) 0%, transparent 55%),
        #080F1E
      `,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '130px 28px 80px',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(123,53,208,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(123,53,208,.03) 1px,transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <div style={{
        position: 'absolute', top: '-20%', right: '-5%', width: 360, height: 360,
        background: 'radial-gradient(circle,rgba(123,53,208,.2) 0%,transparent 70%)',
        borderRadius: '50%', filter: 'blur(36px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-5%', width: 300, height: 300,
        background: 'radial-gradient(circle,rgba(0,201,200,.15) 0%,transparent 70%)',
        borderRadius: '50%', filter: 'blur(36px)', pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, animation: 'fadeUp .7s ease forwards' }}>
        <h1 style={{
          fontFamily: 'var(--fh)',
          fontSize: 'clamp(28px,4vw,54px)', fontWeight: 700, color: 'white',
          marginBottom: subtitle ? 16 : 0,
        }}>{title}</h1>
        {subtitle && (
          <p style={{
            fontSize: 'clamp(14px,1.8vw,17px)',
            color: 'rgba(255,255,255,.52)', maxWidth: 560, lineHeight: 1.9,
            fontFamily: 'var(--fb)', margin: '0 auto',
          }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
