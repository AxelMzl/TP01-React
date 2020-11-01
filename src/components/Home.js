import React from 'react';
import VideoBg from "reactjs-videobg";

import { Heading, Box, Avatar } from 'grommet';

const title = {
    color: 'white',
    margin: '0 auto',
    marginTop: '10%',
    marginBottom: '10%'
};

const name = {
    fontFamily: 'monospace',
    margin: 'none',
    marginLeft: '25px',
};

const avatar = {
    verticalAlign: 'middle',
    marginTop: '2px',
}

const VideoBackground = (props) => (
    <VideoBg>
      <VideoBg.Source src="video.mp4"type="video/mp4" />
    </VideoBg>
);

export default () => (
    <Box direction="column">
        <Box direction="row">
            <VideoBackground />
        </Box>
        <Box direction="row" style={title}>
            <Avatar style={avatar} src="axelmzl.jpg"/>
            <Heading style={name} margin="none">Axel Mazel</Heading>
        </Box>
    </Box>
);