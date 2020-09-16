import React from 'react';
// import "App.css";

function About(props) {
  return (
    <div className="textblock">
        <h1>$> About Celetris LLC _</h1>
        <p>
            Celetris LLC is a software development company based in Washington state, USA.
            We specialize in developing websites, cloud software, and developer tools.
            View our open source projects on GitHub.<br/>
            <a href="https://github.com/Celetra" target="_blank">https://github.com/Celetra</a> 
        </p>
        <h1>Road Map</h1>
        <p>
            Here's what we're working on.
        </p>
        <h2>CeletraLabs</h2>
        <p>
            CeletraLabs is a blog featuring projects by Celetris founder Nick King, a.k.a. Celetra.
            CeletraLabs embraces the hacker spirit of sharing information
            freely with developers, makers, and lifelong learners.
        </p>
    </div>
  );
}

export default About;