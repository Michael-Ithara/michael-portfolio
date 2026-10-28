import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Reveal from '../components/Reveal';
import ProjectArt, { projectTheme } from '../components/ProjectArt';
import { Button, SectionLabel } from '../components/ui';

/** Key phrase emphasis inside a muted paragraph: one or two per paragraph. */
export const strong = (text: string, key: string) => (
  <strong key={key} className="font-semibold text-text">
    {text}
  </strong>
);

/** The accent word in a case study h1: the thing that was built, so indigo. */
export const accent = (text: string, key: string) => (
  <span key={key} className="text-system">
    {text}
  </span>
);

export function CaseHeader({
  slug,
  eyebrow,
  heading,
  subline,
}: {
  slug: string;
  eyebrow: string;
  heading: React.ReactNode[];
  subline: string;
}) {
  return (
    <header>
      <div className="mx-auto max-w-[820px] px-4 sm:px-6">
        <Link
          href="/#work"
          className="mb-12 inline-flex min-h-11 items-center gap-0.5 text-[15px] text-muted no-underline transition-colors duration-300 hover:text-text"
        >
          <ChevronLeft aria-hidden="true" size={18} />
          All work
        </Link>
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mb-6 text-[clamp(44px,7vw,88px)] font-semibold leading-[1.02] tracking-[-0.04em] text-text">
          <Reveal items={heading} stagger={50} />
        </h1>
        <p className="animate-fade-up delay-2 max-w-[640px] text-[clamp(19px,2vw,26px)] leading-[1.35] tracking-[-0.015em] text-muted">
          {subline}
        </p>
      </div>

      <div className="animate-fade-up delay-3 mx-auto mt-14 max-w-[1120px] px-4 sm:px-6 md:mt-20">
        <div
          className={`flex items-center justify-center rounded-tile px-6 py-12 text-on-ink md:py-20 ${projectTheme[slug]}`}
        >
          <div className="w-full max-w-[560px]">
            <ProjectArt slug={slug} />
          </div>
        </div>
      </div>
    </header>
  );
}

export function MetaGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <FadeIn className="mx-auto mt-5 max-w-[1120px] px-4 sm:px-6">
      <dl
        className={`grid grid-cols-1 gap-x-6 gap-y-6 rounded-tile bg-surface p-8 sm:grid-cols-2 md:p-10 ${
          items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
        }`}
      >
        {items.map((item) => (
          <div key={item.label}>
            <dt className="mb-1 text-[13px] text-muted">{item.label}</dt>
            <dd className="text-[19px] font-semibold tracking-[-0.015em] text-text">{item.value}</dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}

export function CaseBody({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[820px] px-4 pt-20 sm:px-6 md:pt-28">{children}</div>;
}

/*
 * Every case study is told in the same beats, taken from the positioning:
 * enter through the person, map the structural causes, ship the system, make
 * it work at the edges, then show what changed.
 */
export const BEATS = ['The person', 'The structure', 'The system', 'The edges', 'The outcome'] as const;
export type Beat = (typeof BEATS)[number];

/*
 * Beat colour follows the two-accent rule: the story starts with the person
 * (orange), moves into the system (indigo), and ends back with the person.
 */
export const beatColor = (beat: Beat) =>
  beat === 'The system' || beat === 'The edges' ? 'text-system' : 'text-accent-ink';

export function CaseSection({
  beat,
  heading,
  paragraphs,
}: {
  beat: Beat;
  heading: string;
  paragraphs: React.ReactNode[];
}) {
  return (
    <FadeIn className="mb-16 border-b border-border pb-16 last:border-b-0">
      <span className={`mb-3 block text-[15px] font-semibold ${beatColor(beat)}`}>
        {BEATS.indexOf(beat) + 1} · {beat}
      </span>
      <h2 className="mb-6 text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
        {heading}
      </h2>
      <div className="flex flex-col gap-5">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-[19px] leading-[1.6] tracking-[-0.005em] text-muted">
            {para}
          </p>
        ))}
      </div>
    </FadeIn>
  );
}

export function StatStrip({ stats }: { stats: { stat: string; label: string }[] }) {
  return (
    <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((item, i) => (
        <FadeIn key={item.label} delay={i * 100}>
          <div className="rounded-tile bg-surface px-6 py-10 text-center">
            <span className="mb-2 block text-[64px] font-semibold leading-none tracking-[-0.04em] text-text tabular-nums">
              {item.stat}
            </span>
            <span className="text-[15px] text-muted">{item.label}</span>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export function LiveLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <Button href={href}>
        {children}
        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.25} />
      </Button>
    </div>
  );
}

export function NextProject({ href, eyebrow, title }: { href: string; eyebrow: string; title: string }) {
  return (
    <Link
      href={href}
      className="group mb-24 flex items-center justify-between gap-6 rounded-tile bg-surface p-8 no-underline transition-transform duration-500 ease-apple hover:-translate-y-1 md:mb-32 md:p-10"
    >
      <span>
        <span className="mb-1 block text-[14px] text-muted">{eyebrow}</span>
        <span className="block text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.03em] text-text">
          {title}
        </span>
      </span>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface2 text-text transition-transform duration-500 ease-apple group-hover:translate-x-1">
        <ChevronRight aria-hidden="true" size={22} />
      </span>
    </Link>
  );
}
