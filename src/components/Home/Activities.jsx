import ReactMarkdown from 'react-markdown';
import useGridRows from '../../hooks/useGridRows';
import activities from '../../data/activities.json';
import styles from './Activities.module.scss';

// Render activity description as inline markdown (links, bold, etc.)
// We strip the wrapping <p> so it flows naturally inside the div.
const InlineMarkdown = ({ children }) => (
  <ReactMarkdown
    components={{
      p: ({ node, ...props }) => <span {...props} />,
    }}
  >
    {children}
  </ReactMarkdown>
);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "2026-08" is shown as the year, then the month's short name in a dot.
const NoticeDate = ({ date }) => {
  const [year, month] = date.split('-');
  const monthName = MONTHS[Number(month) - 1];
  return (
    <time className={styles.date} dateTime={date}>
      <span className={styles.year}>{year}</span>
      {' '}
      {monthName && <span className={styles.month}>{monthName}</span>}
    </time>
  );
};

const Activities = () => {
  const gridRef = useGridRows(activities);
  return (
    <div className={styles.root}>
      {/* data-grid-uniform: every notice takes the height of the tallest one. */}
      <ul className={styles.list} ref={gridRef} data-grid-uniform>
        {activities.map((item) => (
          <li className={styles.item} data-grid-row key={`${item.date}-${item.description.slice(0, 30)}`}>
            <div className={styles.dateColumn} data-grid-content>
              <NoticeDate date={item.date} />
            </div>
            <div className={styles.description} data-grid-content>
              <InlineMarkdown>{item.description}</InlineMarkdown>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
