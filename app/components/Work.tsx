'use client';
import Link from 'next/link';
import FadeIn from './FadeIn';

const projects = [
  {
    slug: 'latitude59',
    label: 'Conference Operations · Estonia · 2026',
    title: 'Latitude59 Speaker Portal',
    summary: '80 speakers. Two problems feeding each other. One system to solve both.',
    before: 'Speakers had no clear journey. Organisers had no visibility. We built a two-sided platform that ',
    bold: 'fixed both',
    after: ": from a blank page to a live production system for one of Europe's top startup conferences.",
    tags: ['Two-sided platform', 'Pipeline system', 'Production deployment'],
    liveUrl: null,
  },
  {
    slug: 'second-brain',
    label: 'Personal Knowledge Tool · 2026',
    title: 'Second Brain',
    summary: 'Most people store knowledge. Almost nobody can find it when they need it.',
    before: 'I built a RAG-powered knowledge engine that lets you capture notes, articles, and URLs, then have ',
    bold: 'an actual conversation',
    after: " with everything you've ever saved.",
    tags: ['RAG / Vector search', 'Claude API', 'In active development'],
    liveUrl: 'https://the-second-brain.netlify.app',
  },
  {
    slug: 'solarios',
    label: 'Solar Energy Platform · 2025',
    title: 'Solarios',
    summary: "People with solar panels still don't understand their own energy.",
    before: 'Solarios gives homeowners real-time visibility into their consumption, AI-powered recommendations to cut costs, and ',
    bold: 'behavioural nudges to build sustainable habits',
    after: '. Final year project. Got an A.',
    tags: ['AI energy insights', 'Real-time monitoring', 'Behaviour change design'],
    liveUrl: 'https://solarios-v2.vercel.app',
  },
];

export default function Work() {
  return (
    <section
      id="work"
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
        Selected work
      </span>

      {/* Project cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 100}>
          <div
            className="project-card"
          >
            <div style={{ padding: '40px 48px' }}>
              {/* Top row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px',
                  gap: '16px',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-faint)',
                      display: 'block',
                      marginBottom: '8px',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {project.label}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: 'clamp(22px, 3vw, 30px)',
                      fontWeight: 600,
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <span
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '56px',
                    fontWeight: 300,
                    color: 'var(--border)',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Summary */}
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '12px',
                  lineHeight: 1.4,
                }}
              >
                {project.summary}
              </p>

              {/* Body */}
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                  maxWidth: '640px',
                  marginBottom: '32px',
                }}
              >
                {project.before}
                <strong className="text-accent font-semibold">{project.bold}</strong>
                {project.after}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '32px',
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '12px',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      background: 'var(--surface2)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Link
                  href={`/work/${project.slug}`}
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Read the full case study →
                </Link>
                {project.liveUrl && (
                  <>
                    <span style={{ color: 'var(--border)' }}>·</span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                      }}
                    >
                      Try it live ↗
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Accent bar */}
            <div
              style={{
                height: '3px',
                background: 'var(--accent)',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.4s ease',
              }}
              className="card-bar"
            />
          </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}