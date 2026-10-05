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
    <ul className={styles.list}>
      {activities.map((item) => (
        <li className={styles.item} key={`${item.date}-${item.description.slice(0, 30)}`}>
          <div className={styles.dateColumn}>
            <time className={styles.date} dateTime={item.date}>{item.date}</time>
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
