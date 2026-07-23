import { Fragment } from 'react';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import FadeIn from '../../components/FadeIn';

const strong = (text: string, key: string) => (
  <strong key={key} className="text-accent font-semibold">
    {text}
  </strong>
);

const headingWords = [
  'Second',
  <span key="sb-accent" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
    Brain
  </span>,
];

const SECTIONS = [
  {
    heading: 'The problem',
    paragraphs: [
      <Fragment key="p1">
        Knowledge workers, students, builders, researchers, anyone who reads
        and thinks for a living, have {strong('a hoarding problem', 'p1-b')}.
        Notes in five apps. Articles bookmarked and never reopened. Insights
        written down, then effectively lost.
      </Fragment>,
      <Fragment key="p2">
        The problem isn&apos;t capturing knowledge. It&apos;s that captured
        knowledge goes inert: you can&apos;t search it meaningfully,
        can&apos;t see connections across it, and can&apos;t{' '}
        {strong('have a conversation with it', 'p2-b')}.
      </Fragment>,
    ],
  },
  {
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
        you&apos;ve ever saved. The AI only answers from your own knowledge
        base: {strong('no hallucinations, no invented context', 'p2-b')}. Just
        your own thinking, made queryable and connected.
      </Fragment>,
    ],
  },
  {
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
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px 80px' }}>

      <Link href="/#work" style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-block', marginBottom: '48px' }}>
        ← Back to work
      </Link>

      <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, display: 'block', marginBottom: '16px' }}>
        Personal Knowledge Tool · 2026
      </span>

      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.05, marginBottom: '24px' }}>
        <Reveal items={headingWords} stagger={60} />
      </h1>

      <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '64px', maxWidth: '580px' }}>
        Most people store knowledge. Almost nobody can find it when they need it.
      </p>

      {/* Meta */}
      <FadeIn
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '64px' }}
      >
        {[
          { label: 'Role', value: 'Solo builder' },
          { label: 'Stack', value: 'React · Supabase · Claude' },
          { label: 'Status', value: 'Live · in development' },
        ].map((item) => (
          <div key={item.label}>
            <span style={{ fontSize: '11px', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>{item.label}</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>{item.value}</span>
          </div>
        ))}
      </FadeIn>

      {SECTIONS.map((section) => (
        <FadeIn key={section.heading} style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '24px', fontWeight: 600, color: 'var(--text)', marginBottom: '20px' }}>
            {section.heading}
          </h2>
          {section.paragraphs.map((para, i) => (
            <p key={i} style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '16px' }}>
              {para}
            </p>
          ))}
          <div style={{ height: '1px', background: 'var(--border)', marginTop: '48px' }} />
        </FadeIn>
      ))}

      <a
        href="https://the-second-brain.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '999px', background: 'var(--accent)', color: 'white', fontSize: '14px', fontWeight: 500, textDecoration: 'none', marginBottom: '64px' }}
      >
        Try Second Brain live ↗
      </a>

      <div style={{ paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '11px', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '16px' }}>Next project</span>
        <Link href="/work/solarios" style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', fontWeight: 600, color: 'var(--text)', textDecoration: 'none' }}>
          Solarios →
        </Link>
      </div>

    </main>
  );
}