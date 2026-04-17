import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import Analytics from '../components/Layout/Analytics';
import Navigation from '../components/Layout/Navigation';
import GlobalFooter from '../components/Layout/GlobalFooter';
import ScrollToTop from '../components/Layout/ScrollToTop';
import styles from './Main.module.scss';

const Main = ({
  children,
  description,
  image,
  keywords,
  path,
  title,
}) => {
  const currentUrl = `https://dingf3ng.github.io${path || ''}`;
  const imageUrl = 'https://dingf3ng.github.io/images/me.jpg';
  const siteName = 'Ding Feng\'s Personal Website';
  const authorName = 'Ding Feng';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: authorName,
    url: 'https://dingf3ng.github.io',
    image: imageUrl,
    description: 'I am an undergraduate student at the School of Computing, National University of Singapore. I do research in the area of programming languages and software engineering.',
    jobTitle: 'Computer Science Student',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'National University of Singapore',
      url: 'https://www.nus.edu.sg',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'National University of Singapore',
    },
    nationality: 'Chinese',
    birthPlace: 'Tianjin, China',
    sameAs: [
      'https://github.com/dingf3ng',
      'https://www.linkedin.com/in/dingf3ng',
    ],
    knowsAbout: [
      'Computer Science',
      'Programming Languages',
      'Software Engineering',
      'Technology',
    ],
  };

  return (
    <>
      <Analytics />
      <ScrollToTop />
      <Helmet
        titleTemplate="%s - Ding Feng"
        defaultTitle="Ding Feng"
        defer={false}
      >
        {title && <title>{title}</title>}

        {/* Basic Meta Tags */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords || 'Ding Feng, Computer Science, NUS Singapore, Software Engineer, Student, Programming, Technology, Blog, Personal Website'} />
        <meta name="author" content={authorName} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="EN" />
        <meta name="revisit-after" content="7 days" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title || siteName} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image || imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || siteName} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image || imageUrl} />
        <meta name="twitter:creator" content="@dingf3ng" />
        <meta name="twitter:site" content="@dingf3ng" />
        {/* Additional Meta Tags */}
        <link rel="canonical" href={currentUrl} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className={styles.wrapper}>
        <Navigation />
        <main className={styles.main}>{children}</main>
        <GlobalFooter />
      </div>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  title: null,
  description: 'Ding Feng\'s personal website.',
  keywords: null,
  image: null,
  path: '',
};

export default Main;
