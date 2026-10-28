'use client';
import { useState } from 'react';

/*
 * Solarios, illustrated: drag through a typical day and see the kind of
 * recommendation Solarios makes. The curves are a shape, not real data.
 */

const X0 = 40;
const X1 = 440;
const BASE = 230;
const HEIGHT = 170;

const solarAt = (h: number) => (h < 6 || h > 18 ? 0 : Math.sin(((h - 6) / 12) * Math.PI));
const usageAt = (h: number) =>
  0.18 + 0.32 * Math.exp(-((h - 7.5) ** 2) / 3) + 0.55 * Math.exp(-((h - 19.5) ** 2) / 4);
const px = (h: number) => X0 + (h / 24) * (X1 - X0);
const py = (v: number) => BASE - v * HEIGHT;

const curve = (fn: (h: number) => number) =>
  Array.from({ length: 49 }, (_, i) => {
    const h = i / 2;
    return `${i ? 'L' : 'M'} ${px(h).toFixed(1)} ${py(fn(h)).toFixed(1)}`;
  }).join(' ');

const SOLAR = curve(solarAt);
const USAGE = curve(usageAt);

function timeLabel(step: number) {
  const h = Math.floor(step / 2) % 24;
  const m = step % 2 ? '30' : '00';
  const suffix = h < 12 ? 'am' : 'pm';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m} ${suffix}`;
}

function advice(h: number) {
  const solar = solarAt(h);
  const usage = usageAt(h);
  if (solar >= usage) {
    return {
      headline: 'Solar covers everything you’re using.',
      body: 'A good time to run high-draw appliances like the washing machine.',
    };
  }
  if (solar > 0) {
    return {
      headline: `Solar covers ${Math.round((solar / usage) * 100)}% of what you’re using.`,
      body: 'The rest comes from the grid. Hold heavy loads for midday if you can.',
    };
  }
  if (h >= 17 && h <= 22) {
    return {
      headline: 'Peak hours on the grid.',
      body: 'This is where the bill grows. Shift high-draw devices to midday tomorrow.',
    };
  }
  return {
    headline: 'Running on the grid.',
    body: 'Keep overnight loads small. Production starts again around 6 am.',
  };
}

export default function EnergyDemo() {
  const [step, setStep] = useState(26);
  const h = step / 2;
  const tip = advice(h);

  return (
    <div className="w-full">
      <div className="mb-2 min-h-[4.6em]" aria-live="polite">
        <p className="text-[15px] font-semibold leading-[1.35] text-white">{tip.headline}</p>
        <p className="text-[14px] leading-[1.45] text-white/65">{tip.body}</p>
      </div>

      <svg viewBox="0 0 480 270" className="h-auto w-full" aria-hidden="true">
        <path d={`${SOLAR} L ${X1} ${BASE} L ${X0} ${BASE} Z`} className="fill-accent-on-ink/20" />
        <path d={SOLAR} fill="none" className="stroke-accent-on-ink" strokeWidth="2" />
        <path d={USAGE} fill="none" className="stroke-white/80" strokeWidth="2" />
        <line x1={X0} x2={X1} y1={BASE} y2={BASE} className="stroke-white/20" />
        {[
          [6, '6am'],
          [12, '12pm'],
          [18, '6pm'],
        ].map(([hour, label]) => (
          <text key={label} x={px(hour as number)} y={BASE + 24} textAnchor="middle" className="fill-white/55 text-[12px]">
            {label}
          </text>
        ))}
        <line x1={px(h)} x2={px(h)} y1="20" y2={BASE} className="stroke-white/40" strokeDasharray="3 4" />
        <circle cx={px(h)} cy={py(solarAt(h))} r="6" className="fill-accent-on-ink" />
        <circle cx={px(h)} cy={py(usageAt(h))} r="6" className="fill-white" />
        <g>
          <circle cx="44" cy="16" r="4" className="fill-accent-on-ink" />
          <text x="54" y="20" className="fill-white/85 text-[13px] font-medium">
            Solar
          </text>
          <circle cx="114" cy="16" r="4" className="fill-white/80" />
          <text x="124" y="20" className="fill-white/85 text-[13px] font-medium">
            Usage
          </text>
        </g>
      </svg>

      <div className="mt-1 flex items-center gap-4">
        <label htmlFor="solarios-time" className="sr-only">
          Time of day
        </label>
        <input
          id="solarios-time"
          type="range"
          min={0}
          max={47}
          step={1}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          aria-valuetext={timeLabel(step)}
          className="range-on-ink"
        />
        <output
          htmlFor="solarios-time"
          className="w-[72px] shrink-0 text-right text-[15px] font-semibold tabular-nums text-white"
        >
          {timeLabel(step)}
        </output>
      </div>
      <p className="mt-1 text-[12px] text-white/45">Illustration of a typical day, not real data.</p>
    </div>
  );
}
