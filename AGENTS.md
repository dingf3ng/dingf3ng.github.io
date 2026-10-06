# Working on this site

This is a React site built with Create React App. Component styles use SCSS modules. Shared typography, colors, spacing, and page layouts live in `src/styles/`.

## Layout

Use the site's Swiss style: a shared column grid, left-aligned type, clear hierarchy, and space between sections. Explain a layout through its column spans and reading order. Avoid claims that a decorative choice is required by a canonical design rule.

- Use 12 columns with 24px gutters above 736px. Use four columns with 16px gutters at 736px and below. Read shell padding and the 1280px content limit from the theme tokens.
- Align major elements to column tracks: navigation links, headings, text blocks, lists, controls, the signature's anchor, and the portrait frame. Use `subgrid` for nested layouts that share those tracks. Fixed date widths and flex gaps must not create a second, drifting grid.
- Start ordinary page content at column 4. At widths up to 980px, start it at column 3. On mobile, use the full four-column grid. Keep the header, body, and footer on the same axes.
- Start the five desktop navigation links at columns 4, 5, 6, 7, and 8. At widths from 737px to 980px, use starts at 3, 5, 7, 9, and 11 with wider spans so labels stay apart. Switch to the mobile menu at 736px.
- In the 12-column layout, keep the Notice Board title at the left and the entries in columns 4–11, or 3–11 at widths up to 980px. Leave column 12 empty. On mobile, place the horizontal title above entries that span all four columns.
- Limit reading width inside the allocated span: about 65ch for the introduction, 68ch for prose pages, 80ch for notices, and 60ch for post excerpts. Text can end before the column boundary. It must start on the shared text axis.
- Minor elements can use local spacing: inline icons, link arrows, contact links, and publication resource links. Anchor their group to the containing text or grid edge. Do not classify a heading, content panel, or navigation group as minor to excuse drift.
- Keep dates on one line. In post and notice lists, reserve two columns for dates at widths from 737px to 980px. Check the gap before the description and its hover bar rather than allowing the date to crowd them.
- Size the signature inside its assigned span and preserve its aspect ratio. The portrait frame must fill its assigned columns; its image and mesh padding are internal to that frame.

### Horizontal modules

Use a two-dimensional grid. Horizontal modules are 56px above 980px, 64px from 737px to 980px, and 48px on mobile. The larger tablet modules give wrapped biography text room in its four-row span. Use a 4px unit for padding, margins, and line boxes inside those modules. Read these values from `--grid-module` and `--grid-unit`.

The header occupies two horizontal modules and the gap below it occupies one. Main content starts at module 3: 168px on wide screens, 192px on tablets, and 144px on mobile. Header links fill the two-row band and share its center line. Keep the document overlay attached to content while scrolling; header guides stay fixed with the navigation.

List boundaries must land on the large module lines, not just the 4px spacing guides. Reserve two modules per notice, three per post, and four per publication or talk. Use `useGridRows` to measure natural content and add whole modules when wrapping needs more space. Center each notice's date-and-description group vertically, with at least 24px above and below; keep the date on the first description baseline. Posts and publications use 24px top and bottom insets. Measure the content's natural height independently of its vertical position so centering cannot change the module count. Do not clip text, truncate titles, or force a long entry into the standard height. Snap each list's first row to the document grid, including after filters, navigation, and resizing.

On desktop, the homepage opening uses an 8:5 approximation of the golden ratio. The introduction occupies eight horizontal modules. Its heading spans rows 1–2, biography rows 3–6, and contacts row 7; row 8 provides space before Notice Board. The portrait starts at row 1, with its frame height rounded up to a whole module to fit the original photo. The lower five-module band contains one module above the list and the first two standard notice rows. Longer entries expand by whole modules, and the full Notice Board continues below this reference window.

On mobile, let content determine section heights. Keep the four-column grid and 4px spacing rhythm. Preserve the portrait's aspect ratio and round its frame height to the spacing unit. The golden-cut markers are desktop guides.

Use 24px leading for body text. Choose heading and caption line-heights in multiples of 4px. Align captions with the body-text baseline within each list row. Draw separators inside their boxes so a 1px stroke does not add drift to successive rows.

Preserve the natural dimensions of mathematics and media inside prose. Align their enclosing content blocks to the grid.

## Type and content

Use Helvetica Neue, Helvetica, Arial, then sans-serif. Keep page titles at the current 48px maximum and the homepage name at 60px maximum. The vertical Notice Board label has a 64px maximum and becomes 32px on mobile. Use the shared type tokens before adding sizes.

Preserve the owner's wording and identity assets, including `public/signature.png`, the portrait, and the social links. Keep the Google Scholar link as the open-book icon. Add visible labels only when they help readers find or understand content. Avoid numbered section labels, filler subtitles, slogans, and decorative popups. Write explanations in plain language with specific reasons.

## Color and detail

Keep the warm neutral background and purple-to-green accents. Use `--gradient-accent` for decorative side bars. Light-theme decorative purple and green are lighter than their dark-theme equivalents. Readable links use the separate `--color-accent` token; do not swap the palettes or use decorative colors for small text.

Keep the moving mesh around the portrait. Add no extra frames, corner marks, or ornaments there. Preserve the strong divider above Notice Board; do not add a strong rule above every page title. Other separators should use the neutral border tokens.

## Interaction

Post and notice hover states use a 3px gradient side bar in the gutter beside the content column. Anchor it to the full item height, with 12px of space at the top and bottom, rather than sizing it to the text. Keep text stationary and the row background clear. Use matching keyboard focus states. On mobile posts, place the bar 12px to the left of the item in the shell margin, clear of the focus outline, spanning both the date and text rows.

Keep motion small: centered underline reveals and a 2px diagonal arrow movement, using the shared transition tokens. Respect reduced motion, pause the mesh while the document is hidden, and preserve mobile-menu keyboard navigation and focus return.

## Check changes

Enable the grid overlay with the development Grid button or `?grid=1`. Compare actual element edges with the numbered columns, horizontal modules, and fine spacing guides. Check every list item's top and bottom against the large module lines; a 4px-aligned coordinate alone is insufficient. On desktop, the Notice Board divider must meet the `8 / 13` marker. Scroll to confirm that document guides follow the content and header guides remain fixed. Check both themes and widths near 736px and 980px as well as a wide desktop and a narrow phone. Check long titles, wrapped notices, hover states, and keyboard focus. Look for overlap, horizontal overflow, and text touching decorative bars.

For layout changes, run `npm run build` and inspect the affected pages in a real browser. Use screenshots with the overlay to check alignment and screenshots without it to check spacing and balance. Store browser artifacts under the ignored `output/playwright/` directory. Keep unrelated content and user edits intact.
