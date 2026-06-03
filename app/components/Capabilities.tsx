'use client';

const capabilities = [
  {
    number: '01',
    title: 'Systems that start with people',
    body: "I map the human experience before I touch the architecture. Stakeholders, friction points, the gap between what people say they need and what actually solves their problem — that's where I start.",
  },
  {
    number: '02',
    title: 'AI-native products, not AI-flavoured ones',
    body: "I build products where AI is load-bearing infrastructure, not a feature bolted on afterwards. The goal is always the same: faster processes, freed-up time, and outcomes that wouldn't be possible without it.",
  },
  {
    number: '03',
    title: 'Full arc, not just full stack',
    body: "I don't just build features — I own the journey. Problem discovery, architecture decisions, building, testing, refining, and getting it in front of the people it's meant for. I care about the whole thing, not just my part of it.",
  },
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
          I don&apos;t lead with the tech. I lead with the problem —
          specifically, the person experiencing it.
        </p>
        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
          }}
        >
          Before I write a line of code, I want to understand who&apos;s
          stuck, why they&apos;re stuck, and what solving it actually changes
          for them. That&apos;s how I&apos;ve built an AI-powered speaker
          onboarding system for one of Europe&apos;s top startup conferences,
          a personal knowledge engine, and a solar energy monitoring platform
          — all starting from a human problem, all built with AI at the core.
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
        {capabilities.map((cap) => (
          <div
            key={cap.number}
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
              {cap.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}