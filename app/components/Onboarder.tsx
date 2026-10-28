import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import Reveal from './Reveal';
import { Button, SectionLabel } from './ui';
import { toWords } from './words';

/* The public flow from onboarder.work: a call for speakers hands off to onboarding. */
const STAGES = [
  {
    name: 'Call for Speakers',
    steps: [
      { title: 'Apply', body: 'A public page with your own questions. No account needed.' },
      { title: 'Review', body: 'Reviewers score and comment in one place.' },
      { title: 'Accept', body: 'Creates the speaker and starts onboarding. No re-typing.' },
    ],
  },
  {
    name: 'Onboarding',
    steps: [
      { title: 'Invite', body: 'A one-click magic link. No logins, ever.' },
      { title: 'Onboard', body: 'Profile, headshot, session details, travel.' },
      { title: 'Done', body: 'Every speaker’s status, on one dashboard.' },
    ],
  },
];

const headingWords = [
  ...toWords('Every conference has this problem.').map((w, i) => (
    <span key={`lead-${i}`} className="text-faint">
      {w}
    </span>
  )),
  ...toWords('So we built'),
  <span key="accent" className="text-system">
    Onboarder.
  </span>,
];

export default function Onboarder() {
  return (
    <section id="onboarder" className="mx-auto max-w-[1120px] px-4 py-24 sm:px-6 md:py-32">
      <SectionLabel>Now building</SectionLabel>
      <h2 className="mb-6 max-w-[880px] text-[clamp(34px,4.6vw,56px)] font-semibold leading-[1.06] tracking-[-0.03em] text-text">
        <Reveal items={headingWords} stagger={40} />
      </h2>
      <FadeIn>
        <p className="mb-10 max-w-[640px] text-[clamp(17px,1.6vw,21px)] leading-[1.5] tracking-[-0.01em] text-muted">
          Latitude59 was the first version. Onboarder is the product, built with my cofounders: it
          replaces Google Forms, spreadsheets, and WhatsApp threads with{' '}
          <strong className="font-semibold text-text">one pipeline the team can trust</strong>,
          from the first application to stage-ready.
        </p>
        <Button href="https://onboarder.work/">
          Visit onboarder.work
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.25} />
        </Button>
      </FadeIn>

      <FadeIn delay={120} className="mt-14 md:mt-20">
        <div className="rounded-tile bg-surface p-6 sm:p-10 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-6">
            {STAGES.map((stage, s) => (
              <div key={stage.name}>
                <span className="mb-5 block text-[15px] font-semibold text-system">{stage.name}</span>
                <ol className="flex flex-col gap-3">
                  {stage.steps.map((step, i) => {
                    const handoff = (s === 0 && i === 2) || (s === 1 && i === 0);
                    return (
                      <li
                        key={step.title}
                        className={`flex gap-4 rounded-card p-5 ${handoff ? 'bg-system/10 ring-1 ring-system/40' : 'bg-surface2'}`}
                      >
                        <span
                          className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold tabular-nums ${
                            handoff ? 'bg-text text-bg' : 'bg-surface text-text'
                          }`}
                        >
                          {s * 3 + i + 1}
                        </span>
                        <span>
                          <span className="block text-[17px] font-semibold tracking-[-0.015em] text-text">
                            {step.title}
                          </span>
                          <span className="block text-[15px] leading-[1.5] text-muted">{step.body}</span>
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-muted">
            Steps 3 and 4 are the handoff: accepting an applicant starts their onboarding, with
            nothing typed twice.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
