import { CENTER, K_PATH, K_STROKE, NODE } from './brandMark';

/**
 * The brand mark, drawn with theme tokens so it follows the site's light/dark
 * appearance: indigo K for the system, orange node for the person.
 */
export default function Logo({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g transform={CENTER}>
        <path
          d={K_PATH}
          fill="none"
          className="stroke-system"
          strokeWidth={K_STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={NODE.cx} cy={NODE.cy} r={NODE.r} className="fill-accent" />
      </g>
    </svg>
  );
}
