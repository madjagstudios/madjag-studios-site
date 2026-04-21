import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '🎯',
    title: 'The Advisor',
    description: 'Tell it your rank, cash, properties, and what you\'re producing. Get answers specific to your actual situation. It knows the game front to back and adjusts to your profile.',
    highlight: 'Profile-aware answers',
  },
  {
    icon: '⚗️',
    title: 'Mixing Calculator',
    description: 'Build recipes visually and hit buttons for most profitable, best ROI, or fastest profit. Premium users get recommendations filtered to only what they\'ve unlocked.',
    highlight: 'Optimize for your goals',
  },
  {
    icon: '🏠',
    title: 'Properties',
    description: 'Quick reference for every property in the game. Stats, capacity, and what each one is best suited for. Layout planning coming in a future update.',
    highlight: 'Full property reference',
  },
  {
    icon: '📈',
    title: 'Progression Tracker',
    description: 'See exactly what unlocks at every rank. Plan your next moves before you hit the level. No more finding out mid-run that you need two more ranks for that upgrade.',
    highlight: 'Know what\'s coming',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add('visible'), index * 100);
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="reveal" style={{
      background: '#161616',
      borderTop: '2px solid #1e1e1e',
      borderLeft: '1px solid #1e1e1e',
      borderRight: '1px solid #1e1e1e',
      borderBottom: '1px solid #1e1e1e',
      padding: '2rem',
      transition: 'border-top-color 0.25s, transform 0.25s',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderTopColor = '#D4A017';
      el.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderTopColor = '#1e1e1e';
      el.style.transform = 'translateY(0)';
    }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feature.icon}</div>
      <h3 style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
        fontSize: '1.4rem', color: '#f0f0f0',
        letterSpacing: '0.03em', marginBottom: '0.5rem',
      }}>{feature.title}</h3>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
        color: '#D4A017', letterSpacing: '0.12em', textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}>{feature.highlight}</p>
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: '0.9rem',
        color: '#777', lineHeight: 1.75,
      }}>{feature.description}</p>
    </div>
  );
}

export default function HHFeatures() {
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
    <section id="features" style={{
      padding: '120px 2rem',
      borderTop: '1px solid #1e1e1e',
      position: 'relative',
    }}>
      {/* Angled bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: '#111',
        clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div ref={headRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">// what it does</span>
          <h2 style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0f0f0',
            margin: '0.5rem 0 0', lineHeight: 0.95, letterSpacing: '0.01em',
          }}>
            Built for <span style={{ color: '#D4A017' }}>operators.</span><br />
            Not tourists.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: '0.95rem',
            color: '#555', marginTop: '1rem', maxWidth: '480px', lineHeight: 1.7,
          }}>
            Four tools, one app. Everything you need to run a tighter operation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.25rem',
        }}>
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}
