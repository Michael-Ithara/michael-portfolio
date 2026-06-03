import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
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
        About
      </span>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left — text */}
        <div>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 600,
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: '32px',
            }}
          >
            The person
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              behind the work
            </span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              "I'm Michael — a Product Engineer from Nairobi who's spent the last few years building AI-native systems across two continents, learning what actually makes technology useful for the people it's supposed to serve.",
              "I've worked on speaker pipelines for European startup conferences, solar energy platforms, and personal knowledge tools. The domains are different. The approach is always the same — understand the person first, then build the thing.",
              "When I'm not building, I'm probably at the gym, playing football weekly, or in a conversation going in five directions at once. I like it that way.",
              "I'm always open to interesting people working on things that matter. If that's you — let's talk.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '24px', marginTop: '40px' }}>
            {[
              { label: 'Email', href: 'mailto:mkihuyu020@gmail.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-kihuyu-977a0b266/' },
              { label: 'GitHub', href: 'https://github.com/Michael-Ithara' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="accent-link"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — photos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Primary photo */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '4/5',
              background: 'var(--surface)',
            }}
          >
            <Image
              src="/michael-about.jpg"
              alt="Michael Kihuyu"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Secondary photo */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '16/9',
              background: 'var(--surface)',
            }}
          >
            <Image
              src="/michael-building.jpg"
              alt="Michael at the European Defense Hackathon, Tallinn"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '16px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
              }}
            >
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>
                European Defense Hackathon · Tallinn, Estonia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}