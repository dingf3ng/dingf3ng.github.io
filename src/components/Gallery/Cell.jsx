import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import styles from './Cell.module.scss';

const Cell = ({ data }) => (
  <div className={styles.container}>
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          <a className={styles.titleLink} href={data.link}>{data.title}</a>
        </h3>
        <time className={styles.published}>
          {dayjs(data.date).format('MMMM, YYYY')}
        </time>
      </header>
      <a className={styles.imageLink} href={data.link}>
        <img className={styles.image} src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className={styles.description}>
        <p className={styles.descriptionText}>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
