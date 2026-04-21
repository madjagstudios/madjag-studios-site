export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(15,15,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #2a2a2a',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo / Wordmark */}
      <a
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}
      >
        {/* MJ Monogram */}
        <div
          style={{
            width: '36px',
            height: '36px',
            background: '#9b1c1c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            clipPath: 'polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)',
          }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.1rem',
              color: '#f0f0f0',
              letterSpacing: '0.05em',
              lineHeight: 1,
            }}
          >
            MJ
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            color: '#f0f0f0',
            letterSpacing: '0.08em',
          }}
        >
          MadJag <span style={{ color: '#9b1c1c' }}>Studios</span>
        </span>
      </a>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['About', 'Projects'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#a0a0a0',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f0')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#f0f0f0',
            textDecoration: 'none',
            border: '1px solid #9b1c1c',
            padding: '6px 16px',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#9b1c1c';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
