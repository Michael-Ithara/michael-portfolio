import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const isExternal = (href: string) => href.startsWith('http');

type LinkishProps = {
  href: string;
  className: string;
  children: React.ReactNode;
};

/** Internal routes use next/link; mailto and external URLs use a plain anchor. */
function Linkish({ href, className, children }: LinkishProps) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      target={isExternal(href) ? '_blank' : undefined}
      rel={isExternal(href) ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

/** Small accent label above a section heading. */
export function SectionLabel({
  children,
  onInk = false,
}: {
  children: React.ReactNode;
  onInk?: boolean;
}) {
  return (
    <span
      className={`mb-4 block text-[15px] font-semibold tracking-[-0.01em] ${
        onInk ? 'text-accent-on-ink' : 'text-accent-ink'
      }`}
    >
      {children}
    </span>
  );
}

const buttonVariants = {
  filled: 'bg-text text-bg hover:opacity-85',
  outline: 'border border-border text-text hover:border-text',
  light: 'bg-on-ink text-ink hover:opacity-90',
  'outline-light': 'border border-white/25 text-on-ink hover:border-white/60',
};

/** Pill button. Keeps a 44px minimum height for touch targets. */
export function Button({
  href,
  variant = 'filled',
  children,
  className = '',
}: {
  href: string;
  variant?: keyof typeof buttonVariants;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Linkish
      href={href}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full px-6 text-[15px] font-medium no-underline transition-[opacity,border-color] duration-300 ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Linkish>
  );
}

/** Text link with a trailing chevron, the way Apple writes "Learn more". */
export function ChevronLink({
  href,
  children,
  onInk = false,
}: {
  href: string;
  children: React.ReactNode;
  onInk?: boolean;
}) {
  return (
    <Linkish
      href={href}
      className={`group inline-flex items-center gap-0.5 text-[17px] font-medium no-underline hover:underline ${
        onInk ? 'text-system-on-ink' : 'text-system'
      }`}
    >
      {children}
      <ChevronRight
        aria-hidden="true"
        size={18}
        strokeWidth={2.25}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </Linkish>
  );
}

/** Rounded tag for project tags and meta values. */
export function Badge({ children, onInk = false }: { children: React.ReactNode; onInk?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[13px] ${
        onInk ? 'bg-white/10 text-on-ink-muted' : 'bg-surface2 text-muted'
      }`}
    >
      {children}
    </span>
  );
}

/** White tile on the grey page. */
export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rounded-tile bg-surface p-8 md:p-10 ${className}`}>{children}</div>;
}
