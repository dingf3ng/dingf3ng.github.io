import ReactMarkdown from 'react-markdown';
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

const Activities = () => (
  <div className={styles.root}>
    <h2 className={styles.title}>Recent Activities</h2>
    <ul className={styles.list}>
      {activities.map((item) => (
        <li className={styles.item} key={`${item.date}-${item.description.slice(0, 30)}`}>
          <div className={styles.dateColumn}>
            <span className={styles.date}>{item.date}</span>
          </div>
          <div className={styles.description}>
            <InlineMarkdown>{item.description}</InlineMarkdown>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Activities;
