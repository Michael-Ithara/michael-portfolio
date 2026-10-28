import { Fragment } from 'react';
import type { Metadata } from 'next';
import PipelineDiagram from './PipelineDiagram';
import { toWords } from '../../components/words';
import {
  type Beat,
  CaseBody,
  CaseHeader,
  CaseSection,
  MetaGrid,
  NextProject,
  StatStrip,
  accent,
  strong,
} from '../CaseStudy';

export const metadata: Metadata = {
  title: 'Latitude59 Speaker Portal',
  description: '80 speakers. Two problems feeding each other. One system to solve both.',
  openGraph: {
    title: 'Latitude59 Speaker Portal · Michael Kihuyu',
    description: '80 speakers. Two problems feeding each other. One system to solve both.',
  },
};

const headingWords = [
  ...toWords('Latitude59'),
  '\n',
  ...toWords('Speaker Portal').map((w, i) => accent(w, `l59-accent-${i}`)),
];

const SECTIONS: { beat: Beat; heading: string; paragraphs: React.ReactNode[] }[] = [
  {
    beat: 'The person',
    heading: 'Start with one speaker',
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
        Speakers had no single place to track what was expected of them,
        submit materials, confirm travel, or know what came next.{' '}
        {strong('Every gap became an email to the organiser', 'p3-b')}.
      </Fragment>,
    ],
  },
  {
    beat: 'The structure',
    heading: 'Two problems feeding each other',
    paragraphs: [
      <Fragment key="p1">
        What I found were {strong('two problems feeding each other', 'p1-b')}.
        The organiser, meanwhile, had no way to see where any speaker stood,
        so they couldn&apos;t act until something broke.
      </Fragment>,
      <Fragment key="p2">
        Speaker confusion generated admin work. Admin blindness created more
        speaker confusion. Solving one without the other would only add
        pressure to the one left standing.
      </Fragment>,
    ],
  },
  {
    beat: 'The system',
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
        integration, ticketing, and calendar sync.
      </Fragment>,
    ],
  },
  {
    beat: 'The system',
    heading: 'How we worked',
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
    beat: 'The edges',
    heading: "Built for people who won't log in",
    paragraphs: [
      <Fragment key="p1">
        Speakers are busy, external, and with the conference for two days.
        Asking them to create one more account would have been one more gap.
        So the portal runs on{' '}
        {strong('secure token links sent by email', 'p1-b')}: one click, straight
        into their own journey, nothing to remember.
      </Fragment>,
      <Fragment key="p2">
        The organiser side got the same treatment. A speaker confirmed in
        Salesforce {strong('triggers the entire onboarding sequence automatically', 'p2-b')},
        so nobody has to remember to start it either.
      </Fragment>,
    ],
  },
  {
    beat: 'The outcome',
    heading: 'What changed',
    paragraphs: [
      <Fragment key="p1">
        80 speakers managed through a single system for Latitude59&apos;s 2026
        conference. The organiser team moved from manual coordination to
        pipeline visibility. The speaker experience went from fragmented
        emails to a {strong('structured, personalised journey', 'p1-b')}.
      </Fragment>,
      <Fragment key="p2">
        And the model is repeatable. Every conference in the world has this
        problem. We built the first version of the solution. The next version
        is{' '}
        <a
          href="https://onboarder.work/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-system underline underline-offset-4"
        >
          Onboarder
        </a>
        , the product I&apos;m building with my cofounders.
      </Fragment>,
    ],
  },
];

export default function Latitude59() {
  return (
    <main className="pt-28 md:pt-36">
      <CaseHeader
        slug="latitude59"
        eyebrow="Conference Operations · Estonia · 2026"
        heading={headingWords}
        subline="80 speakers. Two problems feeding each other. One system to solve both."
      />
      <MetaGrid
        items={[
          { label: 'Role', value: 'Product Engineer' },
          { label: 'Team', value: '4 engineers' },
          { label: 'Timeline', value: 'Jan – May 2026' },
          { label: 'Speakers', value: '80 managed' },
        ]}
      />
      <CaseBody>
        {SECTIONS.map((section) => (
          <Fragment key={section.heading}>
            <CaseSection beat={section.beat} heading={section.heading} paragraphs={section.paragraphs} />
            {section.heading === 'What we built' && <PipelineDiagram />}
          </Fragment>
        ))}
        <StatStrip
          stats={[
            { stat: '80', label: 'Speakers managed' },
            { stat: '9', label: 'Pipeline phases' },
            { stat: '8', label: 'Integrated services' },
          ]}
        />
        <NextProject href="/work/second-brain" eyebrow="Next project" title="Second Brain" />
      </CaseBody>
    </main>
  );
}
