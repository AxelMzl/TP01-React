import React from 'react';
import { Button } from 'grommet'
import data from './Data';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AboutMe from './AboutMe';
import HomePage from './Home';

const button = {
  fontFamily: 'monospace',
  marginLeft: '25px',
  backgroundColor: '#fc403f',
  border: 'none',
};

const menu = {
  textAlign: 'center',
  margin: '0 auto',
  marginTop: '5%'
};

const { home, aboutme } = data.fr.menu;

const main = () => {
  return(
      <Router>
        <nav style={menu}>
            <Link to="/"><Button style={button} primary label={home} /></Link>
            <Link to="/AboutMe"><Button style={button} primary label={aboutme} /></Link>
        </nav>
        <Switch>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
};
export default main;