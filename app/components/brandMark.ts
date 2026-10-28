/*
 * The brand mark: a monoline K (the system) whose upper arm reaches into an
 * orange node (the person). One geometry on a 64-unit grid, shared by the nav
 * logo and the generated Apple touch icon. app/icon.svg and app/favicon.ico are
 * static copies of the same shapes; regenerate them if anything here changes.
 */

/** Stem, upper arm, lower leg. Drawn as one round-capped stroke. */
export const K_PATH = 'M20 14 V50 M20 36 L38 18 M27 30 L42 50';
export const K_STROKE = 10;

/** The person: overlaps the end of the upper arm. */
export const NODE = { cx: 43, cy: 14, r: 11 };

/** Optical centring: the mark's bounds are offset, this puts them in the middle. */
export const CENTER = 'translate(-2.5 3)';

/** Hex values for contexts without CSS variables (generated images). */
export const LOGO_COLORS = {
  system: '#5856D6',
  person: '#E35500',
  onTile: '#FFFFFF',
};
