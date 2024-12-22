import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Compilations from '../components/Posts/Compilations';
import PostsList from '../components/Posts/PostsList';

// Define the sections as components directly
const sections = {
  Compilations: () => <Compilations />,
  PostsList: () => <PostsList />,
};

const Posts = () => (
  <Main title="Posts" description="osts on various topics">
    <article className="pagepost" id="posts">
      <header>
        <div className="title">
          <h2>
            <Link to="/posts">Posts</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        name === 'Compilations' ? (
          <React.Fragment key={name}>
            <Section />
            <hr className="section-divider" />
          </React.Fragment>
        ) : (
          <Section key={name} />
        )
      ))}
    </article>
  </Main>
);

export default Posts;
