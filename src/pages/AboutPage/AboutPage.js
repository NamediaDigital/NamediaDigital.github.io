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
              I'm a full stack software engineer and developer.
               {/* - <span className="highlight">JS/MERN/MEAN + Python/Django + Swift/Xcode</span>. */}
            </p>
            <p>
              I'm passionate about learning new <a href="https://learn.lambdaschool.com/" rel="noopener noreferrer" target="_blank"><span className="highlight">Computer Science</span></a> skills, sharing new knowledge with other developers, constantly perfecting my current skill set, and building high-quality, well-designed, and bug-free software.
            </p>
            <p>
              A special shout-out to my instructors, mentors and friends over at <a href="https://mbsy.co/m2pDr" rel="noopener noreferrer" target="_blank"><span className="highlight">Lambda School</span></a> for helping me to get started in this awesome and highly rewarding profession.
              {/* My passion is building{' '}
              <span className="highlight"> cool apps</span> for my clients, friends, and family. 
              I have a passion for learning new technologies and I usually learn one new tech every month. */}
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
            <p>My <span className="highlight">Tools</span>:</p>
            <ul>
              <li><em>STYLE GUIDE</em> -
                <span> <a href="https://standardjs.com/index.html" rel="noopener noreferrer" target="_blank">StandardJS</a>, <a href="https://github.com/airbnb/javascript" rel="noopener noreferrer" target="_blank">Airbnb</a>, <a href="https://google.github.io/styleguide/jsguide.html" rel="noopener noreferrer" target="_blank">Google</a></span>
              </li>
              <li><em>UI/UX</em> -
                <span> <a href="https://www.w3schools.com/Css/" rel="noopener noreferrer" target="_blank">CSS</a>, <a href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank">SCSS</a>, <a href="http://lesscss.org/" rel="noopener noreferrer" target="_blank">LESS</a>, <a href="https://www.styled-components.com/" rel="noopener noreferrer" target="_blank">Styled-Components</a>, <a href="https://material.io/" rel="noopener noreferrer" target="_blank">Material Design</a>, <a href="https://material-ui.com/" rel="noopener noreferrer" target="_blank">Material-UI</a>, <a href="https://semantic-ui.com/" rel="noopener noreferrer" target="_blank">Semantic-UI</a>, <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap</a>, <a href="https://react-bootstrap.github.io/" rel="noopener noreferrer" target="_blank">React-Bootstrap</a>, <a href="https://kyleamathews.github.io/typography.js/" rel="noopener noreferrer" target="_blank">Typography.js</a></span>
              </li>
              <li><em>CLIENT</em> -
                <span> <a href="https://www.w3schools.com/html/" rel="noopener noreferrer" target="_blank">HTML</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener noreferrer" target="_blank">Javascript</a>, <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>, <a href="https://vuejs.org/" rel="noopener noreferrer" target="_blank">VueJS</a>, <a href="https://angular.io/" rel="noopener noreferrer" target="_blank">Angular</a>, <a href="https://redux.js.org/" rel="noopener noreferrer" target="_blank">Redux</a>, <a href="https://reacttraining.com/react-router/l" rel="noopener noreferrer" target="_blank">React Router</a>, <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">GatsbyJS</a>, <a href="https://surge.sh/" rel="noopener noreferrer" target="_blank">Surge</a></span>
              </li>
              <li><em>SERVER</em> -
                <span> <a href="http://expressjs.com/" rel="noopener noreferrer" target="_blank">Express</a>,&nbsp;
                <a href="https://nodejs.org/en/" target="blank" rel="noopener noreferrer">Node</a>,&nbsp;
                <a href="http://mongoosejs.com/" target="blank" rel="noopener noreferrer">Mongoose</a>,&nbsp;
                <a href="https://www.mongodb.com/" target="blank" rel="noopener noreferrer">Mongo</a>,&nbsp;
                <a href="http://docs.sequelizejs.com/" target="blank" rel="noopener noreferrer">Sequelize</a>,&nbsp;
                <a href="https://www.python.org/" target="blank" rel="noopener noreferrer">Python</a>,&nbsp;
                <a href="https://www.djangoproject.com/" target="blank" rel="noopener noreferrer">Django</a>,&nbsp;
                <a href="https://www.sqlite.org/index.html" target="blank" rel="noopener noreferrer">SQLite</a>,&nbsp;
                <a href="http://www.django-rest-framework.org/" target="blank" rel="noopener noreferrer">Django REST Framework</a>,&nbsp;
                <a href="https://graphql.org/" target="blank" rel="noopener noreferrer">GraphQL</a> - <a href="https://www.howtographql.com/" target="blank" rel="noopener noreferrer">Tutorial</a></span>
              </li>
              <li><em>TESTING JS</em> -
                <span> 
                  <a href="https://facebook.github.io/jest/" target="blank" rel="noopener noreferrer">Jest: <i>testrunner/assertions/display-watch/snapshots/mocks-spies-stubs/coverage</i></a>.<br/>
                  <a href="https://jasmine.github.io/" target="blank" rel="noopener noreferrer">Jasmine: <i>testrunner/assertions/display-watch/mocks-spies-stubs</i></a>.<br/>
                  <a href="https://mochajs.org/" target="blank" rel="noopener noreferrer">Mocha-<i>testrunner/display-watch</i></a>.<br/>
                  <a href="https://github.com/visionmedia/supertest" target="blank" rel="noopener noreferrer">Supertest-<i>NodeWebAPI</i></a>,&nbsp;
                  <a href="https://github.com/airbnb/enzyme" target="blank" rel="noopener noreferrer">Enzyme-<i>React/mocks&spies&stubs</i></a>,&nbsp;
                  <a href="http://www.chaijs.com/" target="blank" rel="noopener noreferrer">Chai-<i>assertions</i></a>,&nbsp;
                  <a href="http://sinonjs.org/" target="blank" rel="noopener noreferrer">Sinon-<i>mocks&spies&stubs</i></a>
                </span>
              </li>
              <li><em>DEPLOYMENT</em> -
                <span> <a href="https://firebase.google.com/" target="blank" rel="noopener noreferrer">Firebase</a>,&nbsp;
                <a href="https://www.mongodb.com/cloud" target="blank" rel="noopener noreferrer">MongoDB Atlas</a>,&nbsp;
                <a href="https://mlab.com/" target="blank" rel="noopener noreferrer">mLab</a>,&nbsp;
                <a href="https://pages.github.com/" target="blank" rel="noopener noreferrer">Github Pages</a>,&nbsp;
                <a href="https://www.netlify.com/" target="blank" rel="noopener noreferrer">Netlify</a>,&nbsp;
                <a href="https://www.heroku.com/" target="blank" rel="noopener noreferrer">Heroku</a>,&nbsp;
                <a href="https://azure.microsoft.com/en-us/" target="blank" rel="noopener noreferrer">Microsoft Azure</a>,&nbsp;
                <a href="https://aws.amazon.com/" target="blank" rel="noopener noreferrer">AWS</a>,&nbsp;
                <a href="https://mlab.com/" target="blank" rel="noopener noreferrer">mLab</a></span>
              </li>
              <li><em>MOBILE</em> -
                <span> <a href="https://facebook.github.io/react-native/" target="blank" rel="noopener noreferrer">React Native</a>,&nbsp;
                <a href="https://swift.org/" target="blank" rel="noopener noreferrer">Swift</a>,&nbsp;
                <a href="https://developer.apple.com/documentation/" target="blank" rel="noopener noreferrer">Xcode</a></span>
              </li>
              <li><em>SECURITY</em> -
                <span> <a href="https://jwt.io/" target="blank" rel="noopener noreferrer">JWT</a>,&nbsp;
                <a href="https://www.npmjs.com/package/bcrypt" target="blank" rel="noopener noreferrer">Bcrypt</a>,&nbsp;
                <a href="http://www.passportjs.org/" target="blank" rel="noopener noreferrer">Passport</a></span>
              </li>
              <li><em>Blockchain</em> -
                <span> <a href="https://www.ethereum.org/" target="blank" rel="noopener noreferrer">Ethereum</a>,&nbsp;
                <a href="https://github.com/ethereum/solidity" target="blank" rel="noopener noreferrer">Solidity</a>,&nbsp;
                <a href="https://metamask.io/" target="blank" rel="noopener noreferrer">MetaMask</a>,&nbsp;
                <a href="https://truffleframework.com/" target="blank" rel="noopener noreferrer">Truffle</a>,&nbsp;
                <a href="https://remix.ethereum.org/" target="blank" rel="noopener noreferrer">Remix</a>,&nbsp;
                <a href="https://github.com/ethereum/web3.js/" target="blank" rel="noopener noreferrer">Web3JS</a>,&nbsp;
                <a href="https://etherscan.io/" target="blank" rel="noopener noreferrer">EtherScan</a>,&nbsp;
                <a href="http://www.ethviewer.live/" target="blank" rel="noopener noreferrer">EthViewerLive</a>,&nbsp;
                <a href="https://www.stateofthedapps.com/" target="blank" rel="noopener noreferrer">State of the Dapps</a>
                </span>
              </li>
              <li><em>Other</em> -
                <span> <a href="https://github.com/" target="blank" rel="noopener noreferrer">Github - open source</a>,&nbsp;
                <a href="https://travis-ci.org/" target="blank" rel="noopener noreferrer">Travis CI - continuous integration</a></span>
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
