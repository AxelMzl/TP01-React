import React from 'react';
import { Box, Avatar, Button, Heading } from 'grommet';


import data from './Data';
const { name, firstname, resumeLink, downloadButton, presentation, photoLink } = data.fr.data;

const avatarSize = {
    width: "250px",
    height: "250px",
    margin: "0 auto"
}

const boxInfo = {
    width: "700px",
    margin: "0 auto",
    backgroundColor: "#f0f1f5",
    borderRadius: "10px",
    padding: "10px"
}

const boxInfoContent = {
    marginTop: "10px",
    verticalAlign: "middle"
}

const titleName = {
    fontSize: "24px",
    textAlign: "center"
}

const boxDownload = {
    marginTop: "5%"
}

const button = {
    backgroundColor: "#fc403f",
    margin: "0 auto",
    fontFamily: 'monospace',
    padding: '10px',
    color: "#ffffff",
    textTransform: "uppercase",
    textSize: "18px",
    marginBottom: "15px"
};


const Resume = () => {
    return(
        <Box>
            <Box direction="row" gap="xsmall" style={boxInfo}>
                <Box width="300px">
                    <Avatar style={avatarSize} src={photoLink}/>
                </Box>
                <Box width="400px" style={boxInfoContent}>
                    <Heading style={titleName}>{firstname} {name}</Heading><Box/>
                    <Box>{presentation}</Box>
                </Box>
            </Box>
            <Box direction="row" style={boxDownload}>
                <Button style={button} href={resumeLink} target="_blank">{downloadButton}</Button>
            </Box>
        </Box>
    );
}
export default Resume;