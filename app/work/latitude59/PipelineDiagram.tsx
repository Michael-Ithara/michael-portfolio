import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/ui';

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
    <FadeIn className="mb-16">
      <div className="rounded-tile bg-surface p-6 md:p-10">
        <SectionLabel>How the loop worked</SectionLabel>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-card bg-surface2 p-6">
            <h3 className="mb-2 text-[19px] font-semibold tracking-[-0.015em] text-text">Speaker</h3>
            <p className="text-[15px] leading-[1.55] text-muted">
              No single place to track what was expected, submit materials, or know what
              came next. Every gap became an email to the organiser.
            </p>
          </div>
          <div className="rounded-card bg-surface2 p-6">
            <h3 className="mb-2 text-[19px] font-semibold tracking-[-0.015em] text-text">Organiser</h3>
            <p className="text-[15px] leading-[1.55] text-muted">
              No way to see where any speaker stood in the process, so they couldn&apos;t
              act until something broke.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-card bg-surface2 p-6 md:flex-row md:items-center md:justify-between">
          <span className="text-[15px] text-muted">
            <span className="font-semibold text-text">Speaker confusion</span>{' '}
            <span aria-hidden="true" className="text-accent-ink">→</span> more admin work
          </span>
          <span className="text-[15px] text-muted">
            <span className="font-semibold text-text">Organiser blindness</span>{' '}
            <span aria-hidden="true" className="text-accent-ink">→</span> more speaker confusion
          </span>
        </div>

        <div className="mt-10">
          <span className="mb-3 block text-[13px] text-muted">9-phase onboarding pipeline</span>
          <div className="flex gap-1.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                <div className="h-full rounded-full bg-system" style={{ opacity: 0.3 + i * 0.0875 }} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <span className="mb-3 block text-[13px] text-muted">Integrated services (8 total)</span>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <span key={s} className="rounded-full bg-surface2 px-3 py-1 text-[13px] text-muted">
                {s}
              </span>
            ))}
            <span className="rounded-full border border-dashed border-border px-3 py-1 text-[13px] text-muted">
              +2 more
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
