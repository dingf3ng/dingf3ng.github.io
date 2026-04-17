import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import publications from '../data/publications.json';
import talks from '../data/talks.json';
import styles from './Gallery.module.scss';

const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

const resolvePdfLink = (href) => (
  href.startsWith('http://') || href.startsWith('https://')
    ? href
    : `${process.env.PUBLIC_URL}${href}`
);

const formatDate = (value) => dayjs(value).format('MMMM YYYY');
const formatMonth = (value) => dayjs(value).format('MMM');
const formatYear = (value) => dayjs(value).format('YYYY');

const publicationItems = [...publications].sort(sortByDateDesc);
const talkItems = [...talks].sort(sortByDateDesc);

const Gallery = () => (
  <Main
    title="Publications & Talks - Ding Feng"
    description="A temporary list of Ding Feng's publications and talks, with PDF links for papers, abstracts, and presentation materials."
    keywords="Ding Feng Publications, Ding Feng Talks, Research Papers, Presentations, Programming Languages, Software Research"
    path="/gallery"
  >
    <article className="surface-panel">
      <header className="surface-panel__header">
        <div className="surface-panel__title-block">
          <h2 className="surface-panel__title">
            <Link to="/gallery">Publications & Talks</Link>
          </h2>
          <p className="surface-panel__subtitle">Selected publications, preprints, and research presentations</p>
        </div>
      </header>
      <div className={styles.sections}>
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Selected Publications</h3>
            <p className={styles.sectionIntro}>A reverse-chronological list of papers, abstracts, and working notes.</p>
          </header>
          <ol className={styles.entries}>
            {publicationItems.map((item) => (
              <li className={styles.entry} key={`${item.title}-${item.date}`}>
                <div className={styles.entryDate}>
                  <span className={styles.entryYear}>{formatYear(item.date)}</span>
                  <time className={styles.entryMonth} dateTime={item.date}>{formatMonth(item.date)}</time>
                </div>
                <article className={styles.entryBody}>
                  <p className={styles.entryType}>{item.type}</p>
                  <h4 className={styles.entryTitle}>
                    <a
                      className={styles.entryTitleLink}
                      href={resolvePdfLink(item.pdf)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.title}
                    </a>
                  </h4>
                  <p className={styles.citation}>
                    {item.authors}. {item.venue}. {formatDate(item.date)}.
                  </p>
                  <p className={styles.abstract}>{item.summary}</p>
                  <div className={styles.links}>
                    <a
                      className={styles.assetLink}
                      href={resolvePdfLink(item.pdf)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      PDF
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Talks & Presentations</h3>
            <p className={styles.sectionIntro}>Conference, showcase, and seminar presentations with linked materials.</p>
          </header>
          <ol className={styles.entries}>
            {talkItems.map((item) => (
              <li className={styles.entry} key={`${item.title}-${item.date}`}>
                <div className={styles.entryDate}>
                  <span className={styles.entryYear}>{formatYear(item.date)}</span>
                  <time className={styles.entryMonth} dateTime={item.date}>{formatMonth(item.date)}</time>
                </div>
                <article className={styles.entryBody}>
                  <p className={styles.entryType}>Talk</p>
                  <h4 className={styles.entryTitle}>
                    <a
                      className={styles.entryTitleLink}
                      href={resolvePdfLink(item.pdf)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.title}
                    </a>
                  </h4>
                  <p className={styles.citation}>
                    {item.event}. {item.location}. {formatDate(item.date)}.
                  </p>
                  <p className={styles.abstract}>{item.summary}</p>
                  <div className={styles.links}>
                    <a
                      className={styles.assetLink}
                      href={resolvePdfLink(item.pdf)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      PDF
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  </Main>
);

export default Gallery;
