# PERSONAL WEBSITE DESIGN REVAMP

## Scope
This is a **visual/component-level redesign only**. Keep existing routes and overall page structure (About Me, Career Journey, Personal Projects) as they are — do not restructure navigation or routing. Follow the three attached screenshots as the general visual reference for each corresponding page.

Remove old design tokens, colors, and fonts that are no longer used once the new system is in place — don't leave dead CSS variables, unused Tailwind config values, or orphaned styles from the previous design.

---

## Global Design System

**Background**
- All pages use `personal_website_bg_image.png` as the background.
- Asset path: `/Users/shuyanyan/Downloads/personal-website/docs/assets/personal_website_bg_image.png`

**Layout pattern**
- A main container holds most page content, positioned centrally (or near-centrally).
- Additional clickable/interactive elements live outside that main container, arranged loosely around it.

**Color system**
| Name | Hex | Usage |
|---|---|---|
| Red (primary) | `#CD4B2B` | Borders, accents, subtitle text |
| Grey | `#E4E3E3` | Background pill/bar behind section headers or small text callouts (e.g. the "hello, welcome to my site :)" bar under the About card, the background behind the "MY PERSONAL PROJECTS" header on the Projects page). Not used as a border or main container fill. |
| Off-white | `#FFFCF2` | Container fill color (main card, calendar body, laptop screen area) |
| Brown | `#604A3E` | Fill color specifically for the irregular clickable action shapes (Resume, LinkedIn, Chat) — dark brown fill, `#CD4B2B` border, white icon/text on top |

**Note on brown text variants (`#572C25` / `#A55343` / `#614943`):** these are separate from the `#604A3E` container brown above — they're used for text, not fills:
- `#572C25` and `#A55343` — the two-tone "SHUYAN YAN" title (first name and last name each get a different shade, similar to how the old design used two different accent colors for "Shuyan" / "Yan")
- `#614943` — body/intro paragraph text color

**Typography system**
| Font | Usage | Size/weight |
|---|---|---|
| Freeman | Clickable button text | `[FILL IN if known]` |
| Space Mono | Container header/subtitle | `[FILL IN if known]` |
| Fredericka the Great | Big title | `[FILL IN if known]` |
| Hanken Grotesk | Body text (smaller text) | `[FILL IN if known]` |
| Advent Pro | Body text — dates specifically | `[FILL IN if known]` |

If sizes/weights aren't specified, use your best judgment based on the screenshots, but flag any assumptions you make so they can be corrected.

**Asset folder**
All SVG/PNG assets referenced below live at: `/Users/shuyanyan/Downloads/personal-website/docs/assets`

---

## Cross-page navigation pattern
Based on comparing the About/Career Journey/Personal Projects mockups: each page shows the *other* pages as outside clickable nav elements, while the current page's own content becomes the main container. For example:
- On **About Me**: the calendar (→ Career Journey) and laptop (→ Personal Projects) appear as outside nav buttons; the intro card is the main container.
- On **Career Journey**: the calendar itself becomes the main container (holding the actual timeline content); "About Me" and "My Projects" appear as outside nav buttons instead.
- On **Personal Projects**: an off-white rounded-rect card becomes the main container (holding project previews); "My Career Journeys" (calendar) and "About Me" appear as outside nav buttons instead.
- Resume, LinkedIn, and Chat (irregular brown shapes) appear as outside nav elements on every page, consistently.

