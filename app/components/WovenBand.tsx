'use client';
import { useEffect, useRef } from 'react';
import { hexToRgb } from './canvasColor';

/**
 * Single accent moment, not a repeated pattern: a thin abstracted chevron
 * band used once, above the Contact card. Static, no animation.
 */
export default function WovenBand() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      const [r, g, b] = hexToRgb(accent || '#C17A3A');

      const w = rect.width;
      const h = rect.height;
      const step = 22;
      const bandH = h * 0.5;

      const chevronRow = (y: number, dir: number) => {
        ctx.beginPath();
        for (let x = -step; x <= w + step; x += step) {
          const peakY = y + (dir * bandH) / 2;
          ctx.moveTo(x, y);
          ctx.lineTo(x + step / 2, peakY);
          ctx.lineTo(x + step, y);
        }
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.18)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      };

      chevronRow(h * 0.35, 1);
      chevronRow(h * 0.65, -1);
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ width: '100%', height: '40px', display: 'block', marginBottom: '32px' }}
    />
  );
}
