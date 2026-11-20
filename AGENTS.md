# Working on this site

This is a React site built with Create React App. Component styles use SCSS modules. Shared typography, colors, spacing, and page layouts live in `src/styles/`.

## Layout

The site puts a few bold, free elements on a strict grid: a leaning name, thick black bars, and a round portrait. Everything else is left-aligned type on shared columns with clear hierarchy and space between sections. Explain a layout through its column spans and reading order. Avoid claims that a decorative choice is required by a canonical design rule.

### Shell and columns

- Above 736px the shell has 14 equal columns with 24px gutters: two rail columns, then the 12 content columns. Use the `shell-grid` mixin for anything that must share those tracks. Every column number below refers to the 12 content columns unless it says rail.
- At 736px and below there is no rail: use four columns with 16px gutters. Read shell padding and the 1280px shell limit from the theme tokens.
- Align major elements to column tracks: navigation labels, headings, text blocks, lists, controls, and the portrait frame. Use `subgrid` for nested layouts that share those tracks. Fixed date widths and flex gaps must not create a second, drifting grid.
- Start ordinary page content at column 4. At widths up to 980px, start it at column 3. On mobile, use the full four-column grid. The homepage opening and the Notice Board start at column 1.
- Limit reading width inside the allocated span: about 65ch for the introduction, 68ch for prose pages, 80ch for notices, and 60ch for post excerpts. Text can end before the column boundary. It must start on the shared text axis.
- Minor elements can use local spacing: inline icons, link arrows, and publication resource links. Anchor their group to the containing text or grid edge; the homepage contact icons are 48px square tiles in the bar colour with the glyph knocked out, one per column, with their left edges on the lines of columns 6, 7, 8, and 9 (columns 1–4 on mobile). Do not classify a heading, content panel, or navigation group as minor to excuse drift.

### Rail

- The rail is fixed and fills the two rail columns above 736px. It holds the site name and a vertical bar at its right edge.
- The name is set lowercase, leans 6 degrees off vertical, and reads upward. `useRailName` sizes it from the real letter shapes: the first letter's ascender sits on the shell's left edge, the last letter's descender touches the bar, and the top sits on the first content module line. Do not give it a fixed font size.
- The name is the link to the homepage. On hover or keyboard focus its letters slide 8px to the left, away from the bar, and slide back afterwards. The link's own box stays still so the pointer cannot lose the hover. Do not add a separate home label.
- The bar is half a module wide. It carries the email address, the contact links, and the CV link, reading upward. Their lower end sits on the fifteenth module line, or one module above the window's bottom edge in shorter windows.
- The name is the only tilted element. Keep everything else, including the signature, square to the grid.

### Navigation

- Above 736px the navigation is a left-aligned pyramid of four bars, one per page, each half a module tall. Every bar starts at the rail's bar and is two columns shorter than the bar above. A half-pixel hairline in the page background colour separates the layers, like a cut between them; it is drawn inside the top edge of each lower bar, so it is as long as that bar and adds no height.
- Labels sit at the right end of their bars. The first page has the bottom, shortest bar and the last page the top, longest one, so the labels read left to right in page order with their right edges on columns 5, 7, 9, and 11. Each bar runs one gutter past its label, so the top bar meets the theme switch.
- The theme switch fills column 12 and is one module tall. Its icon is a 24px disc split into a light and a dark half. The disc turns 180 degrees when the theme changes, so the dark half leads in the dark theme. Its ring follows the theme: light in the light theme and dark in the dark theme.
- Above 736px the header has no background. Only the bars and the theme switch cover the page, so content scrolls behind the pyramid and shows in its open steps. Pointer events pass through the open steps to the content.
- Switch to the mobile menu at 736px. The mobile header shows the brand and the menu button; the CV link lives in the mobile menu there.

### Lists and dates

