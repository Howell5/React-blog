import React from 'react';

class Index extends React.Component {
  render() {
    return (
      <section id='top'>
        <div className='menu'>
          <a id='toggle'>
            <i className='icon-menu'></i>
          </a>
          <ul>
            <li>Home</li>
            <li>aticles</li>
            <li>About</li>
          </ul>
        </div>
        <div className='heading'></div>
      </section>
    );
  };
}

export default Index;