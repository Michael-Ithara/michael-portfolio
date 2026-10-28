import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import Reveal from './Reveal';
import ProjectArt, { projectTheme } from './ProjectArt';
import { Badge, Button, SectionLabel } from './ui';
import { toWords } from './words';

/* Latitude59 is told in MethodStory above; these are the other case studies. */
const projects = [
  {
    slug: 'second-brain',
    label: 'Personal Knowledge Tool · 2026',
    title: 'Second Brain',
    summary: 'Most people store knowledge. Almost nobody can find it when they need it.',
    before: 'A RAG-powered knowledge engine: capture notes, articles, and URLs, then have ',
    bold: 'an actual conversation',
    after: " with everything you've ever saved. Try a question.",
    outcome: 'Live · in active development',
    tags: ['RAG / Vector search', 'Claude API'],
    liveUrl: 'https://the-second-brain.netlify.app',
  },
  {
    slug: 'solarios',
    label: 'Solar Energy Platform · 2025',
    title: 'Solarios',
    summary: "People with solar panels still don't understand their own energy.",
    before: 'Real-time visibility, AI recommendations, and ',
    bold: 'behavioural nudges to build sustainable habits',
    after: '. Drag through a day to see what it would tell you.',
    outcome: 'Final year project · Graded A',
    tags: ['AI energy insights', 'Behaviour change design'],
    liveUrl: 'https://solarios-v2.vercel.app',
  },
];

const headingWords = [
  ...toWords('Same method.').map((w, i) => (
    <span key={`lead-${i}`} className="text-faint">
      {w}
    </span>
  )),
  ...toWords('Different domains.'),
];

export default function Work() {
  return (
    <section id="more-work" className="mx-auto max-w-[1120px] px-4 py-24 sm:px-6 md:py-32">
      <SectionLabel>More work</SectionLabel>
      <h2 className="mb-14 max-w-[820px] text-[clamp(34px,4.6vw,56px)] font-semibold leading-[1.06] tracking-[-0.03em] text-text md:mb-20">
        <Reveal items={headingWords} stagger={45} />
      </h2>

      <div className="flex flex-col gap-5">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 80}>
            <article
              className={`grid overflow-hidden rounded-tile text-on-ink lg:grid-cols-[1fr_1.05fr] ${projectTheme[project.slug]}`}
            >
              <div className="flex flex-col p-8 sm:p-10 md:p-14">
                <span className="mb-3 text-[14px] text-on-ink-muted">{project.label}</span>
                <h3 className="mb-5 text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                  <Link href={`/work/${project.slug}`} className="text-on-ink no-underline hover:underline">
                    {project.title}
                  </Link>
                </h3>
                <p className="mb-4 text-[19px] font-medium leading-[1.4] tracking-[-0.01em] text-on-ink">
                  {project.summary}
                </p>
                <p className="mb-8 text-[16px] leading-[1.6] text-on-ink-muted">
                  {project.before}
                  <strong className="font-semibold text-on-ink">{project.bold}</strong>
                  {project.after}
                </p>
                <div className="mb-10 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-[13px] font-medium text-[#1D1D1F]">
                    {project.outcome}
                  </span>
                  {project.tags.map((tag) => (
                    <Badge key={tag} onInk>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Button href={`/work/${project.slug}`} variant="light">
                    Read the case study
                  </Button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1 text-[15px] font-medium text-system-on-ink no-underline hover:underline"
                  >
                    Try it live
                    <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.25} />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-white/10 p-6 sm:p-10 lg:border-l lg:border-t-0">
                <div className="w-full max-w-[480px]">
                  <ProjectArt slug={project.slug} />
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
