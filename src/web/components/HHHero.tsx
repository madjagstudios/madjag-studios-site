const APP_STORE_URL = 'https://apps.apple.com/us/app/hyland-helper/id6761792150';
const APP_ICON = 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/85/44/97/8544973c-c340-49c0-c87f-7b73a9fff776/Placeholder.mill/400x400bb-75.webp';
const HERO_SCREENSHOT = 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/25/2c/55/252c5541-4bbc-f32c-526e-3c231fdade91/IMG_4404.PNG/460x998bb.webp';

export default function HHHero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '80px 2rem 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '35%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Diagonal line accents */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
        background: 'linear-gradient(135deg, transparent 50%, rgba(212,160,23,0.03) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
        {/* Left content */}
        <div>
          {/* App icon + label */}
          <div className="fade-up delay-1" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <img src={APP_ICON} alt="Hyland Helper icon" style={{ width: '52px', height: '52px', borderRadius: '12px' }} />
            <div>
              <div className="section-label">Schedule 1 companion app</div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: '0.85rem', color: '#444', letterSpacing: '0.05em' }}>Free on iOS · In-App Purchases</div>
            </div>
          </div>

          <h1 className="fade-up delay-2" style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            lineHeight: 0.95, letterSpacing: '0.01em', color: '#f0f0f0',
            marginBottom: '0.5rem',
          }}>
            Your advisor.<br />
            Your operation.<br />
            <span style={{ color: '#D4A017' }}>Your call.</span>
          </h1>

          <div className="fade-up delay-3" style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '1.5rem 0' }}>
            <span className="gold-line" />
            <p style={{
              fontFamily: "'Rajdhani', sans-serif", fontWeight: 500,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#999',
              letterSpacing: '0.04em',
            }}>
              Stop guessing. Start building a real operation.
            </p>
          </div>

          <p className="fade-up delay-4" style={{
            fontFamily: "'Inter', sans-serif", fontSize: '1rem',
            color: '#666', lineHeight: 1.8, maxWidth: '500px', marginBottom: '2rem',
          }}>
            Hyland Helper knows your rank, your properties, your setup. Ask it anything about Schedule 1 and get an answer tuned to where you actually are in the game. Not a wiki. Not generic copy-paste advice.
          </p>

          <div className="fade-up delay-5" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
              className="cta-pulse"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
                fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#0a0a0a', textDecoration: 'none',
                background: '#D4A017', padding: '14px 32px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#F0B820')}
              onMouseLeave={e => (e.currentTarget.style.background = '#D4A017')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download Free
            </a>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#333', letterSpacing: '0.1em' }}>
              iOS 15.1+ required
            </span>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="fade-up delay-3" style={{ position: 'relative', flexShrink: 0 }}>
          {/* Gold glow behind phone */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '260px', height: '500px',
            background: 'radial-gradient(ellipse, rgba(212,160,23,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          {/* Phone frame */}
          <div style={{
            position: 'relative',
            width: '220px',
            background: '#111',
            border: '2px solid #2a2a2a',
            borderRadius: '36px',
            padding: '12px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,160,23,0.1)',
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)',
              width: '60px', height: '20px', background: '#111',
              borderRadius: '0 0 12px 12px', zIndex: 2,
            }} />
            <img
              src={HERO_SCREENSHOT}
              alt="Hyland Helper app screenshot"
              style={{ width: '100%', borderRadius: '26px', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
