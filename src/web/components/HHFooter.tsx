export default function HHFooter() {
  return (
    <footer style={{
      borderTop: '1px solid #161616',
      padding: '2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
          color: '#2a2a2a', letterSpacing: '0.1em',
        }}>
          © {new Date().getFullYear()} MadJag Studios
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
          color: '#222', letterSpacing: '0.08em',
        }}>
          Unofficial fan app. Not affiliated with TVGS or Schedule 1 developers.
        </span>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { label: 'Privacy Policy', href: '/privacy.html' },
          { label: 'Terms of Service', href: '/terms.html' },
          { label: 'Support', href: '/support.html' },
        ].map(({ label, href }) => (
          <a key={label} href={href} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
            color: '#333', letterSpacing: '0.1em', textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#666')}
          onMouseLeave={e => (e.currentTarget.style.color = '#333')}
          >{label}</a>
        ))}
      </div>
    </footer>
  );
}
