import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';
import { toWords } from './words';
import { SectionLabel } from './ui';

const headingWords = [
  ...toWords("I'm not hard"),
  '\n',
  ...toWords('to reach.').map((w, i) => (
    <span key={`contact-accent-${i}`} className="text-accent-on-ink">
      {w}
    </span>
  )),
];

/* One door per persona: Founder with a Problem, Peer Builder, International Connector. */
const DOORS = [
  {
    question: 'Have a problem worth solving?',
    action: 'Tell me about it',
    href: 'mailto:mkihuyu020@gmail.com?subject=A%20problem%20worth%20solving',
  },
  {
    question: 'Building something too?',
    action: 'Compare notes',
    href: 'mailto:mkihuyu020@gmail.com?subject=Building%20something',
  },
  {
    question: 'Just want to connect?',
    action: 'Find me on LinkedIn',
    href: 'https://www.linkedin.com/in/michael-kihuyu-977a0b266/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1120px] px-4 pb-24 sm:px-6 md:pb-32">
      <div className="relative overflow-hidden rounded-tile bg-ink px-6 py-16 text-on-ink sm:px-12 md:px-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,138,61,0.22)_0%,transparent_65%)]"
        />

        <div className="relative">
          <div className="max-w-[640px]">
            <SectionLabel onInk>Let&apos;s talk</SectionLabel>
            <h2 className="mb-6 text-[clamp(40px,6vw,80px)] font-semibold leading-[1.02] tracking-[-0.035em]">
              <Reveal items={headingWords} stagger={45} />
            </h2>
            <p className="mb-12 max-w-[460px] text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-on-ink-muted">
              Whatever brings you here, <strong className="font-semibold text-on-ink">my inbox is open</strong>.
              Pick the door that fits.
            </p>
          </div>

          <ul className="grid gap-3 md:grid-cols-3">
            {DOORS.map((door) => {
              const external = door.href.startsWith('http');
              return (
                <li key={door.question}>
                  <a
                    href={door.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex h-full flex-col justify-between gap-8 rounded-card bg-white/6 p-6 no-underline ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10"
                  >
                    <span className="text-[21px] font-semibold leading-[1.2] tracking-[-0.02em] text-on-ink">
                      {door.question}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[15px] font-medium text-system-on-ink">
                      {door.action}
                      {external ? (
                        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.25} />
                      ) : (
                        <ChevronRight
                          aria-hidden="true"
                          size={18}
                          strokeWidth={2.25}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
