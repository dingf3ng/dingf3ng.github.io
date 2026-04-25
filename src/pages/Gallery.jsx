import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import publications from '../data/publications.json';
import talks from '../data/talks.json';
import styles from './Gallery.module.scss';

const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);
const getLatestSessionDate = (sessions = []) => sessions
  .map((session) => new Date(session.date))
  .sort((a, b) => b - a)[0];

const resolveAssetLink = (href) => (
  href.startsWith('http://') || href.startsWith('https://')
    ? href
    : `${process.env.PUBLIC_URL}${href}`
);

const formatDate = (value) => dayjs(value).format('MMMM YYYY');
const formatYear = (value) => dayjs(value).format('YYYY');

const publicationItems = [...publications].sort(sortByDateDesc);
const talkItems = [...talks]
  .map((item) => ({
    ...item,
    sessions: [...item.sessions].sort(sortByDateDesc),
  }))
  .sort((a, b) => getLatestSessionDate(b.sessions) - getLatestSessionDate(a.sessions));

const Gallery = () => (
  <Main
    title="Gallery"
    description="A list of Ding Feng's publications and talks, with PDF links for papers, abstracts, and presentation materials."
    keywords="Ding Feng Publications, Ding Feng Talks, Research Papers, Presentations, Programming Languages, Software Engineering, Computer Science, NUS"
    path="/gallery"
  >
    <article className="surface-panel">
      <header className="surface-panel__header">
        <div className="surface-panel__title-block">
          <h2 className="surface-panel__title">
            <Link to="/gallery">Gallery</Link>
          </h2>
          <p className="surface-panel__subtitle">List of publications, drafts and talks</p>
        </div>
      </header>
      <div className={styles.sections}>
        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Publications and Drafts</h3>
          </header>
          <ol className={styles.publications}>
            {publicationItems.map((item) => (
              <li className={styles.publicationItem} key={`${item.title}-${item.date}`}>
                <article className={styles.publicationBody}>
                  <div className={styles.publicationHeader}>
                    <h4 className={styles.publicationTitle}>
                      {item.title}
                    </h4>
                    {(item.pdf || item.artifact) && (
                      <div className={styles.publicationLinks}>
                        {item.pdf && (
                          <a
                            className={styles.publicationButton}
                            href={resolveAssetLink(item.pdf)}
                            rel="noreferrer"
                            target="_blank"
                          >
                            PDF
                          </a>
                        )}
                        {item.artifact && (
                          <a
                            className={styles.publicationButton}
                            href={resolveAssetLink(item.artifact)}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Artifact
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <p className={styles.publicationAuthors}>{item.authors}</p>
                  <p className={styles.publicationVenue}>
                    {item.venue}. {formatYear(item.date)}. {item.type}.
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Talks and Presentations</h3>
            <p className={styles.sectionIntro}>Conference, workshops and seminar presentations with linked materials.</p>
          </header>
          <ul className={styles.talkList}>
            {talkItems.map((item) => (
              <li className={styles.talkItem} key={item.title}>
                <div className={styles.talkHeader}>
                  <h4 className={styles.talkTitle}>{item.title}</h4>
                  {item.slides && (
                    <a
                      className={styles.publicationButton}
                      href={resolveAssetLink(item.slides)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Slides
                    </a>
                  )}
                  {item.video && (
                    <a
                      className={styles.publicationButton}
                      href={resolveAssetLink(item.video)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Video
                    </a>
                  )}
                </div>
                <ul className={styles.talkVenues}>
                  {item.sessions.map((session) => (
                    <li className={styles.talkVenue} key={`${item.title}-${session.event}-${session.date}`}>
                      {session.link ? (
                        <a
                          className={styles.talkVenueLink}
                          href={resolveAssetLink(session.link)}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {session.event}
                        </a>
                      ) : (
                        <span>{session.event}</span>
                      )}
                      {session.note && `, ${session.note}`}
                      {`, ${session.location}, ${formatDate(session.date)}`}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  </Main>
);

export default Gallery;
