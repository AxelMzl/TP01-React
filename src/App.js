import React from 'react';
import ReactDOM from 'react-dom';
import VideoBg from "reactjs-videobg";

import { Grommet, Heading, Box, Avatar, Video } from 'grommet';
import { Notification, Home, ChatOption, UserFemale } from 'grommet-icons';

import Name from './components/Name';
import Navbar from './components/Navbar';
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

const VideoBackground = (props) => (
    <VideoBg>
      <VideoBg.Source src="video.mp4"type="video/mp4" />
    </VideoBg>
);

export default () => (
    <Grommet theme={theme}>
      <Box direction="column">
        <Box direction="row">
          <VideoBackground />
        </Box>
        <Box direction="row">
          <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"/>
          <Heading margin="none">Axel Mazel</Heading>
        </Box>
      </Box>
    </Grommet>
);
