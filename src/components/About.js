import React, { Component, PureComponent } from 'react';

class About extends PureComponent {
  render() {
    const apiHost = process.env.TEST_API_HOST;
    const environment = process.env.TEST_NODE_ENV;
    console.log('apihost', apiHost);
    console.log('environment', environment);
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router to produce a people tracking/management application.</p>
        <p>Tracking of Students, Ranks, Testings and Touraments</p>
      </div>
    );
  }
}

export default About;
