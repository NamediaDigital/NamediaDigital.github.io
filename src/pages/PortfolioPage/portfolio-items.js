import React from 'react';

export default [{
  name: 'GoodNews',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Good News
      </div>
      <div className='portfolio-item__desc'>
        The Good News Project is a news aggregator that uses machine learning to remove clickbait news articles.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-node"></i>
        <i className="fab fa-python"></i>
        {/* <i className="fab fa-bitcoin"></i>
        <i className="fab fa-ethereum"></i>
        <i className="fab fa-js"></i> */}
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.good-news.io/">LIVE</a>
        <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/gNH1BokSgt4"><i class="fab fa-youtube"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://labs7goodnews.herokuapp.com/">DEV</a>

      </div>
    </div>
  )
}, {
  name: 'PicMe',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        PicMe 
      </div>
      <div className='portfolio-item__desc'>
        Upload pictures and tag/share with friends so they can choose which ones to download for themselves 
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-node"></i>
        {/* <i className="fab fa-bitcoin"></i>
        <i className="fab fa-ethereum"></i> */}
        {/* <i className="fab fa-css3"></i> */}
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.picmecollections.com/">LIVE</a>
        <a target="_blank" rel="noopener noreferrer" href="https://picmecollections.netlify.com/#/">DEV</a>
      </div>
    </div>
  )
}, {
  name: 'KnowledgeRocket',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Knowledge Rocket
      </div>
      <div className='portfolio-item__desc'>
        The customers for this product are teachers who wish to provide automated knowledge reminders for their students.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-node"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.knowledgerocket.app/">LIVE</a>
        <a target="_blank" rel="noopener noreferrer" href="https://knowledge-rocket-v1.herokuapp.com/">DEV</a>
      </div>
    </div>
  )
}, {
  name: 'Namedia Blog',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
      Namedia Blog
      </div>
      <div className='portfolio-item__desc'>
      non-TL;DR articles about software engineering and photography
      </div>
      <div className='portfolio-item__icon'>
        {/* <i className="fab fa-js"></i> */}
        <i class="fas fa-code"></i>
        <i class="fas fa-camera-retro"></i>
      </div>
      <div className='portfolio-item__links'>
        {/* <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/browser-or-node">NPM</a> */}
        <a target="_blank" rel="noopener noreferrer" href="https://blog.namedia.digital/">LIVE</a>
      </div>
    </div>
  )
}, {
  name: 'Passport',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Passport
      </div>
      <div className='portfolio-item__desc'>
        Authentication middleware for Node.js. Open Source Project Contributor
      </div>
      <div className='portfolio-item__icon'>
        {/* <i className="fab fa-react"></i> */}
        <i className="fab fa-js"></i>
        <i className="fab fa-node"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='portfolio-item__links'>
        {/* <a target="_blank" rel="noopener noreferrer" href="https://dev.to/flexdinesh/react-redux-boilerplate-with-best-practices--2pp5">Blog</a> */}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sharp0111/passport">GITHUB</a>
      </div>
    </div>
  )
}, {
  name: 'Gatsby',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Gatsby
      </div>
      <div className='portfolio-item__desc'>
        Blazing fast apps with React. Open Source Project Contributor
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sharp0111/gatsby">GITHUB</a>
      </div>
    </div>
  )
}]