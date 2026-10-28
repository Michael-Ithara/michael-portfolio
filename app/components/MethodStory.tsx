'use client';
import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { ChevronLink, SectionLabel } from './ui';
import { toWords } from './words';
import { InboxVisual, LoopVisual, OutcomeVisual, PipelineVisual } from './StoryVisuals';

const STEPS = [
  {
    beat: 'The person',
    title: 'Start with one speaker.',
    body: 'Take any of the 80. They need to send a bio, upload slides, confirm travel, RSVP to dinner, and know what comes next. With no single place to do it, every gap became an email to the organiser.',
    Visual: InboxVisual,
  },
  {
    beat: 'The structure',
    title: 'Two problems, feeding each other.',
    body: "Speaker confusion generated admin work. Admin blindness created more speaker confusion. Solving one without the other would only add pressure to the one left standing.",
    Visual: LoopVisual,
  },
  {
    beat: 'The system',
    title: 'One pipeline, two sides.',
    body: 'A private portal for every speaker, a live dashboard for the organisers, and a 9-phase onboarding pipeline between them. A speaker confirmed in Salesforce triggers the entire sequence automatically.',
    Visual: PipelineVisual,
  },
  {
    beat: 'The outcome',
    title: '80 speakers. One system.',
    body: 'The organiser team moved from manual coordination to pipeline visibility. Speakers went from fragmented emails to a structured, personalised journey.',
    Visual: OutcomeVisual,
  },
];

const headingWords = [
  ...toWords("I don't lead with the tech.").map((w, i) => (
    <span key={`lead-${i}`} className="text-faint">
      {w}
    </span>
  )),
  ...toWords('I lead with'),
  <span key="accent" className="whitespace-nowrap text-accent">
    the person
  </span>,
  ...toWords('experiencing the problem.'),
];

/**
 * Scroll-told Latitude59 story. On desktop the visual is sticky and changes
 * with the step being read; on smaller screens each step carries its own
 * visual, so nothing depends on scroll position.
 */
export default function MethodStory() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" className="mx-auto max-w-[1120px] px-4 py-24 sm:px-6 md:py-32">
      <SectionLabel>How I work</SectionLabel>
      <h2 className="mb-6 max-w-[880px] text-[clamp(34px,4.6vw,56px)] font-semibold leading-[1.06] tracking-[-0.03em] text-text">
        <Reveal items={headingWords} stagger={35} />
      </h2>
      <p className="max-w-[620px] text-[clamp(17px,1.6vw,21px)] leading-[1.5] tracking-[-0.01em] text-muted">
        Here&apos;s what that looked like for the Latitude59 speaker portal, built for one of
        Europe&apos;s top startup conferences.
      </p>

      <div className="mt-12 md:mt-8 md:grid md:grid-cols-2 md:gap-16">
        <ol className="flex flex-col gap-6 md:gap-0">
          {STEPS.map((step, i) => (
            <li key={step.beat}>
              <div
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-step={i}
                className="md:flex md:min-h-[78vh] md:items-center"
              >
                <div
                  className={`transition-opacity duration-500 md:max-w-[440px] ${
                    active === i ? 'md:opacity-100' : 'md:opacity-30'
                  }`}
                >
                  <span
                    className={`mb-3 block text-[15px] font-semibold ${
                      step.beat === 'The system' ? 'text-system' : 'text-accent-ink'
                    }`}
                  >
                    {i + 1} · {step.beat}
                  </span>
                  <div className="mb-6 flex aspect-[4/3] items-center justify-center rounded-tile bg-[#0E1A2B] p-5 md:hidden" aria-hidden="true">
                    <step.Visual active />
                  </div>
                  <h3 className="mb-4 text-[clamp(28px,3vw,40px)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
                    {step.title}
                  </h3>
                  <p className="text-[17px] leading-[1.6] text-muted">{step.body}</p>
                  {i === STEPS.length - 1 && (
                    <div className="mt-8">
                      <ChevronLink href="/work/latitude59">Read the Latitude59 case study</ChevronLink>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="hidden md:block" aria-hidden="true">
          <div className="sticky top-[14vh] flex h-[72vh] items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tile bg-[#0E1A2B]">
              {STEPS.map((step, i) => (
                <div
                  key={step.beat}
                  className="absolute inset-0 flex items-center justify-center px-8 pb-14 pt-8 transition-opacity duration-700 ease-apple"
                  style={{ opacity: active === i ? 1 : 0 }}
                >
                  <step.Visual active={active === i} />
                </div>
              ))}
              <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
                {STEPS.map((step, i) => (
                  <span
                    key={step.beat}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-apple ${
                      active === i ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
