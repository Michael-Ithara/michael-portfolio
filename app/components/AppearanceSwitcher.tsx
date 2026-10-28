'use client';
import { useSyncExternalStore } from 'react';

type Appearance = 'light' | 'dark' | 'auto';

const OPTIONS: { value: Appearance; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'auto', label: 'Auto' },
];

// Also read by the inline script in layout.tsx; keep the two in sync.
const STORAGE_KEY = 'appearance';

// The data-theme attribute on <html> is the store; the inline script in
// layout.tsx sets it before paint.
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Appearance {
  const theme = document.documentElement.dataset.theme;
  return theme === 'light' || theme === 'dark' ? theme : 'auto';
}

function getServerSnapshot(): Appearance {
  return 'auto';
}

function apply(value: Appearance) {
  const root = document.documentElement;
  if (value === 'auto') delete root.dataset.theme;
  else root.dataset.theme = value;
  try {
    if (value === 'auto') localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked (private mode): the choice still applies for this visit.
  }
  listeners.forEach((listener) => listener());
}

/**
 * Light / Dark / Auto, the way developer.apple.com offers it. Auto is the
 * default and follows the system setting.
 */
export default function AppearanceSwitcher() {
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <fieldset className="flex items-center gap-3">
      <legend className="sr-only">Appearance</legend>
      <span aria-hidden="true" className="text-[13px] text-muted">
        Appearance
      </span>
      <div className="flex rounded-full bg-surface p-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        {OPTIONS.map((option) => (
          <label
            key={option.value}
            className="relative cursor-pointer rounded-full px-3 py-1 text-[13px] text-muted transition-colors duration-300 has-checked:bg-text has-checked:text-bg has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-system"
          >
            <input
              type="radio"
              name="appearance"
              value={option.value}
              checked={value === option.value}
              onChange={() => apply(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
