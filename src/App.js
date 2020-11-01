import React from 'react';
import { Grommet } from 'grommet';

import Navbar from './components/Navbar';
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const main = () => {
  return(
    <Grommet theme={theme}>
      <Navbar />
    </Grommet>
  );
};
export default main;
