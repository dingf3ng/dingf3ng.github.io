import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './NotFound.module.scss';

const PageNotFound = () => (
  <div className={styles.page}>
    <Helmet title="404 Not Found">
      <meta
        name="description"
        content="The content you are looking for cannot be found."
      />
    </Helmet>
    <h1>Page Not Found</h1>
    <p>
      Return <Link to="/">home</Link>.
    </p>
  </div>
);

export default PageNotFound;
