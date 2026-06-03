export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '0 24px 120px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          borderRadius: '24px',
          background: 'var(--accent-dark)',
          padding: '80px 64px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            opacity: 0.08,
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-light)',
              fontWeight: 500,
              display: 'block',
              marginBottom: '24px',
            }}
          >
            Let&apos;s talk
          </span>

          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 600,
              color: 'var(--bg)',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            I&apos;m not hard
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>
              to reach.
            </span>
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: 'rgba(250, 247, 242, 0.65)',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '420px',
            }}
          >
            If you have an interesting problem, a project you&apos;re
            building, or you just want to connect — my inbox is open.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="mailto:mkihuyu020@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '999px',
                background: 'var(--accent)',
                color: 'white',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Send an email →
            </a>
            <a
              href="https://www.linkedin.com/in/michael-kihuyu-977a0b266/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '999px',
                border: '1px solid rgba(250, 247, 242, 0.2)',
                color: 'rgba(250, 247, 242, 0.8)',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}