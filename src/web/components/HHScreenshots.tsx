import { useEffect, useRef } from 'react';

const screenshots = [
  {
    // Screenshot 1 — Advisor
    url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/25/2c/55/252c5541-4bbc-f32c-526e-3c231fdade91/IMG_4404.PNG/460x998bb.webp',
    label: 'The Advisor',
  },
  {
    // Screenshot 2 — Profile
    url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b5/cc/36/b5cc3680-a54d-38fc-13da-0d054abe49eb/IMG_4403.PNG/460x998bb.webp',
    label: 'Profile',
  },
  {
    // Screenshot 6 — Properties
    url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b3/ac/0f/b3ac0f9f-d95d-0a96-863e-4b30b57a54b0/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-04-10_at_13.15.25.png/460x998bb.webp',
    label: 'Properties',
  },
  {
    // Screenshot 8 — Mixing Calculator
    url: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a7/6d/34/a76d346f-18ce-855c-c578-57c8b238b9fc/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2026-04-10_at_13.15.33.png/460x998bb.webp',
    label: 'Mixing Calculator',
  },
  {
    url: 'https://storage.googleapis.com/runable-templates/cli-uploads%2F1f4y0OlT9eKqtGaxlyoYCLDCB9hmzVXv%2F5ryHaHWyzbHrTjDjvUZuX%2FImage_4-10-26_at_1.15_PM_7IKu_q.png',
    label: 'Progression',
  },
];

function PhoneMockup({ src, label, index }: { src: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add('visible'), index * 80);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <div style={{
        position: 'relative',
        width: '160px',
        background: '#0f0f0f',
        border: '2px solid #222',
        borderRadius: '28px',
        padding: '10px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-8px) scale(1.02)';
        el.style.boxShadow = '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,160,23,0.2)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0) scale(1)';
        el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
      }}
      >
        <div style={{
          position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
          width: '44px', height: '14px', background: '#0f0f0f',
          borderRadius: '0 0 8px 8px', zIndex: 2,
        }} />
        <img src={src} alt={label} style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
      </div>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
        color: '#444', letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>{label}</span>
    </div>
  );
}

export default function HHScreenshots() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="screenshots" style={{ padding: '120px 2rem', borderTop: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div ref={headRef} className="reveal" style={{ marginBottom: '4rem' }}>
          <span className="section-label">// see it in action</span>
          <h2 style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0f0f0',
            margin: '0.5rem 0 0', lineHeight: 0.95, letterSpacing: '0.01em',
          }}>
            Five screens.<br />
            <span style={{ color: '#D4A017' }}>Zero fluff.</span>
          </h2>
        </div>

        <div style={{
          display: 'flex', gap: '1.5rem',
          justifyContent: 'center', flexWrap: 'wrap',
          alignItems: 'flex-end',
        }}>
          {screenshots.map((s, i) => (
            <PhoneMockup key={s.label} src={s.url} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
