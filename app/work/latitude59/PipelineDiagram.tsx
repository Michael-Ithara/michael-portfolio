const SERVICES = [
  'Salesforce',
  'Token authentication',
  'Automated email',
  'Travel agent integration',
  'Ticketing',
  'Calendar sync',
];

export default function PipelineDiagram() {
  return (
    <div className="my-16 rounded-2xl border border-border bg-surface p-6 md:p-12">
      <span className="mb-10 block text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
        How the loop worked
      </span>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-[var(--bg)] p-6">
          <h4 className="font-display mb-2 text-lg font-semibold">Speaker</h4>
          <p className="text-sm leading-relaxed text-muted">
            No single place to track what was expected, submit materials, or know what
            came next. Every gap became an email to the organiser.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-[var(--bg)] p-6">
          <h4 className="font-display mb-2 text-lg font-semibold">Organiser</h4>
          <p className="text-sm leading-relaxed text-muted">
            No way to see where any speaker stood in the process, so they couldn&apos;t
            act until something broke.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-border bg-[var(--bg)] p-6 md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-muted">
          <span className="font-medium">Speaker confusion</span>{' '}
          <span className="text-accent">→</span> more admin work
        </span>
        <span className="hidden text-faint md:inline">·</span>
        <span className="text-sm text-muted">
          <span className="font-medium">Organiser blindness</span>{' '}
          <span className="text-accent">→</span> more speaker confusion
        </span>
      </div>

      <div className="mt-10">
        <span className="mb-3 block text-xs uppercase tracking-wide text-faint">
          9-phase onboarding pipeline
        </span>
        <div className="flex gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-2 flex-1 overflow-hidden rounded-full bg-border">
              <div className="h-full rounded-full bg-accent" style={{ opacity: 0.25 + i * 0.075 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <span className="mb-3 block text-xs uppercase tracking-wide text-faint">
          Integrated services (8 total)
        </span>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface2 px-3 py-1 text-xs text-muted"
            >
              {s}
            </span>
          ))}
          <span className="rounded-full border border-dashed border-border px-3 py-1 text-xs text-faint">
            +2 more
          </span>
        </div>
      </div>
    </div>
  );
}
