export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '100px 2rem',
        borderTop: '1px solid #2a2a2a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #9b1c1c, transparent)',
        }}
      />

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '3rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left */}
        <div>
          <span className="section-label fade-up delay-1">// contact</span>
          <h2
            className="fade-up delay-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#f0f0f0',
              margin: '0.5rem 0 0',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
            }}
          >
            Say something.<br />
            <span style={{ color: '#9b1c1c' }}>Or don't.</span>
          </h2>
          <p
            className="fade-up delay-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: '#666',
              marginTop: '1.25rem',
              maxWidth: '380px',
              lineHeight: 1.75,
            }}
          >
            No socials yet. Still figuring out which platforms aren't on
            fire this week. Links will appear here when they do.
          </p>
          <p
            className="fade-up delay-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: '#666',
              marginTop: '0.75rem',
              maxWidth: '380px',
              lineHeight: 1.75,
            }}
          >
            For now: find Hyland Helper on the App Store and leave a review.
            That counts as contact too.
          </p>

          <a
            href="mailto:madjagstudios@gmail.com"
            className="fade-up delay-5"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#f0f0f0',
              textDecoration: 'none',
              background: '#9b1c1c',
              padding: '10px 24px',
              transition: 'background 0.2s',
              clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#c0392b')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#9b1c1c')}
          >
            madjagstudios@gmail.com
          </a>

          <a
            href="https://apps.apple.com/us/app/hyland-helper/id6761792150"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up delay-6"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#f0f0f0',
              textDecoration: 'none',
              border: '1px solid #9b1c1c',
              padding: '10px 24px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(155,28,28,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Hyland Helper on the App Store
          </a>
        </div>

        {/* Right: placeholder social slots */}
        <div className="fade-up delay-4" style={{ minWidth: '220px' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            color: '#333',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            // socials coming soon
          </p>
          {['GitHub', 'Twitter / X', 'Discord', 'Reddit'].map((s) => (
            <div
              key={s}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 0',
                borderBottom: '1px solid #1e1e1e',
              }}
            >
              <span style={{ width: '6px', height: '6px', background: '#2a2a2a', display: 'block' }} />
              <span
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#333',
                  letterSpacing: '0.05em',
                }}
              >
                {s}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem',
                  color: '#2a2a2a',
                  marginLeft: 'auto',
                  letterSpacing: '0.1em',
                }}
              >
                TBD
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
