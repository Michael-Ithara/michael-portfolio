import Link from 'next/link';

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
        Latitude59
        <br />
        <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Speaker Portal</span>
      </h1>

      <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '64px', maxWidth: '580px' }}>
        80 speakers. Two problems feeding each other. One system to solve both.
      </p>

      {/* Meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '64px' }}>
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
      </div>

      {/* Body */}
      {[
        {
          heading: 'The problem nobody had named yet',
          paragraphs: [
            "Latitude59 is one of Europe's top startup conferences — 80 speakers, two days, thousands of attendees. Every year, the team managed speaker logistics the same way most conferences do: emails, spreadsheets, and a growing pile of things falling through the cracks.",
            "The brief I walked into wasn't 'build us a speaker portal.' It was vaguer than that. So before we touched any tools, I changed the unit of analysis. Instead of looking at what the admin team needed, I looked at what a speaker actually experiences — from the moment they're invited to the moment they walk off stage.",
            "What I found were two problems feeding each other. Speakers had no single place to track what was expected of them, submit materials, confirm travel, or know what came next. Every gap became an email to the organiser. Meanwhile, the organiser had no way to see where any speaker was in the process — so they couldn't act until something broke. Speaker confusion generated admin work. Admin blindness created more speaker confusion. You had to solve both simultaneously, or solving one would just put more pressure on the other.",
          ],
        },
        {
          heading: 'What we built',
          paragraphs: [
            "A two-sided system from scratch — a speaker-facing portal and an organiser-facing dashboard, connected by a 9-phase onboarding pipeline.",
            "Speakers get a private, personalised portal built around their conference journey. Profile and bio, talk details and slides, travel and accommodation, dinner RSVPs. Everything in one place, in the right order, with no ambiguity about what comes next.",
            "Organisers get a live operations dashboard. Every speaker's pipeline status visible at a glance. Invitations sent and tracked. Onboarding progress monitored in real time. Travel and logistics managed without chasing anyone.",
            "The infrastructure underneath connects eight services — Salesforce, a token authentication system, automated email, travel agent integration, ticketing, and calendar sync. A speaker confirmed in Salesforce triggers the entire onboarding sequence automatically.",
          ],
        },
        {
          heading: 'The process',
          paragraphs: [
            "A month of problem discovery and architecture before a single component was built. Sequence diagrams mapping every actor and every interaction. Deliberate decisions about what belonged on the speaker side versus the organiser side.",
            "A team of four, each owning a domain, with me holding the thread between product coherence and technical execution — owning the process design, journey mapping, onboarding flows, and the overall pipeline architecture.",
            "We tested it. Refined it. Guided the client through it. Deployed it.",
          ],
        },
        {
          heading: 'The outcome',
          paragraphs: [
            "80 speakers managed through a single system for Latitude59's 2026 conference. The organiser team moved from manual coordination to pipeline visibility. The speaker experience went from fragmented emails to a structured, personalised journey.",
            "And the model is repeatable. Every conference in the world has this problem. We built the first version of the solution.",
          ],
        },
      ].map((section) => (
        <div key={section.heading} style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '24px', fontWeight: 600, color: 'var(--text)', marginBottom: '20px' }}>
            {section.heading}
          </h2>
          {section.paragraphs.map((para, i) => (
            <p key={i} style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '16px' }}>
              {para}
            </p>
          ))}
          <div style={{ height: '1px', background: 'var(--border)', marginTop: '48px' }} />
        </div>
      ))}

      {/* Outcome stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '64px' }}>
        {[
          { stat: '80', label: 'Speakers managed' },
          { stat: '9', label: 'Pipeline phases' },
          { stat: '8', label: 'Integrated services' },
        ].map((item) => (
          <div key={item.stat} style={{ padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--border)', textAlign: 'center' }}>
            <span style={{ fontFamily: 'Fraunces, serif', fontSize: '48px', fontWeight: 600, color: 'var(--accent)', display: 'block', marginBottom: '8px' }}>{item.stat}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.label}</span>
          </div>
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