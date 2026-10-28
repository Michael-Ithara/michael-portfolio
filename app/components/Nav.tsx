'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        solid ? 'glass border-b border-border/60' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[17px] font-semibold tracking-[-0.02em] text-text no-underline"
          onClick={() => setOpen(false)}
        >
          <Logo size={26} />
          Michael Kihuyu
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] text-muted no-underline transition-colors duration-300 hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:mkihuyu020@gmail.com"
            className="inline-flex h-8 items-center rounded-full bg-text px-4 text-[14px] font-medium text-bg no-underline transition-opacity duration-300 hover:opacity-85"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-text sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border/60 px-4 pb-6 sm:hidden"
      >
        <ul className="flex flex-col">
          {links.map((item) => (
            <li key={item.label} className="border-b border-border/60">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-[24px] font-semibold tracking-[-0.02em] text-text no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:mkihuyu020@gmail.com"
          className="mt-6 inline-flex min-h-11 items-center rounded-full bg-text px-6 text-[15px] font-medium text-bg no-underline"
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
