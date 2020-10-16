import React from 'react';
import { Grommet } from 'grommet';

import HomePage from './components/Home';
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export default function App() {
  return (
    <Grommet theme={theme}>
      <HomePage />
    </Grommet>
  );
}
