import React from 'react';
// import "App.css";

function About(props) {
  return (
    <div className="about">
        <h1>About Celetris LLC</h1>
        <p>
            Celetris LLC is a software development company based in Washington state, USA. Celetris specializes in developing cloud apps and developer tools.
            View our open source projects on Celetra's GitHub profile: https://github.com/Celetra. 
        </p>
        <h1>Road Map</h1>
        <p>
            The following projects are in the works:
        </p>
        <h2>CeletraLabs</h2>
        <p>
            CeletraLabs is an upcoming blog to feature projects by Celetris LLC founder Celetra. CeletraLabs aims to share information
            freely to inspire developers, makers, and lifelong learners.
        </p>
    </div>
  );
}

export default About;