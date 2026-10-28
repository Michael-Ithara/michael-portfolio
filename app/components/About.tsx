import Image from 'next/image';
import Reveal from './Reveal';
import { toWords } from './words';
import FadeIn from './FadeIn';
import { ChevronLink, SectionLabel } from './ui';
import AtAGlance from './AtAGlance';

const headingWords = [
  ...toWords('The person'),
  ...toWords('behind the work.').map((w, i) => (
    <span key={`about-accent-${i}`} className="text-faint">
      {w}
    </span>
  )),
];

const paragraphs = [
  <>
    I&apos;m Michael, a Product Engineer from Nairobi who&apos;s spent the last
    few years building AI-native systems across two continents. I&apos;ve
    learned{' '}
    <strong className="font-semibold text-text">
      what makes technology actually useful
    </strong>{' '}
    to the people it&apos;s meant to serve.
  </>,
  <>
    I&apos;ve worked on speaker pipelines for European startup conferences,
    solar energy platforms, and personal knowledge tools. The domains are
    different. The approach stays the same:{' '}
    <strong className="font-semibold text-text">
      understand the person first, then build the thing
    </strong>
    .
  </>,
  <>
    When I&apos;m not building, I&apos;m probably at the gym, playing football
    weekly, or in a conversation going in five directions at once. I like it
    that way.
  </>,
  <>
    I&apos;m always open to interesting people working on things that matter.
    If that&apos;s you,{' '}
    <strong className="font-semibold text-text">let&apos;s talk</strong>.
  </>,
];

const links = [
  { label: 'Email', href: 'mailto:mkihuyu020@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-kihuyu-977a0b266/' },
  { label: 'GitHub', href: 'https://github.com/Michael-Ithara' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1120px] px-4 py-24 sm:px-6 md:py-32">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="mb-10 text-[clamp(34px,4.6vw,56px)] font-semibold leading-[1.06] tracking-[-0.03em] text-text">
            <Reveal items={headingWords} stagger={45} />
          </h2>

          <div className="flex flex-col gap-5">
            {paragraphs.map((para, i) => (
              <FadeIn key={i} delay={i * 80}>
                <p className="text-[17px] leading-[1.65] text-muted">{para}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {links.map((link) => (
              <ChevronLink key={link.label} href={link.href}>
                {link.label}
              </ChevronLink>
            ))}
          </div>
        </div>

        <FadeIn delay={120} className="flex flex-col gap-4 md:sticky md:top-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-tile bg-surface">
            <Image
              src="/michael-about.jpg"
              alt="Michael Kihuyu"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <figure className="relative aspect-[16/9] overflow-hidden rounded-tile bg-surface">
            <Image
              src="/michael-building.jpg"
              alt="Michael at the European Defense Hackathon, Tallinn"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10 text-[13px] font-medium text-white/90">
              European Defense Hackathon · Tallinn, Estonia
            </figcaption>
          </figure>
        </FadeIn>
      </div>

      <AtAGlance />
    </section>
  );
}
