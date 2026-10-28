import { ImageResponse } from 'next/og';
import { CENTER, K_PATH, K_STROKE, LOGO_COLORS, NODE } from './components/brandMark';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/*
 * iPhone home-screen icon. Apple asks for a full-bleed square and applies the
 * rounded corners itself (HIG app-icons.md, "Icon shape"), so no radius here.
 * White K on indigo, orange node kept, mark scaled into a comfortable safe area.
 */
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${LOGO_COLORS.system}"/>
  <g transform="translate(32 32) scale(0.66) translate(-32 -32)">
    <g transform="${CENTER}">
      <path d="${K_PATH}" fill="none" stroke="${LOGO_COLORS.onTile}" stroke-width="${K_STROKE}" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${NODE.cx}" cy="${NODE.cy}" r="${NODE.r}" fill="${LOGO_COLORS.person}"/>
    </g>
  </g>
</svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`}
        width={size.width}
        height={size.height}
        alt=""
      />
    ),
    { ...size }
  );
}
