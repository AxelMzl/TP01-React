import React from 'react';
import { Grommet } from 'grommet';
	
import './fonts/Poppins-Regular.ttf'

import Navbar from './components/Navbar';
const theme = {
  global: {
    font: {
      family: 'Poppins-Regular',
      size: '14px',
    },
  },
  button: {
    focusIndicator: false
  }
};

const main = () => {
  return(
    <Grommet full theme={theme}>
      <Navbar />
    </Grommet>
  );
};
export default main;
