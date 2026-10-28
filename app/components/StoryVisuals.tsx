/*
 * The four states of the Latitude59 story on the home page, built only from
 * the case study's public copy. Each takes `active` so it can animate in when
 * its step is read. All are decorative: the step text carries the meaning.
 */

const ease = 'transition-all duration-700 ease-apple';

/* All four share one canvas so they scale together with the tile. */
const svgProps = { viewBox: '0 0 480 320', className: 'h-full w-full' };

/* 1. The person: every gap became an email to the organiser. */
const EMAILS = [
  'Where do I send my slides?',
  'Is my flight booked yet?',
  'Is there a speaker dinner?',
  'Re: Re: updated bio',
  'What happens next?',
];

export function InboxVisual({ active }: { active: boolean }) {
  return (
    <svg {...svgProps}>
      <text x="70" y="22" className="fill-white/85 text-[13px] font-semibold">
        Organiser inbox
      </text>
      <text x="410" y="22" textAnchor="end" className="fill-white/50 text-[12px]">
        more every day
      </text>
      {EMAILS.map((subject, i) => (
        <g
          key={subject}
          className={ease}
          style={{
            transitionDelay: active ? `${i * 90}ms` : '0ms',
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(-12px)',
          }}
        >
          <rect x="70" y={36 + i * 56} width="340" height="48" rx="14" className="fill-white/8" />
          <circle cx="96" cy={60 + i * 56} r="13" className="fill-white/12" />
          <text x="96" y={64 + i * 56} textAnchor="middle" className="fill-white/80 text-[11px] font-semibold">
            S
          </text>
          <text x="120" y={55 + i * 56} className="fill-white/50 text-[11px]">
            Speaker
          </text>
          <text x="120" y={72 + i * 56} className="fill-white/90 text-[13px] font-medium">
            {subject}
          </text>
          <circle cx="392" cy={60 + i * 56} r="4" className="fill-accent-on-ink" />
        </g>
      ))}
    </svg>
  );
}

/* 2. The structure: two problems feeding each other. */
export function LoopVisual({ active }: { active: boolean }) {
  return (
    <svg {...svgProps}>
      <path
        d="M 120 140 C 170 40, 310 40, 360 140"
        fill="none"
        className={`flow stroke-accent-on-ink ${ease}`}
        strokeWidth="2"
        style={{ opacity: active ? 1 : 0 }}
      />
      <path
        d="M 360 180 C 310 280, 170 280, 120 180"
        fill="none"
        className={`flow stroke-white/60 ${ease}`}
        strokeWidth="2"
        style={{ opacity: active ? 1 : 0, transitionDelay: active ? '200ms' : '0ms' }}
      />
      <polygon points="352,128 364,144 346,146" className="fill-accent-on-ink" style={{ opacity: active ? 1 : 0 }} />
      <polygon points="128,192 116,176 134,174" className="fill-white/60" style={{ opacity: active ? 1 : 0 }} />

      <text x="240" y="52" textAnchor="middle" className="fill-white/85 text-[13px] font-medium">
        Confusion → admin work
      </text>
      <text x="240" y="290" textAnchor="middle" className="fill-white/60 text-[13px] font-medium">
        Blindness → more confusion
      </text>

      {[
        { x: 40, label: 'Speaker' },
        { x: 280, label: 'Organiser' },
      ].map((node) => (
        <g key={node.label}>
          <rect x={node.x} y="136" width="160" height="48" rx="24" className="fill-white/10 stroke-white/25" />
          <text x={node.x + 80} y="165" textAnchor="middle" className="fill-white text-[15px] font-semibold">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* 3. The system: portal, dashboard, and a 9-phase pipeline between them. */
export function PipelineVisual({ active }: { active: boolean }) {
  const nodes = Array.from({ length: 9 }, (_, i) => 52 + i * 47);
  return (
    <svg {...svgProps}>
      <rect x="150" y="40" width="180" height="40" rx="20" className="fill-white/8 stroke-white/20" />
      <text x="240" y="65" textAnchor="middle" className="fill-white/85 text-[13px] font-medium">
        Speaker portal
      </text>
      <rect x="140" y="240" width="200" height="40" rx="20" className="fill-white/8 stroke-white/20" />
      <text x="240" y="265" textAnchor="middle" className="fill-white/85 text-[13px] font-medium">
        Organiser dashboard
      </text>
      {[146, 240, 334].map((x) => (
        <g key={x}>
          <line x1={x} x2={x} y1="80" y2="146" className="stroke-white/20" strokeDasharray="3 4" />
          <line x1={x} x2={x} y1="174" y2="240" className="stroke-white/20" strokeDasharray="3 4" />
        </g>
      ))}
      <line x1="52" x2="428" y1="160" y2="160" className="stroke-white/15" strokeWidth="2" />
      <line
        x1="52"
        x2="428"
        y1="160"
        y2="160"
        className="stroke-system-on-ink"
        strokeWidth="2"
        style={{
          transformOrigin: '52px 160px',
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1.4s var(--ease-apple)',
        }}
      />
      {nodes.map((x, i) => (
        <g key={x}>
          <circle
            cx={x}
            cy="160"
            r="11"
            className="stroke-white/30"
            strokeWidth="1.5"
            style={{
              fill: active ? '#9D9BFF' : '#0E1A2B',
              transition: `fill 0.4s var(--ease-apple) ${active ? i * 140 : 0}ms`,
            }}
          />
          <text
            x={x}
            y="164"
            textAnchor="middle"
            className="text-[10px] font-semibold tabular-nums"
            style={{
              fill: active ? '#0E1A2B' : 'rgba(255,255,255,0.6)',
              transition: `fill 0.4s var(--ease-apple) ${active ? i * 140 : 0}ms`,
            }}
          >
            {i + 1}
          </text>
        </g>
      ))}
      <text x="52" y="198" textAnchor="middle" className="fill-white/55 text-[12px]">
        Invited
      </text>
      <text x="428" y="198" textAnchor="middle" className="fill-white/55 text-[12px]">
        On stage
      </text>
    </svg>
  );
}

/* 4. The outcome: 80 speakers through one system. */
export function OutcomeVisual({ active }: { active: boolean }) {
  return (
    <svg {...svgProps}>
      {Array.from({ length: 80 }, (_, i) => {
        const col = i % 10;
        const row = Math.floor(i / 10);
        return (
          <circle
            key={i}
            cx={127 + col * 25}
            cy={22 + row * 25}
            r="9"
            style={{
              fill: active ? '#FF8A3D' : 'rgba(255,255,255,0.15)',
              transition: `fill 0.5s var(--ease-apple) ${active ? col * 40 + row * 60 : 0}ms`,
            }}
          />
        );
      })}
      {[
        { x: 112, w: 92, label: '80 speakers' },
        { x: 212, w: 78, label: '9 phases' },
        { x: 298, w: 86, label: '8 services' },
      ].map((chip) => (
        <g key={chip.label}>
          <rect x={chip.x} y="232" width={chip.w} height="28" rx="14" className="fill-white/10" />
          <text x={chip.x + chip.w / 2} y="250" textAnchor="middle" className="fill-white/80 text-[12px]">
            {chip.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
