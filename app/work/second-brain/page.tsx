import Link from 'next/link';

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
        Second{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Brain</span>
      </h1>

      <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '64px', maxWidth: '580px' }}>
        Most people store knowledge. Almost nobody can find it when they need it.
      </p>

      {/* Meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: '64px' }}>
        {[
          { label: 'Role', value: 'Solo builder' },
          { label: 'Stack', value: 'React · Supabase · Claude' },
          { label: 'Status', value: 'Live — in development' },
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
            "Knowledge workers — students, builders, researchers, anyone who reads and thinks for a living — have a hoarding problem. Notes in five apps. Articles bookmarked and never reopened. Insights written down and then effectively lost.",
            "The problem isn't capturing knowledge. It's that captured knowledge becomes inert. You can't search it meaningfully, you can't see connections across it, and you certainly can't have a conversation with it.",
          ],
        },
        {
          heading: 'What I built and why',
          paragraphs: [
            "I started building Second Brain to learn how RAG applications actually work under the hood — vector embeddings, semantic search, retrieval pipelines. But halfway through, I realised I was solving my own problem.",
            "So I built a tool that lets you write notes, paste URLs, or import content — and then ask questions in plain language across everything you've ever saved. The AI only answers from your own knowledge base. No hallucinations, no invented context. Just your own thinking, made queryable and connected.",
          ],
        },
        {
          heading: 'How it works',
          paragraphs: [
            "Every note is automatically converted into a 512-dimensional vector — a mathematical fingerprint of its meaning. When you ask a question, your query gets embedded the same way and matched against your knowledge base via cosine similarity.",
            "Claude surfaces the most relevant content and answers using only what you've actually written. The result: you can ask 'what were my key takeaways from the system design interview?' and get a grounded, cited answer from your own notes — not a generic response.",
          ],
        },
        {
          heading: 'Where it is now',
          paragraphs: [
            "Live and publicly accessible. Still being refined. The core works — the edges are being sharpened.",
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