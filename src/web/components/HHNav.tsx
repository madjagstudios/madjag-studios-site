import { useState } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/us/app/hyland-helper/id6761792150';
const APP_ICON = 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/85/44/97/8544973c-c340-49c0-c87f-7b73a9fff776/Placeholder.mill/400x400bb-75.webp';

export default function HHNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e1e1e',
        padding: '0 2rem', height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={APP_ICON} alt="Hyland Helper" style={{ width: '32px', height: '32px', borderRadius: '7px' }} />
          <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.06em', color: '#f0f0f0' }}>
            Hyland Helper
          </span>
        </div>

        {/* Desktop links */}
        <div className="nav-links-desktop" style={{ alignItems: 'center', gap: '2rem' }}>
          {['Features', 'Screenshots'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
              fontSize: '0.88rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#666', textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
            onMouseLeave={e => (e.currentTarget.style.color = '#666')}
            >{item}</a>
          ))}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#0a0a0a', textDecoration: 'none',
            background: '#D4A017', padding: '7px 18px', transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#F0B820')}
          onMouseLeave={e => (e.currentTarget.style.background = '#D4A017')}
          >Download Free</a>
        </div>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu hh" onClick={() => setOpen(false)}>
          {['Features', 'Screenshots'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
              fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#a0a0a0', textDecoration: 'none',
            }}>{item}</a>
          ))}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#0a0a0a', textDecoration: 'none',
            background: '#D4A017', padding: '8px 18px', display: 'inline-block', width: 'fit-content',
          }}>Download Free</a>
        </div>
      )}
    </>
  );
}
