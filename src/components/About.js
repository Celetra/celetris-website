import React from 'react';

function About(props) {
  return (
    <div className="textblock">
        <h1>$> About Celetris_</h1>
        <p>
            Celetris LLC is a software development company based in Washington state, USA.
            We specialize in developing websites, cloud software, and developer tools.
            View our open source projects on GitHub.
        </p>
        <p>
          <a href="https://github.com/Celetra" target="_blank">https://github.com/Celetra</a> 
        </p>
        <h2>Road Map</h2>
        <p>
            Here's what we're working on.
        </p>
        <h3>CeletraLabs</h3>
        <p>
            CeletraLabs is a blog featuring projects by Celetris founder Nick King, a.k.a. Celetra.
            CeletraLabs embraces the hacker spirit of sharing information
            freely with developers, makers, and lifelong learners.
        </p>
    </div>
  );
}

export default About;