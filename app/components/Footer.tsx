export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <span
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: '14px',
            color: 'var(--text-muted)',
          }}
        >
          Michael Kihuyu · {new Date().getFullYear()}
        </span>

        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: 'mkihuyu020@gmail.com', href: 'mailto:mkihuyu020@gmail.com' },
            { label: 'GitHub', href: 'https://github.com/Michael-Ithara' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-kihuyu-977a0b266/' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontSize: '12px',
                color: 'var(--text-faint)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}