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

**Real-world context:** Nairobi-based. Forward Deployed Engineer at Vula, which helps
SMEs and financial institutions close Africa's $400Bn SME funding gap; he embeds with
funding partners and builds the application-to-term-sheet pipelines (site copy says
"We're closing...", written as part of Vula, not as a contractor). Vula and Anzisha are
never a case study; Vula only appears as the "Now" tile in About. Currently building
Onboarder (https://onboarder.work/), a **team product with his cofounders**: always say
"we" / "with my cofounders", never imply he built it alone. It is the productised
version of the Latitude59 speaker portal; the Hero status pill says "Building
Onboarder". Graduated in 2026 with a BSc in Business Information Technology from
Strathmore University. No testimonials yet; don't add a testimonials section until
Michael has one. Background spans Kenya and Estonia (two continents — keep it at two, not
three, in any copy). Career arc framed as Product Engineer → PM → VP Product.

## 2. Identity & voice

Copy rules for anything written in his voice (hero, about, case studies):
- **Never use em dashes.** Use a period, comma, colon, or a restructured sentence
  instead. This is a hard rule, not a style preference, apply it everywhere, including
  new copy in this file.
- First person, direct, no filler ("leverage", "seamless", "cutting-edge").
- Short declarative sentences mixed with one longer one per paragraph: the existing
  copy already does this; match its cadence.
- One accent phrase per major heading, shown by colour, not italics. The pattern is a
  grey lead-in (`text-faint`) followed by the statement in `text-text`, with at most
  one short phrase in an accent colour: `text-accent` (orange) when the phrase is about
  the person, `text-system` (indigo) when it names something built (see `Hero.tsx`,
  `MethodStory.tsx`, `Onboarder.tsx`, and the `accent()` helper for case study h1s).
  Never both accents in one heading.
- Every case study ends on a concrete, falsifiable outcome (a number, a grade, a
  named result), never a vague "successfully delivered" close.
- **Bold key phrases in the primary text colour** (`<strong className="font-semibold
  text-text">` inside a `text-muted` paragraph; `text-on-ink` on dark tiles) where a
  sentence hits a genuinely load-bearing idea, one or two per paragraph at most. This
  is how Apple's product pages emphasise; the accent colour is not used for body
  emphasis. Overuse defeats the point; if every phrase is emphasized, none of them are.
- Confidence without hype: state what was built and what changed; don't editorialize
  about how impressive it is.
- Energetic, warm, "burst-pause-burst" personality — portfolio should read like a
  conversation, not a CV. Honesty over overclaiming (see how Second Brain is labeled
  "in active development" rather than finished).

## 3. Visual system (treat as law, not preference)

**Redesign (2026-10-29).** The site was rebuilt against the apple-design skill
(github.com/dickwu/apple-design-skill). The previous system (cream `#FAF7F2`, Fraunces
serif, copper `#C17A3A`, grain overlay, contour canvas) is exactly the look that skill
names as the most common template for generated interfaces, which is why it read as
"made by an AI tool". The new system is Apple-neutral: grey page, white tiles, system
type, two accents with strict meanings (below), and dark product tiles for each project.
The GitHub history has the old version.

**Two accents, two meanings (decided with Michael, 2026-10-29).** The palette encodes
the positioning: he starts with the person and builds AI-native systems.
- **Orange = the human side.** The person, the problem, the structure of the problem,
  the outcome for people, personal moments, and the brand voice (section eyebrows,
  Hero "the person", the status dot, About tiles, Contact heading, Solarios' sun).
- **Indigo = the system side.** What was built, AI, and anything you interact with:
  links and chevron links, focus ring, text selection, case study h1 product names,
  Onboarder's name and flow, the Latitude59 pipeline, the Second Brain demo, "The
  system" and "The edges" beat labels.
- The method beats walk the colours: person and structure orange, system and edges
  indigo, outcome back to orange. The home story does the same (inbox and loop orange,
  pipeline indigo, 80 dots orange). It starts and ends with the person.
- Rules: never blend them in a gradient (orange to purple is the generic "AI startup"
  look); never give them equal weight on one screen (orange is the brand, roughly 70%;
  indigo is the counterpoint); never both in one heading; when adding anything, ask
  "is this human or system?" and pick one.

These are the actual tokens in `app/globals.css`. Don't invent new colors, fonts, or
radii. If a value needs to change, change it here and in `globals.css` together.

**Palette** (contrast is WCAG against `--bg` unless noted)
| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F5F5F7` | `#000000` | page background |
| `--surface` | `#FFFFFF` | `#161617` | tiles and cards |
| `--surface2` | `#F5F5F7` | `#2C2C2E` | nested fills (chips inside tiles) |
| `--text` | `#1D1D1F` (15.5:1) | `#F5F5F7` | primary text, filled CTA |
| `--text-muted` | `#6E6E73` (4.7:1) | `#A1A1A6` | body copy, small labels |
| `--text-faint` | `#86868B` (3.3:1) | `#86868B` | grey lead-in words in large headings **only** (24px+) |
| `--accent` | `#E35500` (3.5:1) | `#FF8A3D` | human accent: large text, icons, fills |
| `--accent-ink` | `#B64400` (5.1:1) | `#FF9F5A` | human accent for small text: eyebrows, beat labels |
| `--system` | `#5856D6` (5.2:1, 5.7:1 on white) | `#8E8CFF` (6.3:1 on `--surface`) | system accent: links, focus ring, selection, built things; safe at any size |
| `--system-on-ink` | `#9D9BFF` (6.9:1+ on every dark tile) | same | system accent on dark tiles: links, demo highlights, focus ring |
| `--border` | `#D2D2D7` | `#3A3A3C` | hairlines and dividers |
| `--ink` | `#1D1D1F` | `#1C1C1E` | Contact tile background |
| `--on-ink` / `--on-ink-muted` / `--accent-on-ink` | `#F5F5F7` / `#A1A1A6` / `#FF8A3D` | same | text on any dark tile |

Project tiles keep a fixed dark identity in both schemes (`projectTheme` in
`ProjectArt.tsx`): Latitude59 `#0E1A2B`, Second Brain `#15121D`, Solarios
`#1C1409`. The light shell with dark product tiles inside it is intentional.

**Type**
- One family. `-apple-system` first, so Apple devices get SF Pro; everyone else gets
  Inter (with the `opsz` axis) via `next/font/google` in `layout.tsx`. Don't use a
  Google Fonts `@import` in CSS: the build silently drops it (found 2026-10-29, which
  means the old Fraunces/DM Sans import never shipped either).
- Hierarchy comes from size, weight (600 for headings), tight negative tracking
  (`-0.03em` to `-0.04em` on display sizes), and grey/black colour contrast. No
  italics, no serif.
- Headline scale uses `clamp()` for fluid sizing; keep using it for type.
- Body copy 17px minimum on the home page, 19px in case studies. Never below 13px.

**Recurring motifs** (keep consistent):
- `<SectionLabel>`: sentence-case, 15px semibold, `text-accent-ink` eyebrow above each
  section heading. No uppercase tracking.
- Pill shape for every button and badge. Buttons keep a 44px minimum height.
- Tiles: `rounded-tile` (28px), `bg-surface` on the grey page, no border. Nested
  surfaces use `rounded-card` (20px).
- Project tiles use `.tile-lift` (lift on hover and `:focus-within`, art scales slightly).
- Apple-style text links: `<ChevronLink>` ("Get in touch ›").
- Frosted-glass nav (`.glass`) is the only translucent surface. Glass belongs to the
  floating functional layer, never to content. It falls back to an opaque background
  under `prefers-reduced-transparency` and `prefers-contrast: more`.
- No grain, no background canvas, no decorative texture. The signature element is the
  **latitude tile** in `AtAGlance.tsx`, rendered inside About (Nairobi 1°S, Tallinn 59°N, the parallel the
  Latitude59 conference is named after). Boldness is spent there; keep everything
  around it quiet.
- Project art (`ProjectArt.tsx`): abstract SVGs built only from each case study's
  public copy. Same rule as the Latitude59 decision in §8.

**Brand mark (chosen by Michael, 2026-10-29).** A monoline K (indigo, the system)
whose upper arm reaches into an overlapping orange node (the person): the two-accent
story in one letter. Explored through two rounds of Gemini concepts and a 16px squint
test; the floating node, the K° ring, the M ("Mi" reads as Xiaomi) and the tile-only
favicon were rejected.
- Geometry lives once in `app/components/brandMark.ts` (64-unit grid). `Logo.tsx`
  draws it with theme tokens (nav, 26px, the only place the logo appears on the
  page; HIG `branding.md` warns against repeating it).
- Favicon: `app/icon.svg`, a transparent mark with a `prefers-color-scheme` block that
  swaps to `#8E8CFF` on dark tabs; `app/favicon.ico` (16/32/48 PNG-in-ICO) for Safari
  and older browsers. Both are static copies of the geometry: regenerate them if
  `brandMark.ts` changes.
- iPhone home-screen icon: `app/apple-icon.tsx` generates a 180px full-bleed indigo
  square with a white K and the orange node. No corner radius: iOS applies it (HIG
  `app-icons.md`, "Icon shape").
- Never redraw the K in another font, add a wordmark inside the icon, or blend the
  node into the K with a gradient.

**Dark mode:** implemented by swapping `:root` values, in two identical blocks: under
`prefers-color-scheme: dark` (unless `data-theme="light"`), and under
`:root[data-theme="dark"]`. Keep them in sync. `AppearanceSwitcher.tsx` in the footer
offers Light / Dark / Auto, the way developer.apple.com does; Auto is the default and
follows the system (HIG `dark-mode.md` warns against app-only appearance settings, so
the system stays in charge unless the visitor overrides it). The choice is stored in
`localStorage` under `appearance` and applied before paint by the inline script in
`layout.tsx`.

**Motion system:** two shared client components in `app/components/`, used everywhere
instead of one-off animation code. Both use the `--ease-apple` curve
(`cubic-bezier(0.28, 0.11, 0.32, 1)`).
- `Reveal.tsx` (`<Reveal items={...} />`): word-by-word typographic reveal, reserved
  for **headlines only** (Hero H1, section H2s, case study H1s). `items` is an array of
  words/nodes with `'\n'` entries for manual line breaks; pass `toWords('some string')`
  to split plain text. Keep a multi-word accent phrase as one node with
  `whitespace-nowrap` so it never splits across lines. `triggerOnMount` is for
  above-the-fold content; everything else fires once on scroll into view.
- `FadeIn.tsx` (`<FadeIn>...</FadeIn>`): whole-block fade-up on scroll into view for
  paragraphs, tiles, meta grids, and stat tiles. Accepts `delay` (ms) for staggering.
- `.animate-fade-up` + `.delay-N` for above-the-fold blocks that aren't headlines.
- All of it respects `prefers-reduced-motion` via the global guard in `globals.css`.
- Don't add a third animation mechanism.

**Home page order (visual storytelling, 2026-10-29).** One story top to bottom, each
section answering the question the previous one raises:
1. `Hero`: who, plus what's live now (status pill).
2. `MethodStory` (`#work`): *how* he works, shown not claimed. The Latitude59 story in
   the method's beats (person, structure, system, outcome). Replaced the old
   Capabilities cards, whose claims the story now proves.
3. `Onboarder`: what that first version became ("Every conference has this problem.
   So we built Onboarder."), using only public facts from onboarder.work.
4. `Work` (`#more-work`): the same method in other domains (Second Brain, Solarios).
5. `About`: the person, with the latitude / Vula / education tiles.
6. `Contact`: three doors, one per persona (problem, builder, connector).

**Interactive elements (exactly three; don't add more without deciding it).**
- `MethodStory`: scroll-told story. On `md+` a sticky visual (`StoryVisuals.tsx`)
  crossfades as each step crosses the middle of the viewport; inactive step text dims.
  Below `md` each step carries its own static visual, so nothing depends on scroll.
- `VectorDemo.tsx` (Second Brain): a segmented control (native radios, short noun
  labels, `segmented-controls.md`) picks a question; the three nearest notes light up as
  citations. Note titles are illustrative and labelled as such.
- `EnergyDemo.tsx` (Solarios): a time-of-day slider (native `range`, min on the leading
  side, exact time shown beside it and in `aria-valuetext`, `sliders.md`) drives the
  recommendation text. Captioned "Illustration of a typical day, not real data."
Demos are always labelled as illustrations, built from the case study's own copy, and
use native inputs so keyboard and screen readers work for free. They appear on the
home tiles and as the case study header art.

## 4. Component conventions

Tailwind v4 (`@theme` in `globals.css` maps every variable to a utility: `bg-surface`,
`text-muted`, `text-accent-ink`, `bg-ink`, `text-on-ink`, `rounded-tile`,
`ease-apple`, etc. There is no `tailwind.config.ts`). **Every component uses Tailwind
classes bound to these tokens, not inline `style={}`.** The only inline styles left are
the computed per-word transitions in `Reveal`/`FadeIn` and the per-bar opacity in
`PipelineDiagram`. Don't introduce a second styling system.

Shared primitives live in `app/components/ui.tsx`: `SectionLabel`, `Button`
(`filled | outline | light | outline-light`), `ChevronLink`, `Badge`, `Card`. Case
study building blocks live in `app/work/CaseStudy.tsx`: `CaseHeader`, `MetaGrid`,
`CaseBody`, `CaseSection`, `StatStrip`, `LiveLink`, `NextProject`, plus the
`strong()` and `accent()` helpers. Use them instead of hand-rolling.

`Nav` and `Footer` are mounted once in `layout.tsx`, so they appear on every route.
Nav links use `/#section` so they work from case study pages.

Client components that use state or event handlers need `'use client';` as the first
line (`Nav`, `Reveal`, `FadeIn`, `MethodStory`, `VectorDemo`, `EnergyDemo`,
`AppearanceSwitcher`). Everything else stays a server component.

Icons: `lucide-react` only, `strokeWidth` 1.75 at 28 to 32px, `aria-hidden` when
decorative. No numbered 01/02/03 markers on content that isn't a real sequence.

## 5. Responsive requirements

Fixed in the 2026-10-29 redesign: About stacks below `md`, case study meta grids go
1, then 2, then 3 or 4 columns, and the nav collapses to a hamburger (lucide
`Menu`/`X`) below `sm` with `aria-expanded` and Escape to close. Every new layout is
built mobile-first with `sm:`/`md:`/`lg:` prefixes and checked at 390px wide.

## 6. Accessibility baseline

- Hover states always have a keyboard equivalent (`:focus-within` on tiles).
- Global `:focus-visible` ring in `--system` (indigo), switching to `--system-on-ink`
  inside any `.text-on-ink` dark tile; don't remove it.
- Text colour pairs must meet the contrast figures in the palette table; `text-faint`
  and `text-accent` are for large text only.
- The Hero H1 renders a `sr-only` sentence and hides the animated word spans from
  screen readers; keep that pattern for any heading that mixes images into text.
- Keep heading hierarchy real (one `h1` per page, `h2` per section, `h3` per
  card/project). Sections without a visible heading get an `sr-only` `h2`.

## 7. Case study template (for every project under `app/work/[slug]`)

Every case study is a single-file page and follows this exact section order — keep new
ones consistent so the site reads as one system:
1. Back link to `/#work`.
2. Eyebrow label (category · location/context · year).
3. `h1` title with one accent word or phrase in `text-accent` (via `accent()`).
4. One-sentence subline stating the tension/hook.
5. Meta grid (Role, Team/Stack, Timeline/Status, key number) — 3 or 4 items.
6. Body sections told in the **method beats** (approved by Michael 2026-10-29), in
   this order, each labelled "N · Beat" above a project-specific `h2`:
   **The person** (who was stuck, one concrete human) → **The structure** (why it
   kept happening) → **The system** (what was built; may span two sections, e.g.
   "What we built" + "How we worked") → **The edges** (the cases other builders miss)
   → **The outcome** (falsifiable result). Pass `beat` to `CaseSection`; the labels
   come from `BEATS` in `CaseStudy.tsx`. Each section ends with a full-width `1px`
   divider.
7. Stats strip (2–3 large numbers) — optional, used when the project has countable
   outcomes (Latitude59 has one, Second Brain/Solarios don't; don't force it).
8. Live link CTA, if the project is deployed.
9. "Next project" link at the bottom, forming a chain across all case studies (last
   one links back to `/#work` instead of forward).

**Implementation pattern:** pages compose the parts in `app/work/CaseStudy.tsx`.
`CaseHeader` renders the back link, eyebrow, `Reveal` h1, subline, and the project's
dark art tile; `MetaGrid`, `CaseSection`, and `StatStrip` wrap themselves in
`FadeIn`. Body paragraphs are authored as `<Fragment>` nodes so key phrases can use
the `strong()` helper, one or two per paragraph (§2). See
`app/work/latitude59/page.tsx` as the reference implementation.

Every case study page exports `metadata` (title, description, `openGraph`). The
root layout sets the `%s · Michael Kihuyu` title template and the default OG image.

New project checklist before adding an entry to `Work.tsx`'s `projects` array (the
"More work" tiles; Latitude59 lives in `MethodStory` instead) and creating its route:
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
- Per-route metadata and the responsive fixes were done in the 2026-10-29 redesign.
- Copy written on 2026-10-29 that still needs Michael's sign-off: the Vula tile, the
  MethodStory step text, the Onboarder section, the "Same method. Different domains."
  heading, the contact doors, the demo questions/note titles, and the new sentences in
  the case studies (Latitude59 "The edges" section and the Onboarder line in "What
  changed"; Second Brain's first "The edges" sentence). Everything else in the case
  studies is his original copy, re-sorted into the beats.
- Custom domain not yet configured — site is still on the default `michael-kihuyu.vercel.app`.
  This is a Vercel/DNS task, not a repo change.
- LinkedIn profile doesn't yet link to the portfolio — outside repo scope, just a
  reminder if it comes up.

## 9. What NOT to change without asking

- The positioning statement (§1) and the visual system in §3 (palette, single type
  family, accent budget, signature latitude tile). These are the brand now.
- The case-study narrative structure (§7). Consistency across projects is the point.
- `AGENTS.md` says to read `node_modules/next/dist/docs/` before writing Next code.
  Those docs do exist once `npm install` has run (Next 16.2.7); check them for API
  specifics, e.g. `next/image` uses `preload` (not the deprecated `priority`).
