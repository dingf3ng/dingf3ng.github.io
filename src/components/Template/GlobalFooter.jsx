import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const { NODE_ENV } = process.env;

const GlobalFooter = () => {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/dingf3ng/repos')
      .then((res) => res.json())
      .then((repos) => {
        const repo = repos.filter((r) => r.name === 'dingf3ng.github.io')[0];
        if (repo && repo.pushed_at) {
          setLastUpdated(new Date(repo.pushed_at).toLocaleDateString());
        }
      })
      .catch((error) => {
        console.error('Error fetching repos:', error);
      });
  }, []);

  return (
    <footer id="global-footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; Ding Feng, 2024, <Link to="/">dingf3ng.github.io</Link>.
        </p>
        {NODE_ENV === 'production' ? (
          <p className="copyright">
            <span id="busuanzi_container_site_pv">
              Site views: <span id="busuanzi_value_site_pv" />. Last updated on {lastUpdated || 'loading...'}
            </span>
          </p>
        ) : (
          <p className="copyright">
            <span>Site views: (local)</span>. Last updated on {lastUpdated || 'loading...'}
          </p>
        )}
      </div>
    </footer>
  );
};

export default GlobalFooter;
