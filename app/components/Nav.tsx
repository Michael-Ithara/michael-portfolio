'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '16px 0' : '24px 0',
        background: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text)',
            textDecoration: 'none',
          }}
        >
          Michael Kihuyu
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="accent-link"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="mailto:mkihuyu020@gmail.com"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              padding: '8px 20px',
              borderRadius: '999px',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              textDecoration: 'none',
            }}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </nav>
  );
}