import { useEffect, useRef } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/us/app/hyland-helper/id6761792150';

export default function HHCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{
      padding: '120px 2rem',
      borderTop: '1px solid #1e1e1e',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Gold glow center */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(212,160,23,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Top gold line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '120px', height: '2px', background: '#D4A017',
      }} />

      <div ref={ref} className="reveal" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">// free on ios</span>
        <h2 style={{
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
          fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#f0f0f0',
          margin: '0.5rem 0 0', lineHeight: 0.95, letterSpacing: '0.01em',
        }}>
          Stop winging it.<br />
          <span style={{ color: '#D4A017' }}>Start winning.</span>
        </h2>

        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: '1rem',
          color: '#555', margin: '1.5rem auto', maxWidth: '440px', lineHeight: 1.8,
        }}>
          Free to download. Daily question limit on free tier. Upgrade for full profile sync, unlimited questions, and premium recipe recommendations.
        </p>

        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
          className="cta-pulse"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: '1.05rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#0a0a0a', textDecoration: 'none',
            background: '#D4A017', padding: '16px 40px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#F0B820')}
          onMouseLeave={e => (e.currentTarget.style.background = '#D4A017')}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>

        <div style={{
          display: 'flex', gap: '2rem', justifyContent: 'center',
          marginTop: '2.5rem', flexWrap: 'wrap',
        }}>
          {[
            { val: 'Free', label: 'to download' },
            { val: 'iOS 15.1+', label: 'required' },
            { val: '18+', label: 'age rating' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
                fontSize: '1.3rem', color: '#D4A017',
              }}>{val}</div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
                color: '#333', letterSpacing: '0.15em', textTransform: 'uppercase',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