- The Notice Board title is a one-module black bar that joins the rail's bar. It is the strong divider above the list. Dates sit in columns 1–2 and text in columns 3–11; at widths up to 980px dates take columns 1–3 and text columns 4–11. Leave column 12 empty. On mobile the date sits above the text and both span all four columns.
- Notice dates show the year, then the month's three-letter name in a 40px dot. The year starts on column 1's line and the dot on column 2's line; at widths up to 980px the dot starts on column 3's line. Keep dates on one line. In post lists, reserve two columns for dates at widths from 737px to 980px. Check the gap before the description and its hover bar rather than allowing the date to crowd them.
- Bars that carry a label start one gutter before the label's column, so the label itself sits on the column line.

### Portrait and signature

- The portrait is round and four columns wide. Its frame is as tall as it is wide, rounded up to a whole module. The moving mesh shows as a ring around the photo; that padding is internal to the frame.
- One accent-green square, one column wide, sits in the frame's bottom-right corner behind the end of the signature, like a seal. It shares the signature's bottom line. Add no other frames, corner marks, or ornaments there.
- The signature is level and two columns wide, over the photo's lower right edge. Its sides sit on the lines of columns 3 and 4. Its bottom sits on the frame's bottom module line; at widths up to 980px it sits half a module lower, because the frame hugs the photo there. Preserve its aspect ratio.

### Horizontal modules

Use a two-dimensional grid. Horizontal modules are 56px above 980px, 64px from 737px to 980px, and 48px on mobile. The larger tablet modules give wrapped biography text room in its five-row span. Use a 4px unit for padding, margins, and line boxes inside those modules. Read these values from `--grid-module`, `--bar-height`, and `--grid-unit`.

The header occupies two horizontal modules and the gap below it occupies one. Above 736px those two modules are the four navigation bars. Main content starts at module 3: 168px on wide screens, 192px on tablets, and 144px on mobile. Keep the document overlay attached to content while scrolling; header guides stay fixed with the navigation.

List boundaries must land on the large module lines, not just the 4px spacing guides. Reserve two modules per notice, three per post, and four per publication or talk. Use `useGridRows` to measure natural content and add whole modules when wrapping needs more space. Notices must all be the same height: the list carries `data-grid-uniform`, so above 736px every notice takes the module count of the tallest one. In each notice, centre the year, the month dot, and the text on the row's middle line, with at least 24px above and below: a one-line notice has all three on one centre line, and a wrapped notice's text block is centred on it. Posts and publications use 24px top and bottom insets. Measure the content's natural height independently of its vertical position so centering cannot change the module count. Do not clip text, truncate titles, or force a long entry into the standard height. Snap each list's first row to the document grid, including after filters, navigation, and resizing.

On desktop, the homepage opening uses an 8:5 approximation of the golden ratio. The opening occupies eight horizontal modules. The portrait frame starts at row 1 in columns 1–4. Columns 5 and 12 stay empty. The biography starts at row 2 in columns 6–11, one module below the top of the photo, and has rows 2–6; the contact icons sit in row 7, one per column from column 6, level with the signature; row 8 provides space before the Notice Board bar. The lower five-module band contains the one-module Notice Board bar and the first two standard notice rows. Longer entries expand by whole modules, and the full Notice Board continues below this reference window.

On mobile, let content determine section heights. Keep the four-column grid and 4px spacing rhythm. The portrait takes three of the four columns; round its frame height to the spacing unit. The golden-cut markers are desktop guides.

Use 24px leading for body text. Choose heading and caption line-heights in multiples of 4px. Align captions with the body-text baseline within each list row. Draw separators inside their boxes so a 1px stroke does not add drift to successive rows.

Keep repeated elements the same size: all navigation bars half a module tall, all notices the same height, all contact icons in 48px boxes, all month dots 40px (36px on mobile).

Preserve the natural dimensions of mathematics and media inside prose. Align their enclosing content blocks to the grid.

## Type and content

Use Helvetica Neue, Helvetica, Arial, then sans-serif. Keep page titles at the current 48px maximum. The rail name has no fixed size; its columns set it. The Notice Board bar title is 24px, and notice years are 28px on a 32px line. Use the shared type tokens before adding sizes.

