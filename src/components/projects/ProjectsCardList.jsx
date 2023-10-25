import React from 'react';
import './ProjectsCardList.css';
import projectSample from '../../assets/project-sample.png';

import projectSample1 from '../../assets/project-sample-1.png';
import { useInView } from 'react-intersection-observer';

export default function ProjectsCardList() {
  const [ref1, inView1] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });
  const [ref2, inView2] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });
  const [ref3, inView3] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });
  const [ref4, inView4] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });
  const [ref5, inView5] = useInView({
    threshold: 0,
    rootMargin: '-50%',
  });

  return (
    <div className="project-container">
      <div className="project-section-title-container">
        <div className="project-section-title-wrapper">
          <h1>Projects</h1>
        </div>
      </div>
      <div className="project-rows">
        <div className="project-collection">
          <div className="description-row" ref={ref1}>
            <h3>Concordance</h3>
            <div className="project-image-snippet">
              <img
                src={projectSample}
                alt="pj1"
                style={{ display: inView1 ? 'block' : 'none' }}
              />
            </div>
            <div className="project-link">
              <button>Github</button>
            </div>
          </div>
        </div>

        <div className="project-collection">
          <div className="description-row" ref={ref2}>
            <h3>Sourcery</h3>
            <div className="project-image-snippet">
              <img
                src={projectSample1}
                alt="pj1"
                style={{ display: inView2 ? 'block' : 'none' }}
              />
            </div>
            <div className="project-link">
              <button>Github</button>
            </div>
          </div>
        </div>

        <div className="project-collection">
          <div className="description-row" ref={ref3}>
            <h3>CMS</h3>
            <div className="project-image-snippet">
              <img
                src={projectSample}
                alt="pj1"
                style={{ display: inView3 ? 'block' : 'none' }}
              />
            </div>
            <div className="project-link">
              <button>Github</button>
            </div>
          </div>
        </div>

        <div className="project-collection">
          <div className="description-row" ref={ref4}>
            <h3>Chromeme</h3>
            <div className="project-image-snippet">
              <img
                src={projectSample1}
                alt="pj1"
                style={{ display: inView4 ? 'block' : 'none' }}
              />
            </div>
            <div className="project-link">
              <button>Github</button>
            </div>
          </div>
        </div>

        <div className="project-collection">
          <div className="description-row" ref={ref5}>
            <h3>Portfolio website</h3>
            <div className="project-image-snippet">
              <img
                src={projectSample}
                alt="pj1"
                style={{ display: inView5 ? 'block' : 'none' }}
              />
            </div>
            <div className="project-link">
              <button>Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
