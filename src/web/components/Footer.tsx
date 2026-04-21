export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: '1px solid #1e1e1e',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '22px',
            height: '22px',
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
              fontSize: '0.65rem',
              color: '#f0f0f0',
            }}
          >
            MJ
          </span>
        </div>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: '#333',
            letterSpacing: '0.08em',
          }}
        >
          © {year} MadJag Studios
        </span>
      </div>

      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          color: '#2a2a2a',
          letterSpacing: '0.1em',
        }}
      >
        // built by one guy with too many ideas
      </span>
    </footer>
  );
}