Build these as reusable components (`<CalendarCard>`, `<LaptopButton>`, `<IntroCard>`, `<IrregularActionShape>`) that can either render as a small nav button (linking elsewhere) or as the full main container (holding that page's content), depending on which page is active.

---

## Page 1: About Me

### 1. Intro card (main container)
- Single rectangular container, rounded corners. No stickers or decorative accessories attached to it.
- Border color: `#CD4B2B`
- Fill color: `#FFFCF2`
- Subtitle: remove "hey there" → replace with "ABOUT ME"
  - Font: Space Mono
  - Color: `#CD4B2B`
- Title: "SHUYAN YAN"
  - Font: Fredericka the Great
  - Colors: `#572C25` and `#A55343` (specify which word/letters use which — `[FILL IN if there's a specific split, e.g. first name vs last name]`)
- Intro paragraph ("I am an AI product manager…")
  - Font: Hanken Grotesk
  - Color: `#614943`

### 2. Elements outside the card

**a. Career Journey button (calendar-style)**
Links to the Career Journey page.
- Top strip: use `calendardecor.svg` (may be scaled down as needed) — fixed-height decorative asset, does not stretch.
- Body: real CSS div, not SVG.
  - `border-radius` on bottom corners only; straight/no radius where it meets the top strip.
  - Border color: `#CD4B2B`
  - Fill color: `#FFFCF2`
  - Must grow vertically with content, no distortion (this is why the body is CSS, not part of the SVG).
- Button label text: "My career journey"

**b. Personal Projects button (laptop-style)**
Links to the Personal Projects page.
- Use `laptopicon.svg` as the base shape.
- Add a text layer "My personal projects" positioned in the laptop's blank/screen area.
- Entire shape is clickable.

**c. Irregular-shape action buttons (resume / LinkedIn / chat)**
Three separate instances of the same base asset, `irregularshapes.svg`, each resized/rotated/positioned independently so they don't look identical or repetitive.
- Border color: `#CD4B2B`
- Fill color: `#604A3E` (brown)
- Each instance is flexible — feel free to resize the SVG per instance.
- Each has its own icon + label on top:
  - Resume → `Resumeicon.svg` + label, triggers resume download
  - LinkedIn → `linkedinlogo.svg` + label, links to LinkedIn profile
  - Chat → `chatlogo.svg` + label, opens chat
- These three icons should be **removed from inside the intro card** — they now live only as these three outside elements.

---

## Page 2: Career Journey

**Main container**: the calendar/spiral-notebook shape becomes the full main container on this page (not just a small nav button as it is on the About page). Same construction as described in the About page calendar button — fixed-height decorative top strip (`calendardecor.svg`) + CSS div body with rounded bottom corners, `#CD4B2B` border, `#FFFCF2` fill — just sized to hold the full page content instead of a short label.

**Header**: "MY JOURNEYS" — Space Mono, red (`#CD4B2B`), left-aligned inside the container, with a horizontal rule beneath it (consistent with the notepad-style top rule already used elsewhere).

**Timeline content** (reuse the same content/structure as the old "Where I've worked" page):
- Entries grouped by date range, most recent first: e.g. `2025 – Now`, `2024 – 2025`, `Earlier`, `Education`
- Each entry: role/title (bold), company/org, location — separated by a divider character (e.g. `|`), with company and location in a lighter/muted weight or accent color
- Short description paragraph beneath each role, in body font (Hanken Grotesk)
- Optional "recent launch & press" callout box for the most recent role (light background pill with a link out)
- Internship entries shown as a row of rounded pill tags, not full entries (e.g. "Google ChromeOS," "ByteDance," "Microsoft," "Coding it Forward")
- Education entry at the bottom: school name (bold), degree, major, honors — same visual pattern as role entries
- Dates use **Advent Pro** per the type system above

**Outside nav elements**: Resume, About Me, My Projects (laptop), LinkedIn, Let's Chat — per the cross-page nav pattern above.

## Page 3: Personal Projects

**Main container**: off-white rounded rectangle, same base style as the About page intro card (rounded corners, `#CD4B2B` border, `#FFFCF2` fill) — no calendar or laptop framing, just the plain card, sized larger to hold the project grid.

**Header**: "MY PERSONAL PROJECTS" in red (`#CD4B2B`), sitting on a grey (`#E4E3E3`) pill/bar background near the top of the container.

**Project preview screenshots — path change note**
The project screenshots (Health Journal, Ordering App, Music Map, AI Stylist/journal app, etc.) previously lived directly in `/assets` but have since been moved into a subfolder: `/Users/shuyanyan/Downloads/personal-website/docs/assets/personal-projects-screenshots`. If any existing code already references these images at their old path, search the codebase for the old filenames and update those references to the new path before/while building this page — don't assume old references still resolve.

**Project previews**: reuse the same project content as the old "Things I've Built" page (Health Journal, Ordering App, Music Map, AI Stylist/journal app), but restyle each preview as a small browser/app-window mockup — a bordered rectangle showing a miniature screenshot of the actual project UI — rather than the old polaroid/photo-frame treatment. Arranged in a loose, slightly-overlapping grid inside the main container (not evenly gridded — natural scattered placement per the screenshot).
- `[each preview should keep the category tags/status labels from the old design — e.g. "SHIPPED," "WIP," "DESIGN/PROTOTYPE" — or drop them in the new version]`
- ` each project preview should be clickable/link out to a live project or case study page similar to the old design]`

**Outside nav elements**: Resume, My Career Journeys (calendar), About Me, Chat with me — per the cross-page nav pattern above.

---
