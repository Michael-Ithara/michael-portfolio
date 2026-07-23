'use client';
import Reveal from './Reveal';
import { toWords } from './words';
import FadeIn from './FadeIn';

const capabilities = [
  {
    number: '01',
    title: 'Systems that start with people',
    before: "I map the human experience before I touch the architecture. Stakeholders, friction points, the gap between what people say they need and ",
    bold: 'what actually solves it',
    after: ": that's where I start.",
  },
  {
    number: '02',
    title: 'AI-native products, not AI-flavoured ones',
    before: 'I build products where ',
    bold: 'AI is load-bearing infrastructure',
    after: ", not a feature bolted on after the fact. The goal stays the same: faster processes, freed-up time, outcomes that weren't possible without it.",
  },
  {
    number: '03',
    title: 'Full arc, not just full stack',
    before: "I don't just build features: ",
    bold: 'I own the journey',
    after: ". Problem discovery, architecture decisions, building, testing, refining, getting it in front of the people it's meant for. I care about the whole thing, not just my part of it.",
  },
];

const positioningLine = [
  ...toWords("I don't lead with the tech."),
  ...toWords('I lead with the problem: specifically,'),
  ...['the', 'person', 'experiencing', 'it.'].map((w, i) => (
    <span key={`pos-accent-${i}`} className="text-accent font-semibold">
      {w}
    </span>
  )),
];

export default function Capabilities() {
  return (
    <section
      style={{
        padding: '120px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Section label */}
      <span
        style={{
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          fontWeight: 500,
          display: 'block',
          marginBottom: '64px',
        }}
      >
        What I do
      </span>

      {/* Positioning paragraph */}
      <div style={{ maxWidth: '640px', marginBottom: '80px' }}>
        <p
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            lineHeight: 1.5,
            color: 'var(--text)',
            marginBottom: '24px',
          }}
        >
          <Reveal items={positioningLine} stagger={35} />
        </p>
        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
          }}
        >
          Before I write a line of code, I want to know who&apos;s stuck, why,
          and{' '}
          <strong className="text-accent font-semibold">
            what solving it actually changes for them
          </strong>
          . That&apos;s how I built an AI-powered speaker onboarding system for
          one of Europe&apos;s top startup conferences, a personal knowledge
          engine, and a solar energy platform: all starting from a human
          problem, all built with AI at the core.
        </p>
      </div>

      {/* Capability cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {capabilities.map((cap, i) => (
          <FadeIn key={cap.number} delay={i * 90}>
            <div
              style={{
                padding: '36px',
                borderRadius: '16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              }}
            >
              <span
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '40px',
                  fontWeight: 300,
                  color: 'var(--accent)',
                  opacity: 0.5,
                  display: 'block',
                  marginBottom: '24px',
                }}
              >
                {cap.number}
              </span>
              <h3
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                }}
              >
                {cap.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                }}
              >
                {cap.before}
                <strong className="text-accent font-semibold">{cap.bold}</strong>
                {cap.after}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}