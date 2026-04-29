const STATUS = {
  live: { label: 'LIVE', bg: 'rgba(22,163,74,0.12)', color: '#16a34a', border: 'rgba(22,163,74,0.3)' },
  dev: { label: 'IN DEV', bg: 'rgba(217,119,6,0.12)', color: '#d97706', border: 'rgba(217,119,6,0.3)' },
  backlog: { label: 'BACKLOG', bg: 'rgba(80,80,80,0.15)', color: '#666', border: 'rgba(80,80,80,0.3)' },
};

type StatusKey = keyof typeof STATUS;

interface Project {
  name: string;
  tagline: string;
  description: string;
  status: StatusKey;
  platform: string;
  link?: string;
  linkLabel?: string;
}

const projects: Project[] = [
  {
    name: 'Hyland Helper',
    tagline: 'Schedule 1 Companion App',
    description:
      'Your personal assistant for Schedule 1. Track missions, manage your operation, and keep tabs on everything the game throws at you. No alt-tabbing every five minutes like a maniac.',
    status: 'live',
    platform: 'iOS',
    link: 'https://apps.apple.com/us/app/hyland-helper/id6761792150',
    linkLabel: 'View on App Store',
  },
  {
    name: 'Sanctuary Stash',
    tagline: 'D2R Trade Workflow Tool',
    description:
      'Item scanning, stash tracking, rune pricing, and trade post formatting for Diablo II: Resurrected. Built to turn valuable drops into clean listings without spreadsheet penance.',
    status: 'dev',
    platform: 'Web / iOS',
    link: 'https://sanctuarystash.com',
    linkLabel: 'Visit Landing Page',
  },
  {
    name: 'Weight Tracker',
    tagline: 'Body Weight Logger',
    description:
      'Log your weight. See a graph. Feel things about the graph. Repeat. No gamification, no streaks, no motivational notifications from a cartoon fox. Just data.',
    status: 'backlog',
    platform: 'iOS',
  },
  {
    name: 'Finance Tracker',
    tagline: 'Personal Finance Tool',
    description:
      'Track spending, set budgets, and realize you have a caffeine addiction that costs more than your car payment. No bank integrations, no subscriptions, no upsells.',
    status: 'backlog',
    platform: 'iOS',
  },
];

function StatusBadge({ status }: { status: StatusKey }) {
  const s = STATUS[status];
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        color: s.color,
        background: s.bg,
        border: `1px solid ${s.border}`,
        padding: '3px 10px',
      }}
    >
      {s.label}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const delayClass = `delay-${Math.min(index + 2, 8)}`;
  const isLive = project.status === 'live';

  return (
    <div
      className={`fade-up ${delayClass}`}
      style={{
        background: '#1c1c1c',
        borderTop: isLive ? '2px solid #9b1c1c' : '2px solid #2a2a2a',
        borderLeft: '1px solid #2a2a2a',
        borderRight: '1px solid #2a2a2a',
        borderBottom: '1px solid #2a2a2a',
        padding: '2rem',
        transition: 'border-top-color 0.25s, transform 0.25s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderTopColor = '#9b1c1c';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderTopColor = isLive ? '#9b1c1c' : '#2a2a2a';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Platform tag */}
      <div
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          color: '#444',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        {project.platform}
      </div>

      <StatusBadge status={project.status} />

      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.8rem',
          color: '#f0f0f0',
          margin: '0.75rem 0 0.15rem',
          letterSpacing: '0.03em',
        }}
      >
        {project.name}
      </h3>

      <p
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '0.85rem',
          color: '#9b1c1c',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          margin: '0 0 1rem',
        }}
      >
        {project.tagline}
      </p>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.9rem',
          color: '#888',
          lineHeight: 1.75,
          margin: '0',
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#f0f0f0',
            textDecoration: 'none',
            background: '#9b1c1c',
            padding: '8px 20px',
            transition: 'background 0.2s',
            clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#c0392b')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#9b1c1c')}
        >
          {project.linkLabel}
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '120px 2rem',
        borderTop: '1px solid #2a2a2a',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-label fade-up delay-1">// the work</span>
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
            Projects &amp; <span style={{ color: '#9b1c1c' }}>Apps</span>
          </h2>
          <p
            className="fade-up delay-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: '#555',
              marginTop: '1rem',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}
          >
            Everything shipping, in progress, or waiting its turn. 
            The backlog is not a graveyard. It's a queue. Probably.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(380px, 100%), 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
