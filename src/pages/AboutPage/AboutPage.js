import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I'm a full stack software engineer - <span className="highlight">MERN stack + Python + Django</span>.
            </p>
            <p>
              My passion is building{' '}
              <span className="highlight"> cool stuff</span> for my clients, friends, and family. 
              I also have a passion for learning new technologies. I learn one new thing every month.
              {/* I also like to{' '}
              <span className="highlight">share</span> what I learn on youtube or my blog. */}
            </p>
            {/* <p>
              I built this site <span className="highlight">from scratch</span>.
              By scratch, I mean <i>absolutely from scratch</i>{' '}
              <span className="highlight">
                without any UI library/framework
              </span>{' '}
              (except React though) and had so much fun along the way.
            </p> */}
            {/* <p>
              React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and
              AWS are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS.
            </p> */}
            <p>My current toolset:</p>
            <ul>
              <li>Client Side -
                <span> HTML, CSS, SCSS, Javascript, React, Redux, React Router, Python, Django</span>
              </li>
              <li>Server Side -
                <span> Express, Node, Mongo</span>
              </li>
              <li>Testing -
                <span> Jest, Enzyme, Mocha, Chai, Sinon, Morgan</span>
              </li>
              <li>Deployment -
                <span> Github Pages, Netlify, Heroku, Microsoft Azure, AWS</span>
              </li>
            </ul>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
