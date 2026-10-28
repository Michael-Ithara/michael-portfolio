'use client';
import { useState } from 'react';

/*
 * Second Brain, illustrated: pick a question and the three nearest notes light
 * up as the citations for the answer. Note titles and positions are made up
 * for the illustration; the mechanism (embeddings matched by cosine
 * similarity, answers only from your own notes) is the real one.
 */

type Note = { x: number; y: number; title: string };

const NOTES: Note[] = [
  { x: 92, y: 74, title: 'System design interview' },
  { x: 150, y: 52, title: 'Caching trade-offs' },
  { x: 128, y: 120, title: 'Load balancer notes' },
  { x: 60, y: 140, title: 'Mock interview feedback' },
  { x: 352, y: 70, title: 'Embeddings explainer' },
  { x: 410, y: 112, title: 'Cosine similarity' },
  { x: 330, y: 132, title: 'Postgres vector setup' },
  { x: 430, y: 52, title: 'RAG pipeline sketch' },
  { x: 214, y: 236, title: 'Notes on Atomic Habits' },
  { x: 270, y: 262, title: 'Morning routine ideas' },
  { x: 188, y: 280, title: 'Article: small wins' },
  { x: 300, y: 214, title: 'Gym log thoughts' },
  { x: 236, y: 140, title: 'Reading list' },
  { x: 60, y: 250, title: 'Quotes' },
  { x: 420, y: 250, title: 'Trip planning' },
  { x: 250, y: 60, title: 'Meeting notes' },
];

const QUESTIONS = [
  {
    label: 'Interviews',
    text: 'What were my key takeaways from the system design interview?',
    at: { x: 112, y: 96 },
  },
  {
    label: 'Search',
    text: 'How does my app find related notes?',
    at: { x: 380, y: 96 },
  },
  {
    label: 'Habits',
    text: 'What have I saved about building habits?',
    at: { x: 240, y: 250 },
  },
];

const nearest = (at: { x: number; y: number }) =>
  [...NOTES]
    .sort((a, b) => Math.hypot(a.x - at.x, a.y - at.y) - Math.hypot(b.x - at.x, b.y - at.y))
    .slice(0, 3);

export default function VectorDemo() {
  const [index, setIndex] = useState(0);
  const question = QUESTIONS[index];
  const cited = nearest(question.at);

  return (
    <div className="w-full">
      <fieldset className="mb-5">
        <legend className="sr-only">Ask Second Brain a question</legend>
        <div className="grid grid-cols-3 rounded-full bg-white/10 p-1">
          {QUESTIONS.map((q, i) => (
            <label
              key={q.label}
              className="cursor-pointer rounded-full py-1.5 text-center text-[13px] font-medium text-white/70 transition-colors duration-300 has-checked:bg-white has-checked:text-[#15121D] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-system-on-ink"
            >
              <input
                type="radio"
                name="second-brain-question"
                value={i}
                checked={index === i}
                onChange={() => setIndex(i)}
                className="sr-only"
              />
              {q.label}
            </label>
          ))}
        </div>
      </fieldset>

      <p className="mb-2 min-h-[2.8em] text-[15px] font-medium leading-[1.4] text-white/90" aria-live="polite">
        “{question.text}”
      </p>

      <svg viewBox="0 0 480 320" className="h-auto w-full" aria-hidden="true">
        {cited.map((note) => (
          <line
            key={`${index}-${note.title}`}
            x1={question.at.x}
            y1={question.at.y}
            x2={note.x}
            y2={note.y}
            className="stroke-system-on-ink"
            strokeWidth="1.5"
            style={{ animation: 'fadeIn 0.6s var(--ease-apple) both' }}
          />
        ))}
        {NOTES.map((note) => {
          const on = cited.includes(note);
          return (
            <circle
              key={note.title}
              cx={note.x}
              cy={note.y}
              r={on ? 7 : 4.5}
              className="transition-all duration-500 ease-apple"
              style={{ fill: on ? '#FFFFFF' : 'rgba(255,255,255,0.28)' }}
            />
          );
        })}
        <g
          className="transition-transform duration-700 ease-apple"
          style={{ transform: `translate(${question.at.x}px, ${question.at.y}px)` }}
        >
          <circle r="20" className="fill-system-on-ink/15" />
          <circle r="8" className="fill-system-on-ink" />
        </g>
      </svg>

      <div className="mt-3 flex flex-wrap items-center gap-2" aria-live="polite">
        <span className="text-[13px] text-white/55">Answer cites</span>
        {cited.map((note) => (
          <span key={note.title} className="rounded-full bg-white/10 px-3 py-1 text-[13px] text-white/85">
            {note.title}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-white/45">
        Illustration. Each note is a 512-dimensional vector, matched to your question by cosine
        similarity.
      </p>
    </div>
  );
}
