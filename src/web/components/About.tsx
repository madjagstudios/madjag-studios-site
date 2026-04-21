export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 2rem',
        position: 'relative',
        borderTop: '1px solid #2a2a2a',
      }}
    >
      {/* Angled background block */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: '#161616',
          clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left: label + heading */}
        <div>
          <span className="section-label fade-up delay-1">// about the studio</span>
          <h2
            className="fade-up delay-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#f0f0f0',
              margin: '0.5rem 0 0',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
            }}
          >
            One dev.<br />
            <span style={{ color: '#9b1c1c' }}>Real software.</span>
          </h2>

          {/* Stats row */}
          <div
            className="fade-up delay-4"
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid #2a2a2a',
            }}
          >
            {[
              { value: '1', label: 'App Live' },
              { value: '3+', label: 'In Pipeline' },
              { value: '0', label: 'Investors' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '2.8rem',
                    color: '#9b1c1c',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    color: '#555',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: copy */}
        <div className="fade-up delay-3">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: '#a0a0a0',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}
          >
            MadJag Studios is a one-person indie operation. No committees. 
            No quarterly planning sessions. No one to blame but myself, which
            is honestly fine.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: '#a0a0a0',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}
          >
            The focus: useful software. Game companions, trading tools, 
            life trackers. Stuff I'd actually want to use. If it solves a real 
            problem, it gets built. If it doesn't, it gets scrapped.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: '#a0a0a0',
              lineHeight: 1.8,
            }}
          >
            Currently shipping iOS apps and web tools. More platforms when 
            the time is right. Or when I get bored enough.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['iOS', 'Web', 'React', 'Swift', 'Gaming', 'Utility'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  color: '#555',
                  border: '1px solid #2a2a2a',
                  padding: '3px 10px',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
