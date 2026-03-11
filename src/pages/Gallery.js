import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Gallery/Cell';
import data from '../data/projects';

const Gallery = () => (
  <Main
    title="Gallery - Ding Feng"
    description="Explore Ding Feng's project gallery and portfolio. Computer Science projects, and creative works."
    keywords="Ding Feng Gallery, Projects Portfolio, Computer Science Projects, Programming Portfolio, Software Development"
    path="/gallery"
  >
    <article className="page-content" id="gallery">
      <header>
        <div className="title">
          <h2>
            <Link to="/gallery">Gallery</Link>
          </h2>
          <p>A selection of interesting stuff made by me</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Gallery;
