import { Fragment } from 'react';
import Link from 'next/link';
import PipelineDiagram from './PipelineDiagram';
import Reveal from '../../components/Reveal';
import { toWords } from '../../components/words';
import FadeIn from '../../components/FadeIn';

const strong = (text: string, key: string) => (
  <strong key={key} className="text-accent font-semibold">
    {text}
  </strong>
);

const headingWords = [
  ...toWords('Latitude59'),
  '\n',
  ...toWords('Speaker Portal').map((w, i) => (
    <span key={`l59-accent-${i}`} style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
      {w}
    </span>
  )),
];

const SECTIONS = [
  {
    heading: 'The problem nobody had named yet',
    paragraphs: [
      <Fragment key="p1">
        Latitude59 is one of Europe&apos;s top startup conferences: 80
        speakers, two days, thousands of attendees. Every year, the team ran
        speaker logistics like most conferences do: emails, spreadsheets, and
        things falling through the cracks.
      </Fragment>,
      <Fragment key="p2">
        The brief I walked into wasn&apos;t &lsquo;build us a speaker
        portal.&rsquo; It was vaguer than that. So before we touched any
        tools, I changed the unit of analysis. Instead of what the admin team
        needed, I looked at{' '}
        {strong('what a speaker actually experiences', 'p2-b')}: from the
        moment they&apos;re invited to the moment they walk off stage.
      </Fragment>,
      <Fragment key="p3">
        What I found were {strong('two problems feeding each other', 'p3-b')}.
        Speakers had no single place to track what was expected of them,
        submit materials, confirm travel, or know what came next. Every gap
        became an email to the organiser. The organiser, meanwhile, had no way
        to see where any speaker stood, so they couldn&apos;t act until
        something broke. Speaker confusion generated admin work. Admin
        blindness created more speaker confusion. Solving one without the
        other would only add pressure to the one left standing.
      </Fragment>,
    ],
  },
  {
    heading: 'What we built',
    paragraphs: [
      <Fragment key="p1">
        A two-sided system, built from scratch: a speaker-facing portal and an
        organiser-facing dashboard, connected by a{' '}
        {strong('9-phase onboarding pipeline', 'p1-b')}.
      </Fragment>,
      <Fragment key="p2">
        Speakers get a private, personalised portal built around their
        conference journey: profile and bio, talk details and slides, travel
        and accommodation, dinner RSVPs, all in one place, in the right order.
      </Fragment>,
      <Fragment key="p3">
        Organisers get a live operations dashboard. Every speaker&apos;s
        pipeline status {strong('visible at a glance', 'p3-b')}. Invitations
        sent and tracked. Onboarding progress monitored in real time. Travel
        and logistics managed without chasing anyone.
      </Fragment>,
      <Fragment key="p4">
        The infrastructure underneath connects eight services: Salesforce, a
        token authentication system, automated email, travel agent
        integration, ticketing, and calendar sync. A speaker confirmed in
        Salesforce {strong('triggers the entire onboarding sequence automatically', 'p4-b')}.
      </Fragment>,
    ],
  },
  {
    heading: 'The process',
    paragraphs: [
      <Fragment key="p1">
        A month of problem discovery and architecture{' '}
        {strong('before a single component was built', 'p1-b')}. Sequence
        diagrams mapping every actor and every interaction. Deliberate
        decisions about what belonged on the speaker side versus the
        organiser side.
      </Fragment>,
      <Fragment key="p2">
        A team of four, each owning a domain. I{' '}
        {strong('held the thread between product coherence and technical execution', 'p2-b')}
        : process design, journey mapping, onboarding flows, the overall
        pipeline architecture.
      </Fragment>,
      <Fragment key="p3">We tested it. Refined it. Guided the client through it. Deployed it.</Fragment>,
    ],
  },
  {
    heading: 'The outcome',
    paragraphs: [
      <Fragment key="p1">
        80 speakers managed through a single system for Latitude59&apos;s 2026
        conference. The organiser team moved from manual coordination to
        pipeline visibility. The speaker experience went from fragmented
        emails to a {strong('structured, personalised journey', 'p1-b')}.
      </Fragment>,
      <Fragment key="p2">
        And the model is repeatable. Every conference in the world has this
        problem. We built the first version of the solution.
      </Fragment>,
    ],
  },
];

export default function Latitude59() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px 80px' }}>

      <Link href="/#work" style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-block', marginBottom: '48px' }}>
        ← Back to work
      </Link>

      <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, display: 'block', marginBottom: '16px' }}>
        Conference Operations · Estonia · 2026
      </span>

      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.05, marginBottom: '24px' }}>
        <Reveal items={headingWords} stagger={45} />
      </h1>

      <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '64px', maxWidth: '580px' }}>
        80 speakers. Two problems feeding each other. One system to solve both.
      </p>

      {/* Meta */}
      <FadeIn
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '64px' }}
      >
        {[
          { label: 'Role', value: 'Product Engineer' },
          { label: 'Team', value: '4 engineers' },
          { label: 'Timeline', value: 'Jan – May 2026' },
          { label: 'Speakers', value: '80 managed' },
        ].map((item) => (
          <div key={item.label}>
            <span style={{ fontSize: '11px', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>{item.label}</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>{item.value}</span>
          </div>
        ))}
      </FadeIn>

      {/* Body */}
      {SECTIONS.map((section) => (
        <Fragment key={section.heading}>
          <FadeIn style={{ marginBottom: '56px' }}>
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
          {section.heading === 'What we built' && <PipelineDiagram />}
        </Fragment>
      ))}

      {/* Outcome stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '64px' }}>
        {[
          { stat: '80', label: 'Speakers managed' },
          { stat: '9', label: 'Pipeline phases' },
          { stat: '8', label: 'Integrated services' },
        ].map((item, i) => (
          <FadeIn
            key={item.stat}
            delay={i * 100}
            style={{ padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--border)', textAlign: 'center' }}
          >
            <span style={{ fontFamily: 'Fraunces, serif', fontSize: '48px', fontWeight: 600, color: 'var(--accent)', display: 'block', marginBottom: '8px' }}>{item.stat}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.label}</span>
          </FadeIn>
        ))}
      </div>

      {/* Next */}
      <div style={{ paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '11px', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '16px' }}>Next project</span>
        <Link href="/work/second-brain" style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', fontWeight: 600, color: 'var(--text)', textDecoration: 'none' }}>
          Second Brain →
        </Link>
      </div>

    </main>
  );
}