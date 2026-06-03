import Link from 'next/link';

export default function Solarios() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px 80px' }}>

      <Link href="/#work" style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-block', marginBottom: '48px' }}>
        ← Back to work
      </Link>

      <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, display: 'block', marginBottom: '16px' }}>
        Solar Energy Platform · 2025
      </span>

      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.05, marginBottom: '24px' }}>
        <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Solarios</span>
      </h1>

      <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '64px', maxWidth: '580px' }}>
        People with solar panels still don&apos;t understand their own energy.
      </p>

      {/* Meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '64px' }}>
        {[
          { label: 'Role', value: 'Solo builder' },
          { label: 'Context', value: 'Final year capstone' },
          { label: 'Grade', value: 'Distinction (A)' },
          { label: 'Focus', value: 'Behaviour change + AI' },
        ].map((item) => (
          <div key={item.label}>
            <span style={{ fontSize: '11px', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>{item.label}</span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>{item.value}</span>
          </div>
        ))}
      </div>

      {[
        {
          heading: 'The problem',
          paragraphs: [
            "Millions of households have solar panels. Most of them have no real idea how those panels are performing, when they're saving money versus drawing from the grid, or what habits are quietly costing them.",
            "The data exists — it just isn't legible or actionable for the average homeowner. Monitoring tools show numbers. Nobody changes their behaviour because of a number.",
          ],
        },
        {
          heading: 'What I built',
          paragraphs: [
            "Solarios is a solar energy management platform that gives homeowners real-time visibility into their energy ecosystem. Not just numbers on a screen — actual intelligence about what's happening and what to do about it.",
            "The dashboard shows live consumption versus solar production, battery level, grid dependence, and cost comparisons. An AI insights engine analyses usage patterns and generates personalised recommendations — which appliances to shift, when to use high-draw devices, how to reduce peak-hour grid dependency.",
            "The appliance management layer lets users monitor individual devices, flag high-usage patterns, and understand exactly where their energy is going. A forecasting layer projects next month's consumption and estimated cost based on real behaviour.",
          ],
        },
        {
          heading: 'The design intention',
          paragraphs: [
            "Solarios isn't just a monitoring tool. It's a behaviour change system. The goal was never to show people data — it was to change how they relate to their energy consumption over time.",
            "Every insight, every recommendation, every notification is designed around a simple question: does this help someone make a better decision today?",
          ],
        },
        {
          heading: 'The outcome',
          paragraphs: [
            "Final year capstone at Strathmore University. Built with real IoT simulation validated against actual datasets. Graded with distinction.",
            "A genuine proof that AI-powered recommendations can make sustainable energy behaviour accessible — not just to engineers, but to anyone with a solar panel and a phone.",
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

      <a
        href="https://solarios-v2.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '999px', background: 'var(--accent)', color: 'white', fontSize: '14px', fontWeight: 500, textDecoration: 'none', marginBottom: '64px' }}
      >
        Try Solarios live ↗
      </a>

      <div style={{ paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '11px', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '16px' }}>Back to start</span>
        <Link href="/#work" style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', fontWeight: 600, color: 'var(--text)', textDecoration: 'none' }}>
          ← All projects
        </Link>
      </div>

    </main>
  );
}