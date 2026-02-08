import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import GlobalFooter from '../components/Template/GlobalFooter';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => {
  const currentUrl = `https://dingf3ng.github.io${props.path || ''}`;
  const imageUrl = 'https://dingf3ng.github.io/images/me.jpg';
  const siteName = 'Ding Feng\'s Personal Website';
  const authorName = 'Ding Feng';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: authorName,
    url: 'https://dingf3ng.github.io',
    image: imageUrl,
    description: 'Computer Science Student at National University of Singapore (NUS). Science & Technology Scholar with interests in theoretical computer science, programming, and technology.',
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
      'https://www.linkedin.com/in/feng-ding-277872287/',
      'https://www.instagram.com/dingf3ng/',
    ],
    knowsAbout: [
      'Computer Science',
      'Programming',
      'Software Engineering',
      'Theoretical Computer Science',
      'Technology',
    ],
  };

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet
        titleTemplate="%s - Ding Feng"
        defaultTitle="Ding Feng's Website"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}

        {/* Basic Meta Tags */}
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords || 'Ding Feng, Computer Science, NUS Singapore, Software Engineer, Student, Programming, Technology, Blog, Personal Website'} />
        <meta name="author" content={authorName} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="EN" />
        <meta name="revisit-after" content="7 days" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title || siteName} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.image || imageUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title || siteName} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.image || imageUrl} />
        <meta name="twitter:creator" content="@dingf3ng" />
        <meta name="twitter:site" content="@dingf3ng" />
        {/* Additional Meta Tags */}
        <link rel="canonical" href={currentUrl} />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">{props.children}</div>
        <GlobalFooter />
      </div>
    </HelmetProvider>
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
