import MadJagLogo from './MadJagLogo';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2rem',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background diagonal red accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45%',
          height: '100%',
          background: 'linear-gradient(135deg, transparent 40%, rgba(155,28,28,0.06) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Vertical red line accent */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '2px',
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, #9b1c1c, transparent)',
          opacity: 0.6,
        }}
      />
      {/* Dot grid */}
      <div
        style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0, left: '55%',
          backgroundImage: 'radial-gradient(circle, #2a2a2a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="fade-up delay-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span className="section-label">// est. 2024</span>
          <div style={{ opacity: 0.9 }}>
            <MadJagLogo size={96} />
          </div>
        </div>

        <h1
          className="fade-up delay-2"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            lineHeight: 0.9,
            margin: '0.3em 0 0.1em',
            letterSpacing: '0.01em',
            color: '#f0f0f0',
            textTransform: 'none',
          }}
        >
          MadJag<br />
          <span style={{ color: '#9b1c1c' }}>Studios</span>
        </h1>

        <div
          className="fade-up delay-3"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '1.5rem 0' }}
        >
          <span className="accent-line" />
          <p
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              fontWeight: 500,
              color: '#a0a0a0',
              margin: 0,
              letterSpacing: '0.04em',
            }}
          >
            Tools for gamers. Built by one guy. Shipped anyway.
          </p>
        </div>

        <p
          className="fade-up delay-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#666',
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Solo indie dev. No VC funding, no 40-person team, no ping-pong tables. 
          Just software that actually does something useful. For games, for life,
          occasionally for both at the same time.
        </p>

        <div className="fade-up delay-5" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#f0f0f0',
              textDecoration: 'none',
              background: '#9b1c1c',
              padding: '12px 28px',
              display: 'inline-block',
              transition: 'background 0.2s',
              clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#c0392b')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#9b1c1c')}
          >
            See the Work
          </a>
          <a
            href="#about"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#a0a0a0',
              textDecoration: 'none',
              border: '1px solid #2a2a2a',
              padding: '12px 28px',
              display: 'inline-block',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f0f0f0';
              e.currentTarget.style.borderColor = '#555';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a0a0a0';
              e.currentTarget.style.borderColor = '#2a2a2a';
            }}
          >
            About
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="fade-up delay-8"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#444', letterSpacing: '0.2em' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #9b1c1c, transparent)' }} />
      </div>
    </section>
  );
}
