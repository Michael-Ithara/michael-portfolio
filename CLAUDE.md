@AGENTS.md

# Michael Kihuyu — Portfolio: Source of Truth

This file is the design and content contract for this site. It exists because the
portfolio's job is to *demonstrate* ability, not just describe it — every visual and
copy decision should read as deliberate. When in doubt, favor what's written here over
whatever pattern already exists in a given file; existing code may predate this doc.

## 1. Background & positioning (locked)

This site was built through a discovery process (personal brand analysis → positioning
→ personas → IA → design principles → **content written in full before any code** →
only then design system and build). That ordering is the working method for this repo:
when adding a project or section, write the copy first, fully, before touching layout.

**Positioning statement (locked, don't rewrite without asking):**
> Michael Kihuyu builds AI-native systems that solve real operational problems —
> starting with the humans inside them. He's a product-thinking software engineer who
> enters every problem through the people experiencing it, maps it into its structural
> causes, and ships solutions that work at the edges other builders miss.

**Who it's for** — three personas the content is written toward: a **Founder with a
Problem**, an **International Connector**, a **Peer Builder** (fellow engineers/builders,
especially in AI/ML). Explicitly not optimizing for the political/government space, and
not optimizing for job security — the goal is visibility and identity.

**Why "Product Engineer," not "Software Engineer":** deliberate signal of stakeholder
thinking and outcome-ownership over pure technical execution. Locked, no hedging in copy.

**Real-world context:** Nairobi-based, freelances at Vula (African fintech, pre-investment
team), finishing a BSc in Business Information Technology at Strathmore University
(June 2026). Background spans Kenya and Estonia (two continents — keep it at two, not
three, in any copy). Career arc framed as Product Engineer → PM → VP Product.

## 2. Identity & voice

Copy rules for anything written in his voice (hero, about, case studies):
- **Never use em dashes.** Use a period, comma, colon, or a restructured sentence
  instead. This is a hard rule, not a style preference, apply it everywhere, including
  new copy in this file.
- First person, direct, no filler ("leverage", "seamless", "cutting-edge").
- Short declarative sentences mixed with one longer one per paragraph: the existing
  copy already does this; match its cadence.
- One italicized accent phrase per major heading (see `Hero.tsx`, `About.tsx`,
  `Contact.tsx` for the pattern: plain line, plain line, `<span style={fontStyle:
  italic, color: accent}>` line).
- Every case study ends on a concrete, falsifiable outcome (a number, a grade, a
  named result), never a vague "successfully delivered" close.
- **Bold key phrases in accent color** (`<strong className="text-accent
  font-semibold">`) where a sentence hits a genuinely load-bearing idea, one or two
  per paragraph at most. Overuse defeats the point; if every phrase is emphasized,
  none of them are.
- Confidence without hype: state what was built and what changed; don't editorialize
  about how impressive it is.
- Energetic, warm, "burst-pause-burst" personality — portfolio should read like a
  conversation, not a CV. Honesty over overclaiming (see how Second Brain is labeled
  "in active development" rather than finished).

## 3. Visual system (treat as law, not preference)

These are the actual tokens in `app/globals.css` — don't invent new colors, fonts, or
radii. If a value needs to change, change it here and in `globals.css` together.

**Palette**
| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF7F2` | page background |
| `--surface` | `#F0EBE3` | cards, badges |
| `--surface2` | `#E8E0D5` | nested surfaces (tags on cards) |
| `--text` | `#1A1A18` | primary text |
| `--text-muted` | `#6B6560` | body copy |
| `--text-faint` | `#A09890` | meta labels, footer links |
| `--accent` | `#C17A3A` | links, italic emphasis, CTAs |
| `--accent-light` | `#E8A96A` | accent on dark surfaces |
| `--accent-dark` | `#2C2C27` | Contact section background, primary CTA fill |
| `--border` | `#DDD5C8` | hairlines, card borders |

Palette was chosen deliberately against a prior dark portfolio that read as "vibe-coded
and cold" — the fix wasn't just going light, it was going warm. Five words that define
correct: **warm, energetic, easy on the eye, earthy, relaxing.** Michael's own projects
(Latitude59, Solarios, etc.) are allowed — expected — to have their own darker product
identities; the contrast between the light portfolio shell and dark project products
inside it is intentional, not an inconsistency to fix.

**Type**
- Display: `Fraunces` (serif) — all headings, section labels' numerals, italic accents.
- Body: `DM Sans` — everything else.
- Both loaded via Google Fonts `@import` in `globals.css` (not `next/font`) — this
  `@import` must stay the very first rule in the file, before `@import "tailwindcss"`;
  reordering it breaks the build (Tailwind v4 requirement, already hit once).
- Headline scale uses `clamp()` for fluid sizing (e.g. `clamp(40px, 6vw, 80px)` for
  H1) — keep using `clamp()`, not fixed breakpoints, for type.

**Recurring motifs** (already established, keep consistent):
- Uppercase, letter-spaced (`0.12em`), 11px, accent-colored "eyebrow" label above every
  section (`What I do`, `Selected work`, `About`, `Let's talk`).
- Pill shape (`border-radius: 999px`) for every button and badge.
- Card: `16px` radius, `1px solid var(--border)`, hover lifts `-6px` with a soft shadow
  and border turns accent-colored.
- Grain texture overlay (`body::before`) and `::selection` accent color — global
  atmosphere, don't remove.
- Fade-up entrance animation on hero elements (`.animate-fade-up` + `.delay-N`) — apply
  the same pattern to new above-the-fold content, don't introduce a different easing.

**Dark mode:** not implemented. If added, do it by swapping the `:root` CSS variable
values under a `prefers-color-scheme: dark` block — the whole site already reads
colors through variables, so this should not require touching component code.

**Motion system (locked, 2026-07-23):** two shared client components in
`app/components/`, used everywhere instead of one-off animation code:
- `Reveal.tsx` (`<Reveal items={...} />`): word-by-word or line-by-line typographic
  reveal, reserved for **headlines and standalone key lines only** (Hero H1, section
  H2s, case study H1s, the Capabilities lead line), never full body paragraphs, that
  would be exhausting on repeat visits. `items` is an array of words/nodes with `'\n'`
  entries for manual line breaks; pass `toWords('some string')` to split plain text.
  `triggerOnMount` (with `mountDelay`) is for above-the-fold content like the Hero;
  everything else defaults to firing once via `IntersectionObserver` on scroll into
  view.
- `FadeIn.tsx` (`<FadeIn>...</FadeIn>`): whole-block fade-up on scroll into view, used
  for section paragraphs, capability/project cards, meta grids, and stat tiles. Accepts
  `delay` (ms) for staggering a list of siblings (`delay={i * 90}`).
- Both respect `prefers-reduced-motion` via the global CSS guard in `globals.css`
  (forces near-zero transition/animation duration); don't add animation code that
  bypasses this.
- Don't add a third animation mechanism. If a new pattern seems needed, extend one of
  these two rather than hand-rolling `useState`/`IntersectionObserver` again.

**Background texture (locked, 2026-07-23):** three directions were mocked up and
compared (contour lines, scattered marks, woven chevron band); the combination
actually shipped is contour lines site-wide plus the woven band as a single accent,
not the scattered-marks option:
- `BackgroundContours.tsx`: a `position: fixed`, `z-index: -1`, `pointer-events: none`
  canvas mounted once in `layout.tsx`, drawing faint (≤8% opacity) topographic-style
  wavy lines in the accent color, regenerated on resize, with a slow CSS-only drift
  (`.bg-contours` in `globals.css`, respects the reduced-motion guard already in
  place). This is the constant site-wide atmosphere; don't add a second full-page
  texture on top of it.
- `WovenBand.tsx`: a thin abstracted chevron-pattern canvas (also accent-colored, low
  opacity), used **once**, above the Contact card. This is a single accent moment, not
  a repeatable pattern; don't scatter it across other sections without deciding that
  deliberately first.
- Both read the `--accent` CSS variable at draw time rather than hardcoding a color, so
  they'd automatically pick up a future dark-mode palette.
- The scattered-marks direction (sparse hand-drawn circles/plus-signs, notebook-margin
  style) was considered and intentionally not shipped, it read as the most
  "personality forward" of the three and risked feeling busy against the "warm, easy
  on the eye, relaxing" brief. Worth revisiting only if the site later wants to lean
  more handmade; don't add it as a default.

## 4. Component conventions

Tailwind v4 is installed and configured (`@theme` in `globals.css` maps every color
variable to a Tailwind token — there is no `tailwind.config.ts`, v4 doesn't use one).
**No component currently uses Tailwind classes** — everything is inline `style={}`
objects. This wasn't an oversight: the original build generated Tailwind-class code
first, then the shipped version diverged to inline styles during implementation. It's
now the single biggest lever for improving maintainability and is what's actively
causing the responsiveness gaps in §5.

**Rule for any new or edited component: use Tailwind utility classes bound to the
existing theme tokens (`bg-surface`, `text-muted`, `border-border`, `text-accent`,
etc.), not inline `style={}`.** Don't introduce a second styling system (CSS modules,
styled-components) — Tailwind is already wired to the right tokens, it's just unused.

Extract these shared primitives the first time you touch a file that needs them
(don't do a speculative refactor of everything at once):
- `<SectionLabel>` — the uppercase eyebrow span, repeated verbatim in `Capabilities`,
  `Work`, `About`, `Contact`.
- `<Pill>` / `<Button variant="filled" | "outline">` — the CTA pill button, currently
  hand-rolled with slightly different props in `Hero`, `Nav`, `Contact`, and both case
  study pages.
- `<Badge>` — the small rounded tag used for project tags and meta values.
- `<Card>` — the bordered/hover-lift container used by `Work` and `Capabilities`.

Client components that use event handlers (`onMouseEnter`, `onClick`, etc.) need
`'use client';` as the literal first line of the file, or Next.js throws a
server/client boundary error — already correctly done in `Nav.tsx`, `Capabilities.tsx`,
`Work.tsx`; keep doing it for any new interactive component.

## 5. Responsive requirements (currently broken — fix when touching these files)

Because everything is inline styles with no media queries, several layouts only work
above ~1000px wide:
- `About.tsx` — `gridTemplateColumns: '1fr 1fr'` has no mobile fallback; text and
  photos will squeeze into unreadable columns on phone widths. Needs to stack to a
  single column below `768px`.
- Case study meta grids (`latitude59`, `second-brain`, `solarios` pages) —
  `repeat(4, 1fr)` / `repeat(3, 1fr)` need to collapse to 2 columns (tablet) and 1
  column (mobile).
- `Nav.tsx` — link row + CTA button has no mobile treatment; needs a collapsed/hamburger
  state below `640px` (this is what `lucide-react` is likely for — it's installed but
  unused; use it for the menu icon rather than adding a new icon dependency).

When converting a section to Tailwind (§4), build the responsive variant in the same
pass using `sm:`/`md:`/`lg:` prefixes rather than leaving it inline-and-fixed.

## 6. Accessibility baseline

- Every hover-only interaction needs a keyboard-reachable equivalent. `Capabilities.tsx`
  currently sets border color via `onMouseEnter`/`onMouseLeave` inline handlers — this
  should be a CSS `:hover` (and `:focus-visible`) rule instead, matching how
  `.project-card:hover` is already done in `globals.css`.
- Add visible `:focus-visible` states for all links and buttons (none currently defined
  anywhere) — use the accent color, consistent with `::selection`.
- Keep heading hierarchy real (one `h1` per page, `h2` per section, `h3` per
  card/project) — this already mostly holds, preserve it when refactoring.

## 7. Case study template (for every project under `app/work/[slug]`)

Every case study is a single-file page and follows this exact section order — keep new
ones consistent so the site reads as one system:
1. Back link to `/#work`.
2. Eyebrow label (category · location/context · year).
3. `h1` title with italic accent word.
4. One-sentence subline stating the tension/hook.
5. Meta grid (Role, Team/Stack, Timeline/Status, key number) — 3 or 4 items.
6. Body sections, always in this order: **The problem** → **What was built** →
   **The process** (optional if solo) → **The outcome**. Each ends with a full-width
   `1px` divider.
7. Stats strip (2–3 large numbers) — optional, used when the project has countable
   outcomes (Latitude59 has one, Second Brain/Solarios don't; don't force it).
8. Live link CTA, if the project is deployed.
9. "Next project" link at the bottom, forming a chain across all case studies (last
   one links back to `/#work` instead of forward).

**Implementation pattern (locked, 2026-07-23):** the `h1` uses `Reveal`; the meta grid,
each body section, and the stats strip are each wrapped in `FadeIn`. Body paragraphs are
authored as `<Fragment>` nodes (not plain strings) so key phrases can be wrapped in
`<strong className="text-accent font-semibold">`, one or two per paragraph, following
the emphasis rule in §2. See `app/work/latitude59/page.tsx` as the reference
implementation.

**Missing today, required for any new/edited case study page:** a per-route
`export const metadata: Metadata` (title + description, ideally `openGraph.images`)
so shared links render properly — currently only `app/layout.tsx` sets metadata, and
it's the same for every route.

New project checklist before adding an entry to `Work.tsx`'s `projects` array and
creating its route:
- [ ] One-sentence `summary` framed as a tension (mirror the existing three).
- [ ] 2–3 `tags` describing technique/domain, not just tech names.
- [ ] `liveUrl` if deployed, else `null` (case study still required).
- [ ] Full case study page following the template above, including metadata export.

## 8. Known open work (verified against current code, 2026-07-23)

- **Latitude59 has zero visual assets — not placeholders, nothing.** `app/work/latitude59/page.tsx`
  is pure text; `public/` contains only `michael-about.jpg` and `michael-building.jpg`.
  Five real product images were originally hoped for (hero shot, speaker portal,
  organiser dashboard, ops dashboard, sequence diagram) — **these are confidential
  client assets and are permanently off the table, not just currently missing.** Don't
  suggest sourcing or waiting on them. **Decision (2026-07-23):** build an original,
  abstracted illustration instead — see `app/work/latitude59/PipelineDiagram.tsx`,
  built entirely from the page's own public copy (the speaker/organiser feedback loop,
  the 9-phase pipeline, the named services), no real UI chrome or client data. This is
  the model to follow if any other case study ever needs the same treatment.
- Per-route metadata for case study pages (see §7) is still missing.
- Responsive layout fixes (§5) are still outstanding.
- Custom domain not yet configured — site is still on the default `michael-kihuyu.vercel.app`.
  This is a Vercel/DNS task, not a repo change.
- LinkedIn profile doesn't yet link to the portfolio — outside repo scope, just a
  reminder if it comes up.

## 9. What NOT to change without asking

- The positioning statement (§1) and the color palette, font pairing, and grain/animation
  atmosphere (§3) — these are the brand, not incidental styling.
- The case-study narrative structure (§7) — consistency across projects is the point.
- `AGENTS.md`'s instructions are separate from this doc and may reference paths/behavior
  that don't hold up (e.g. a `node_modules/next/dist/docs/` guide that doesn't exist in
  this environment) — don't treat unverifiable claims there as fact; verify against the
  actual installed `next` version before relying on API specifics.
