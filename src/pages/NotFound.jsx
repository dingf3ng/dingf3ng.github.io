import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const PageNotFound = () => (
  <Main title="404 Not Found" description="The content you are looking for cannot be found.">
    <article className="surface-panel">
      <header className="surface-panel__header">
        <div className="surface-panel__title-block">
          <h1 className="surface-panel__title">Page Not Found</h1>
        </div>
      </header>
      <p>Return <Link to="/">home</Link>.</p>
    </article>
  </Main>
);

export default PageNotFound;
