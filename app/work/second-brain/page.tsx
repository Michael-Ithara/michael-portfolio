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
  title: 'Second Brain',
  description: 'Most people store knowledge. Almost nobody can find it when they need it.',
  openGraph: {
    title: 'Second Brain · Michael Kihuyu',
    description: 'Most people store knowledge. Almost nobody can find it when they need it.',
  },
};

const headingWords = ['Second', accent('Brain', 'sb-accent')];

const SECTIONS: { beat: Beat; heading: string; paragraphs: React.ReactNode[] }[] = [
  {
    beat: 'The person',
    heading: 'Everyone who reads for a living',
    paragraphs: [
      <Fragment key="p1">
        Knowledge workers, students, builders, researchers, anyone who reads
        and thinks for a living, have {strong('a hoarding problem', 'p1-b')}.
        Notes in five apps. Articles bookmarked and never reopened. Insights
        written down, then effectively lost.
      </Fragment>,
    ],
  },
  {
    beat: 'The structure',
    heading: 'Captured knowledge goes inert',
    paragraphs: [
      <Fragment key="p1">
        The problem isn&apos;t capturing knowledge. It&apos;s that captured
        knowledge goes inert: you can&apos;t search it meaningfully,
        can&apos;t see connections across it, and can&apos;t{' '}
        {strong('have a conversation with it', 'p1-b')}.
      </Fragment>,
    ],
  },
  {
    beat: 'The system',
    heading: 'What I built and why',
    paragraphs: [
      <Fragment key="p1">
        I started building Second Brain to learn how RAG applications
        actually work under the hood: vector embeddings, semantic search,
        retrieval pipelines. But halfway through, I realised{' '}
        {strong('I was solving my own problem', 'p1-b')}.
      </Fragment>,
      <Fragment key="p2">
        So I built a tool that lets you write notes, paste URLs, or import
        content, then ask questions in plain language across everything
        you&apos;ve ever saved.
      </Fragment>,
    ],
  },
  {
    beat: 'The system',
    heading: 'How it works',
    paragraphs: [
      <Fragment key="p1">
        Every note is automatically converted into a 512-dimensional vector:{' '}
        {strong('a mathematical fingerprint of its meaning', 'p1-b')}. Your
        question gets embedded the same way, then matched against your
        knowledge base via cosine similarity.
      </Fragment>,
      <Fragment key="p2">
        Claude surfaces the most relevant content and answers using only what
        you&apos;ve actually written. Ask &lsquo;what were my key takeaways
        from the system design interview?&rsquo; and get a{' '}
        {strong('grounded, cited answer from your own notes', 'p2-b')}, not a
        generic one.
      </Fragment>,
    ],
  },
  {
    beat: 'The edges',
    heading: 'Answers you can trust',
    paragraphs: [
      <Fragment key="p1">
        A knowledge tool that makes things up is worse than no tool at all. So
        the AI only answers from your own knowledge base:{' '}
        {strong('no hallucinations, no invented context', 'p1-b')}. Just your
        own thinking, made queryable and connected.
      </Fragment>,
    ],
  },
  {
    beat: 'The outcome',
    heading: 'Where it is now',
    paragraphs: [
      <Fragment key="p1">
        Live and publicly accessible. Still being refined. The core works,
        the edges are being sharpened.
      </Fragment>,
    ],
  },
];

export default function SecondBrain() {
  return (
    <main className="pt-28 md:pt-36">
      <CaseHeader
        slug="second-brain"
        eyebrow="Personal Knowledge Tool · 2026"
        heading={headingWords}
        subline="Most people store knowledge. Almost nobody can find it when they need it."
      />
      <MetaGrid
        items={[
          { label: 'Role', value: 'Solo builder' },
          { label: 'Stack', value: 'React · Supabase · Claude' },
          { label: 'Status', value: 'Live · in development' },
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
        <LiveLink href="https://the-second-brain.netlify.app">Try Second Brain live</LiveLink>
        <NextProject href="/work/solarios" eyebrow="Next project" title="Solarios" />
      </CaseBody>
    </main>
  );
}
