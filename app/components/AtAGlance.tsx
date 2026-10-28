import { Briefcase, GraduationCap } from 'lucide-react';
import FadeIn from './FadeIn';

/*
 * Latitude scale from 10°S to 65°N. Nairobi sits just under the equator,
 * Tallinn near the top: the same 59th parallel the Latitude59 conference is
 * named after.
 */
const TOP = 24;
const BOTTOM = 316;
const yFor = (lat: number) => TOP + ((65 - lat) / 75) * (BOTTOM - TOP);
const NAIROBI = { x: 200, y: yFor(-1.29) };
const TALLINN = { x: 116, y: yFor(59.44) };
const PARALLELS = [60, 45, 30, 15, 0];

function LatitudeScale() {
  return (
    <svg
      viewBox="0 0 280 340"
      className="h-auto w-full max-w-[320px]"
      role="img"
      aria-label="Latitude scale: Nairobi at 1 degree south, Tallinn at 59 degrees north."
    >
      {PARALLELS.map((lat) => (
        <g key={lat}>
          <line
            x1="36"
            x2="272"
            y1={yFor(lat)}
            y2={yFor(lat)}
            className={lat === 0 ? 'stroke-faint' : 'stroke-border'}
            strokeWidth="1"
            strokeDasharray={lat === 0 ? undefined : '2 5'}
          />
          <text x="0" y={yFor(lat) + 4} className="fill-muted text-[11px] tabular-nums">
            {lat === 0 ? '0°' : `${lat}°N`}
          </text>
        </g>
      ))}

      <path
        d={`M ${NAIROBI.x} ${NAIROBI.y} C ${NAIROBI.x + 40} ${NAIROBI.y - 120}, ${TALLINN.x + 90} ${TALLINN.y + 40}, ${TALLINN.x} ${TALLINN.y}`}
        fill="none"
        className="stroke-accent"
        strokeWidth="1.75"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />

      <circle cx={TALLINN.x} cy={TALLINN.y} r="12" className="fill-accent opacity-15" />
      <circle cx={TALLINN.x} cy={TALLINN.y} r="5" className="fill-accent" />
      <text x={TALLINN.x - 12} y={TALLINN.y - 18} className="fill-text text-[13px] font-semibold">
        Tallinn
      </text>
      <text x={TALLINN.x + 50} y={TALLINN.y - 18} className="fill-muted text-[11px] tabular-nums">
        59°26′N
      </text>

      <circle cx={NAIROBI.x} cy={NAIROBI.y} r="12" className="fill-text opacity-10" />
      <circle cx={NAIROBI.x} cy={NAIROBI.y} r="5" className="fill-text" />
      <text x={NAIROBI.x - 34} y={NAIROBI.y + 28} className="fill-text text-[13px] font-semibold">
        Nairobi
      </text>
      <text x={NAIROBI.x + 22} y={NAIROBI.y + 28} className="fill-muted text-[11px] tabular-nums">
        1°17′S
      </text>
    </svg>
  );
}

export default function AtAGlance() {
  return (
    <div className="mt-16 md:mt-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        <FadeIn className="md:row-span-2">
          <div className="flex h-full flex-col justify-between gap-8 rounded-tile bg-surface p-8 md:p-10">
            <div>
              <span className="mb-3 block text-[15px] font-semibold text-accent-ink">Two continents</span>
              <p className="text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-text">
                Kenya and Estonia.
                <span className="text-muted"> One way of working at both ends.</span>
              </p>
            </div>
            <LatitudeScale />
            <p className="text-[13px] leading-[1.5] text-muted">
              The Latitude59 conference takes its name from Tallinn&apos;s parallel.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={90} className="md:col-span-2">
          <div className="flex h-full flex-col justify-between gap-10 rounded-tile bg-surface p-8 md:p-10">
            <Briefcase aria-hidden="true" size={28} strokeWidth={1.75} className="text-accent" />
            <div>
              <span className="mb-2 block text-[15px] font-semibold text-muted">Now · Vula</span>
              <p className="max-w-[620px] text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.15] tracking-[-0.025em] text-text">
                We’re closing Africa’s $400 billion SME funding gap.
                <span className="text-muted">
                  {' '}
                  As Vula’s Forward Deployed Engineer, I embed with funding partners and build the
                  pipelines that carry founders from application to signed term sheet.
                </span>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={180} className="md:col-span-2">
          <div className="flex h-full flex-col justify-between gap-10 rounded-tile bg-surface p-8 md:p-10">
            <GraduationCap aria-hidden="true" size={28} strokeWidth={1.75} className="text-accent" />
            <div>
              <span className="mb-2 block text-[15px] font-semibold text-muted">Education</span>
              <p className="max-w-[560px] text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.15] tracking-[-0.025em] text-text">
                BSc Business Information Technology.
                <span className="text-muted"> Strathmore University, Nairobi. Graduated 2026.</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
