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
              I'm a full stack software engineer/developer - <span className="highlight">Javascript/MERN + Python/Django + Swift/Xcode</span>.
            </p>
            <p>
              My passion is building{' '}
              <span className="highlight"> cool apps</span> for my clients, friends, and family. 
              I have a passion for learning new technologies and I usually learn one new tech every month.
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
            <p>I've built with the following set of programming languages, libraries and frameworks:</p>
            <ul>
              <li>Client Side -
                <span> <a href="https://www.w3schools.com/html/" rel="noopener noreferrer" target="_blank">HTML</a>, <a href="https://www.w3schools.com/Css/" rel="noopener noreferrer" target="_blank">CSS</a>, <a href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank">SCSS</a>, <a href="http://lesscss.org/" rel="noopener noreferrer" target="_blank">LESS</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener noreferrer" target="_blank">Javascript</a>, <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>, <a href="https://redux.js.org/" rel="noopener noreferrer" target="_blank">Redux</a>, <a href="https://reacttraining.com/react-router/l" rel="noopener noreferrer" target="_blank">React Router</a></span>
              </li>
              <li>Server Side -
                <span> <a href="http://expressjs.com/" rel="noopener noreferrer" target="_blank">Express</a>, <a href="https://nodejs.org/en/" target="blank" rel="noopener noreferrer">Node</a>, <a href="http://mongoosejs.com/" target="blank" rel="noopener noreferrer">Mongoose</a>, <a href="https://www.mongodb.com/" target="blank" rel="noopener noreferrer">Mongo</a>, <a href="http://docs.sequelizejs.com/" target="blank" rel="noopener noreferrer">Sequelize</a>, <a href="https://www.python.org/" target="blank" rel="noopener noreferrer">Python</a>, <a href="https://www.djangoproject.com/" target="blank" rel="noopener noreferrer">Django</a>, <a href="https://www.sqlite.org/index.html" target="blank" rel="noopener noreferrer">SQLite</a>, <a href="http://www.django-rest-framework.org/" target="blank" rel="noopener noreferrer">Django REST Framework</a>, <a href="https://graphql.org/" target="blank" rel="noopener noreferrer">GraphQL</a> - <a href="https://www.howtographql.com/" target="blank" rel="noopener noreferrer">Tutorial</a></span>
              </li>
              <li>Testing -
                <span> <a href="https://facebook.github.io/jest/" target="blank" rel="noopener noreferrer">Jest</a>, <a href="https://github.com/airbnb/enzyme" target="blank" rel="noopener noreferrer">Enzyme</a>, <a href="https://mochajs.org/" target="blank" rel="noopener noreferrer">Mocha</a>, <a href="http://www.chaijs.com/" target="blank" rel="noopener noreferrer">Chai</a>, <a href="http://sinonjs.org/" target="blank" rel="noopener noreferrer">Sinon</a></span>
              </li>
              <li>Deployment -
                <span> <a href="https://www.mongodb.com/cloud" target="blank" rel="noopener noreferrer">MongoDB Atlas</a>, <a href="https://mlab.com/" target="blank" rel="noopener noreferrer">mLab</a>, <a href="https://pages.github.com/" target="blank" rel="noopener noreferrer">Github Pages</a>, <a href="https://www.netlify.com/" target="blank" rel="noopener noreferrer">Netlify</a>, <a href="https://www.heroku.com/" target="blank" rel="noopener noreferrer">Heroku</a>, <a href="https://azure.microsoft.com/en-us/" target="blank" rel="noopener noreferrer">Microsoft Azure</a>, <a href="https://aws.amazon.com/" target="blank" rel="noopener noreferrer">AWS</a>, <a href="https://mlab.com/" target="blank" rel="noopener noreferrer">mLab</a></span>
              </li>
              <li>Mobile -
                <span> <a href="https://swift.org/" target="blank" rel="noopener noreferrer">Swift</a>, <a href="https://developer.apple.com/documentation/" target="blank" rel="noopener noreferrer">Xcode</a></span>
              </li>
              <li>Security -
                <span> <a href="https://www.npmjs.com/package/bcrypt" target="blank" rel="noopener noreferrer">Bcrypt</a></span>
              </li>
              <li>JS Style Guides -
                <span> <a href="https://github.com/airbnb/javascript" rel="noopener noreferrer" target="_blank">Airbnb</a>, <a href="https://google.github.io/styleguide/jsguide.html" rel="noopener noreferrer" target="_blank">Google</a></span>
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
