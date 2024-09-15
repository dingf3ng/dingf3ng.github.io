import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Gallery/Cell';
import data from '../data/projects';

const Gallery = () => (
  <Main title="Gallery" description="Learn about Ding Feng's projects.">
    <article className="pagepost" id="gallery">
      <header>
        <div className="title">
          <h2>
            <Link to="/gallery">Gallery</Link>
          </h2>
          <p>A selection of interesting stuffs</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Gallery;
