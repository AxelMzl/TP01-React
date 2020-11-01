import React from 'react';
import { Button } from 'grommet'
import data from './Data';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Resume from './Resume';
import Experience from './Experience';
import HomePage from './Home';

const button = {
  fontFamily: 'monospace',
  marginLeft: '25px',
};

const menu = {
  textAlign: 'center',
  margin: '0 auto'
};

const { home, resume, experience } = data.menu;

const main = () => {
  return(
      <Router>
        <nav style={menu}>
            <Link to="/"><Button style={button} primary label={home} /></Link>
            <Link to="/resume"><Button style={button} primary label={resume} /></Link>
            <Link to="/experience"><Button style={button} primary label={experience} /></Link>
        </nav>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
};
export default main;