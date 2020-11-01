import React from 'react';
import { Box, Avatar } from 'grommet';


import data from './Data';
const { name, firstname, resumeLink, downloadButton, presentation, photoLink } = data.fr.data;

const avatarSize = {
    width: "200px",
    height: "200px",
    margin: "0 auto"
}

const boxInfo = {
    width: "700px",
    marginLeft: "10%",
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

const text = {
    
}

const Resume = () => {
    return(
        <Box>
            <Box direction="row" gap="xsmall" style={boxInfo}>
                <Box width="300px">
                    <Avatar style={avatarSize} src={photoLink}/>
                </Box>
                <Box width="400px" style={boxInfoContent}>
                    <Box style={titleName}>{firstname} {name}</Box><Box/>
                    <Box style={text}>{presentation}</Box>
                </Box>
            </Box>
            <Box direction="row">
                <a href={resumeLink} target="_blank" class="btn-st" rel="noopener">{downloadButton}</a>
            </Box>
        </Box>
    );
}
export default Resume;