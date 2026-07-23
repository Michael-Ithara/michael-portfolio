'use client';
import { useEffect, useRef } from 'react';
import { hexToRgb } from './canvasColor';

/**
 * Faint, fixed, site-wide topographic backdrop. Redrawn (new random paths) on
 * every resize; the slow drift is a pure CSS transform, so it stays cheap
 * even though it runs for the life of the page.
 */
export default function BackgroundContours() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      const [r, g, b] = hexToRgb(accent || '#C17A3A');

      const lines = 6;
      for (let i = 0; i < lines; i++) {
        const baseY = (h / (lines + 1)) * (i + 1) + (Math.random() - 0.5) * 40;
        const amp = 24 + Math.random() * 36;
        const freq = 0.006 + Math.random() * 0.006;
        const phase = Math.random() * Math.PI * 2;

        ctx.beginPath();
        for (let x = 0; x <= w; x += 6) {
          const y =
            baseY +
            Math.sin(x * freq + phase) * amp +
            Math.sin(x * freq * 2.3 + phase) * (amp * 0.25);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.08 - i * 0.005})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="bg-contours"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
