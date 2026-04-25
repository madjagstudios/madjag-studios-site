import { useId } from 'react';

const RED      = '#E11D2A';
const RED_DEEP = '#7E0F18';
const RED_GLOW = '#FF3B47';
const INK      = '#0a0a0b';

interface Props {
  size?: number;
  glow?: boolean;
  mono?: boolean;
}

export default function MadJagLogo({ size = 200, glow = true, mono = false }: Props) {
  const id = useId().replace(/:/g, '');
  const hexPath = 'M174.478,143 L100,186 L25.522,143 L25.522,57 L100,14 L174.478,57 Z';

  const stroke = mono ? '#fff'    : RED;
  const fillL  = mono ? '#1a1a1a' : '#1a0507';
  const fillR  = mono ? '#0d0d0d' : '#0d0203';
  const trace  = mono ? '#888'    : RED;
  const pixel  = mono ? '#aaa'    : RED;
  const bevel  = mono ? '#fff'    : RED_DEEP;

  return (
    <svg viewBox="0 0 200 200" width={size} height={size} style={{ display: 'block' }}
         role="img" aria-label="MadJag Studios">
      <defs>
        <clipPath id={`mj-hex-${id}`}><path d={hexPath} /></clipPath>
        <clipPath id={`mj-hexL-${id}`}><rect x="0" y="0" width="100" height="200" /></clipPath>
        <clipPath id={`mj-hexR-${id}`}><rect x="100" y="0" width="100" height="200" /></clipPath>
        <filter id={`mj-glow-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {glow && !mono && (
        <path d={hexPath} fill="none" stroke={RED_GLOW} strokeWidth="2"
              opacity="0.35" filter={`url(#mj-glow-${id})`} />
      )}

      <g clipPath={`url(#mj-hex-${id})`}>
        <g clipPath={`url(#mj-hexL-${id})`}>
          <path d={hexPath} fill={fillL} />
          <g stroke={trace} strokeWidth="1.5" fill="none" opacity={mono ? 0.5 : 0.85}>
            <path d="M14 60 H40 L48 52 H72" />
            <path d="M10 96 H30 L36 102 H58" />
            <path d="M16 130 H44 L52 122 H80" />
            <path d="M22 156 H56" />
            <path d="M40 38 V52" />
            <path d="M68 70 V82" />
          </g>
          <g fill={trace} opacity={mono ? 0.7 : 1}>
            {([[14,60],[72,52],[10,96],[58,102],[16,130],[80,122],[22,156],[56,156],[40,38],[68,70]] as [number,number][])
              .map(([x,y],i) => <circle key={i} cx={x} cy={y} r="2" />)}
          </g>
        </g>

        <g clipPath={`url(#mj-hexR-${id})`}>
          <path d={hexPath} fill={fillR} />
          <g fill={pixel} opacity={mono ? 0.55 : 0.9}>
            <rect x="184" y="48" width="6" height="6" />
            <rect x="178" y="54" width="6" height="6" />
            <rect x="184" y="60" width="6" height="6" />
            <rect x="172" y="62" width="4" height="4" />
            <rect x="180" y="92" width="5" height="5" />
            <rect x="186" y="100" width="4" height="4" />
            <rect x="100" y="156" width="6" height="6" />
            <rect x="106" y="162" width="6" height="6" />
            <rect x="94" y="162" width="6" height="6" />
            <rect x="100" y="170" width="4" height="4" />
            <rect x="106" y="60" width="5" height="5" />
            <rect x="112" y="80" width="4" height="4" />
          </g>
          <g fill={pixel} opacity={mono ? 0.3 : 0.6}>
            <rect x="172" y="86" width="22" height="2" />
            <rect x="104" y="120" width="14" height="2" />
          </g>
        </g>

        <g fontFamily="'Saira Stencil One', 'Black Ops One', sans-serif"
           fontSize="120" fontWeight="400" fill="#fff">
          <text x="63" y="155" textAnchor="middle">M</text>
          <text x="137" y="155" textAnchor="middle">J</text>
        </g>
      </g>

      <path d={hexPath} fill="none" stroke={stroke} strokeWidth="3" />
      <line x1="100" y1="14" x2="100" y2="186" stroke={INK} strokeWidth="2.5" />
      <path d={hexPath} fill="none" stroke={bevel} strokeWidth="1" opacity="0.6"
            transform="translate(100 100) scale(0.92) translate(-100 -100)" />
    </svg>
  );
}
