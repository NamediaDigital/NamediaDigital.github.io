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
                <span> <a href="https://www.w3schools.com/html/" target="blank">HTML</a>, <a href="https://www.w3schools.com/Css/" target="blank">CSS</a>, <a href="https://sass-lang.com/" target="blank">SCSS</a>, <a href="http://lesscss.org/" target="blank">LESS</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank">Javascript</a>, <a href="https://reactjs.org/" target="blank">React</a>, <a href="https://redux.js.org/" target="blank">Redux</a>, <a href="https://reacttraining.com/react-router/l" target="blank">React Router</a>, <a href="https://www.python.org/" target="blank">Python</a></span>
              </li>
              <li>Server Side -
                <span> <a href="http://expressjs.com/" target="blank">Express</a>, <a href="https://nodejs.org/en/" target="blank">Node</a>, <a href="https://www.mongodb.com/" target="blank">Mongo</a>, <a href="http://mongoosejs.com/" target="blank">Mongoose</a>, <a href="https://www.djangoproject.com/" target="blank">Django</a>, <a href="https://graphql.org/" target="blank">GraphQL</a> - <a href="https://www.howtographql.com/" target="blank">Tutorial</a></span>
              </li>
              <li>Testing -
                <span> <a href="https://facebook.github.io/jest/" target="blank">Jest</a>, <a href="https://github.com/airbnb/enzyme" target="blank">Enzyme</a>, <a href="https://mochajs.org/" target="blank">Mocha</a>, <a href="http://www.chaijs.com/" target="blank">Chai</a>, <a href="http://sinonjs.org/" target="blank">Sinon</a></span>
              </li>
              <li>Deployment -
                <span> <a href="https://pages.github.com/" target="blank">Github Pages</a>, <a href="https://www.netlify.com/" target="blank">Netlify</a>, <a href="https://www.heroku.com/" target="blank">Heroku</a>, <a href="https://azure.microsoft.com/en-us/" target="blank">Microsoft Azure</a>, <a href="https://aws.amazon.com/" target="blank">AWS</a></span>
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
