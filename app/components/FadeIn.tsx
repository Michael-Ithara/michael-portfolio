'use client';
import { useEffect, useRef, useState } from 'react';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

/** Whole-block fade-up, triggered once when the block scrolls into view. */
export default function FadeIn({ children, className, style, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.9s var(--ease-apple) ${delay}ms, transform 0.9s var(--ease-apple) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