Navigation labels, the rail name, and the Notice Board title are set lowercase with `text-transform`. Keep the wording and capitalisation in the data and markup as the owner wrote them.

Preserve the owner's wording and identity assets, including `public/signature.png`, the portrait, and the social links. Keep the Google Scholar link as the open-book icon. The open book and the envelope are the site's own flat, square-cornered glyphs in `SharpIcons.jsx`; GitHub and LinkedIn keep their official marks. Add visible labels only when they help readers find or understand content. Avoid numbered section labels, filler subtitles, slogans, and decorative popups. Write explanations in plain language with specific reasons.

## Color and detail

Use only the colours in the theme tokens. Keep the warm neutral background and purple-to-green accents. Use `--gradient-accent` for decorative side bars. Light-theme decorative purple and green are lighter than their dark-theme equivalents. Readable links use the separate `--color-accent` token; do not swap the palettes or use decorative colors for small text.

Solid shapes use one black and one white: `--color-ink` is the dark theme's background colour and `--color-paper` is the light theme's background colour. Bars, the rail name, and the signature use `--color-bar`, which is ink in the light theme and paper in the dark theme; bar labels use `--color-on-bar`, the opposite. So the black in the light theme is the same black as the dark theme's page, and the two themes are exact inversions. The signature PNG is applied as a mask over `--color-bar`; do not recolour it with filters. Text keeps the text tokens. The theme switch block uses the accent purple. The portrait's square uses the accent green. Month dots alternate between accent purple and accent green. Contact tiles turn accent purple on hover and focus. The Gallery's Google Scholar link is the plain 24px open-book glyph without a tile, with its ink on the section title's left edge; a lone tile beside the list is too heavy there. The current page's navigation label takes the accent green.

Keep the moving mesh around the portrait. Preserve the Notice Board bar as the only strong divider; do not add a bar or strong rule above every page title. Other separators should use the neutral border tokens. Do not add patterns or textures to the bars.

## Interaction

Post and notice hover states use a 3px gradient side bar in the gutter beside the content column. Anchor it to the full item height, with 12px of space at the top and bottom, rather than sizing it to the text. Keep text stationary and the row background clear. Use matching keyboard focus states. On mobile posts, place the bar 12px to the left of the item in the shell margin, clear of the focus outline, spanning both the date and text rows.

Keep motion small: centered underline reveals and a 2px diagonal arrow movement, using the shared transition tokens. Write the diagonal arrow as U+2197 followed by U+FE0E (`'\u2197\uFE0E'` in JSX, `'\2197\FE0E'` in CSS); without the second character iOS and iPadOS draw it as a colour emoji. Navigation labels and the rail's links use the same underline reveal; in the rail it runs beside the upright text. Respect reduced motion, pause the mesh while the document is hidden, and preserve mobile-menu keyboard navigation and focus return.

## Check changes

Enable the grid overlay with the development Grid button or `?grid=1`. It shows the two rail columns as R1 and R2 and the content columns as 1–12. Compare actual element edges with the numbered columns, horizontal modules, and fine spacing guides. Check that navigation labels end on columns 5, 7, 9, and 11 in page order, that the rail name's last letter touches the bar, and that every notice has the same height. Check every list item's top and bottom against the large module lines; a 4px-aligned coordinate alone is insufficient. On desktop, the Notice Board divider must meet the `8 / 13` marker. Scroll to confirm that document guides follow the content and header guides remain fixed. Check both themes and widths near 736px and 980px as well as a wide desktop and a narrow phone. Check long titles, wrapped notices, hover states, and keyboard focus. Look for overlap, horizontal overflow, and text touching decorative bars.

For layout changes, run `npm run build` and inspect the affected pages in a real browser. Use screenshots with the overlay to check alignment and screenshots without it to check spacing and balance. Store browser artifacts under the ignored `output/playwright/` directory. Keep unrelated content and user edits intact.
