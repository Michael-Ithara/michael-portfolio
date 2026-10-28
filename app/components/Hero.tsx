import Image from 'next/image';
import Reveal from './Reveal';
import { toWords } from './words';
import { Button, ChevronLink } from './ui';

const portrait = (
  <span
    key="portrait"
    className="relative mx-[0.04em] inline-block h-[0.92em] w-[0.92em] translate-y-[0.1em] overflow-hidden rounded-[24%] bg-surface align-baseline shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
  >
    <Image
      src="/michael-about.jpg"
      alt=""
      fill
      preload
      sizes="96px"
      className="object-cover object-top"
    />
  </span>
);

const headline = [
  ...toWords('Hi, I’m'),
  portrait,
  'Michael.',
  '\n',
  ...toWords('Most builders start with the solution.').map((w, i) => (
    <span key={`lead-${i}`} className="text-faint">
      {w}
    </span>
  )),
  ...toWords('I start with'),
  <span key="accent" className="whitespace-nowrap text-accent">
    the person
  </span>,
  ...toWords('who has the problem.'),
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-44">
      <div className="animate-fade-up delay-1 mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-[14px] font-medium text-text shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Building Onboarder
        </span>
      </div>

      <h1 className="mb-10 max-w-[1000px] text-[clamp(40px,6.2vw,84px)] font-semibold leading-[1.04] tracking-[-0.035em] text-text">
        <span className="sr-only">
          Hi, I’m Michael. Most builders start with the solution. I start with the person who
          has the problem.
        </span>
        <span aria-hidden="true">
          <Reveal triggerOnMount stagger={40} items={headline} />
        </span>
      </h1>

      <div className="animate-fade-up delay-4 flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
        <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-4">
          <Button href="#work">See my work</Button>
          <ChevronLink href="mailto:mkihuyu020@gmail.com">Get in touch</ChevronLink>
        </div>
        <p className="max-w-[520px] text-[clamp(17px,1.6vw,21px)] leading-[1.45] tracking-[-0.01em] text-muted">
          Product Engineer in Nairobi. I build AI-native systems that work because they&apos;re{' '}
          <strong className="font-semibold text-text">designed around the humans inside them</strong>.
        </p>
      </div>
    </section>
  );
}
