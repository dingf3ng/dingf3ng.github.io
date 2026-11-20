import PropTypes from 'prop-types';

// Flat, square-cornered glyphs drawn on a 24px box, to match the site's bars and squares.
const Glyph = ({ className, children }) => (
  <svg aria-hidden="true" className={className} fill="currentColor" focusable="false" viewBox="0 0 24 24">
    {children}
  </svg>
);

Glyph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Glyph.defaultProps = {
  className: '',
};

// Open book: two flat pages with a gap for the spine. Used for Google Scholar.
export const BookIcon = ({ className }) => (
  <Glyph className={className}>
    <path d="M2 5l9 2v13l-9-2zM22 5l-9 2v13l9-2z" />
  </Glyph>
);

// Envelope: a solid rectangle with the flap cut out of it.
export const MailIcon = ({ className }) => (
  <Glyph className={className}>
    <path fillRule="evenodd" d="M2 5h20v14H2zM3.6 6.6v2.3l8.4 6 8.4-6V6.6l-8.4 6z" />
  </Glyph>
);

BookIcon.propTypes = { className: PropTypes.string };
BookIcon.defaultProps = { className: '' };
MailIcon.propTypes = { className: PropTypes.string };
MailIcon.defaultProps = { className: '' };
