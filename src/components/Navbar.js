import React from 'react';
import { Button } from 'grommet'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import CV from './Cv';
import Experience from './Experience';
import Home from './Home';

const button = {
  fontFamily: 'monospace',
  marginLeft: '25px',
};

const menu = {
  textAlign: 'center',
  margin: '0 auto'
};

export default () => (
    <Router>
    <div>
      <nav style={menu}>
          <Link to="/"><Button style={button} primary label="Home" /></Link>
          <Link to="/cv"><Button style={button} primary label="CV" /></Link>
          <Link to="/experience"><Button style={button} primary label="Expérience" /></Link>
      </nav>
      <Switch>
        <Route path="/cv">
          <CV />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </div>
  </Router>
);