'use client';
import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  items: (React.ReactNode | '\n')[];
  stagger?: number;
  triggerOnMount?: boolean;
  mountDelay?: number;
  className?: string;
};

/**
 * Word/line reveal for headlines. Pass '\n' in `items` to break a line without
 * animating it. Everything else is wrapped in a staggered fade-up span.
 */
export default function Reveal({
  items,
  stagger = 45,
  triggerOnMount = false,
  mountDelay = 150,
  className,
}: RevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (triggerOnMount) {
      const timer = setTimeout(() => setVisible(true), mountDelay);
      return () => clearTimeout(timer);
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggerOnMount, mountDelay]);

  let wordIndex = 0;
  const output: React.ReactNode[] = [];

  items.forEach((item, i) => {
    if (item === '\n') {
      output.push(<br key={i} />);
      return;
    }
    const idx = wordIndex++;
    output.push(
      <span
        key={i}
        style={{
          display: 'inline-block',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(0.3em)',
          transition: `opacity 0.8s var(--ease-apple) ${idx * stagger}ms, transform 0.8s var(--ease-apple) ${idx * stagger}ms`,
        }}
      >
        {item}
      </span>
    );
    const next = items[i + 1];
    if (next !== undefined && next !== '\n') output.push(' ');
  });

  return (
    <span ref={ref} className={className}>
      {output}
    </span>
  );
}
