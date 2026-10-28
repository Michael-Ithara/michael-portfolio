import { Fragment } from 'react';
import type { Metadata } from 'next';
import {
  type Beat,
  CaseBody,
  CaseHeader,
  CaseSection,
  LiveLink,
  MetaGrid,
  NextProject,
  accent,
  strong,
} from '../CaseStudy';

export const metadata: Metadata = {
  title: 'Solarios',
  description: "People with solar panels still don't understand their own energy.",
  openGraph: {
    title: 'Solarios · Michael Kihuyu',
    description: "People with solar panels still don't understand their own energy.",
  },
};

const headingWords = [accent('Solarios', 'solarios-accent')];

const SECTIONS: { beat: Beat; heading: string; paragraphs: React.ReactNode[] }[] = [
  {
    beat: 'The person',
    heading: 'Homeowners with panels on the roof',
    paragraphs: [
      <Fragment key="p1">
        Millions of households have solar panels. Most of them have no real
        idea how those panels are performing, when they&apos;re saving money
        versus drawing from the grid, or what habits are quietly costing
        them.
      </Fragment>,
    ],
  },
  {
    beat: 'The structure',
    heading: 'Numbers nobody acts on',
    paragraphs: [
      <Fragment key="p1">
        The data exists. It just isn&apos;t legible or actionable for the
        average homeowner. Monitoring tools show numbers.{' '}
        {strong('Nobody changes their behaviour because of a number', 'p1-b')}.
      </Fragment>,
    ],
  },
  {
    beat: 'The system',
    heading: 'What I built',
    paragraphs: [
      <Fragment key="p1">
        Solarios is a solar energy management platform that gives homeowners
        real-time visibility into their energy ecosystem: not just numbers on
        a screen,{' '}
        {strong("actual intelligence about what's happening and what to do about it", 'p1-b')}.
      </Fragment>,
      <Fragment key="p2">
        The dashboard shows live consumption versus solar production, battery
        level, grid dependence, and cost comparisons. An AI insights engine
        analyses usage patterns and generates personalised recommendations:
        which appliances to shift, when to use high-draw devices, how to
        reduce peak-hour grid dependency.
      </Fragment>,
      <Fragment key="p3">
        The appliance management layer lets users monitor individual devices,
        flag high-usage patterns, and understand exactly where their energy
        is going. A forecasting layer projects next month&apos;s consumption
        and estimated cost based on real behaviour.
      </Fragment>,
    ],
  },
  {
    beat: 'The edges',
    heading: 'Built for a decision, not a dashboard',
    paragraphs: [
      <Fragment key="p1">
        Solarios isn&apos;t just a monitoring tool. It&apos;s{' '}
        {strong('a behaviour change system', 'p1-b')}. The goal was never to
        show people data. It was to change how they relate to their energy
        consumption over time.
      </Fragment>,
      <Fragment key="p2">
        Every insight, every recommendation, every notification is designed
        around a simple question: does this help someone make a better
        decision today?
      </Fragment>,
    ],
  },
  {
    beat: 'The outcome',
    heading: 'Graded with distinction',
    paragraphs: [
      <Fragment key="p1">
        Final year capstone at Strathmore University. Built with real IoT
        simulation validated against actual datasets. Graded with
        distinction.
      </Fragment>,
      <Fragment key="p2">
        A genuine proof that AI-powered recommendations can make sustainable
        energy behaviour accessible: not just to engineers, but to{' '}
        {strong('anyone with a solar panel and a phone', 'p2-b')}.
      </Fragment>,
    ],
  },
];

export default function Solarios() {
  return (
    <main className="pt-28 md:pt-36">
      <CaseHeader
        slug="solarios"
        eyebrow="Solar Energy Platform · 2025"
        heading={headingWords}
        subline="People with solar panels still don't understand their own energy."
      />
      <MetaGrid
        items={[
          { label: 'Role', value: 'Solo builder' },
          { label: 'Context', value: 'Final year capstone' },
          { label: 'Grade', value: 'Distinction (A)' },
          { label: 'Focus', value: 'Behaviour change + AI' },
        ]}
      />
      <CaseBody>
        {SECTIONS.map((section) => (
          <CaseSection
            key={section.heading}
            beat={section.beat}
            heading={section.heading}
            paragraphs={section.paragraphs}
          />
        ))}
        <LiveLink href="https://solarios-v2.vercel.app">Try Solarios live</LiveLink>
        <NextProject href="/#work" eyebrow="Back to start" title="All projects" />
      </CaseBody>
    </main>
  );
}
