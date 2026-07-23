import Reveal from './Reveal';
import { toWords } from './words';

const heroLine1 = toWords('Most builders start');
const heroLine2 = toWords('with the solution.');
const heroLine3 = toWords('who has the problem.');

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Availability badge */}
      <div className="animate-fade-up delay-1" style={{ marginBottom: '40px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: 500,
            padding: '6px 14px',
            borderRadius: '999px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
            }}
          />
          Open to interesting projects
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(40px, 6vw, 80px)',
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          marginBottom: '28px',
          maxWidth: '900px',
        }}
      >
        <Reveal
          triggerOnMount
          stagger={55}
          items={[
            ...heroLine1,
            '\n',
            ...heroLine2,
            '\n',
            ...['I', 'start', 'with', 'the', 'person'].map((w, i) => (
              <span key={`accent-${i}`} style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                {w}
              </span>
            )),
            '\n',
            ...heroLine3,
          ]}
        />
      </h1>

      {/* Subline */}
      <p
        className="animate-fade-up delay-3"
        style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          maxWidth: '520px',
          marginBottom: '48px',
        }}
      >
        I&apos;m Michael Kihuyu, a Product Engineer building AI-native systems
        that work because they&apos;re{' '}
        <strong className="text-accent font-semibold">
          designed around the humans inside them
        </strong>
        .
      </p>

      {/* CTAs */}
      <div
        className="animate-fade-up delay-4"
        style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
      >
        <a
          href="#work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            borderRadius: '999px',
            background: 'var(--accent-dark)',
            color: 'var(--bg)',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'background 0.2s ease',
          }}
        >
          See my work ↓
        </a>

        <a
          href="mailto:mkihuyu020@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            borderRadius: '999px',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'border-color 0.2s ease',
          }}
        >
          Get in touch
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-up delay-5"
        style={{
          marginTop: '80px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--text-faint)',
        }}
      >
        <div style={{ width: '1px', height: '48px', background: 'var(--border)' }} />
        <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll to explore
        </span>
      </div>
    </section>
  );
}