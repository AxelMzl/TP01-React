import React from 'react';
import { Box, Text, Heading, Image } from 'grommet';

import data from './Data';
const { SkillTitle, HtmlImg, CssImg, JSImg, PHPImg, ReactImg, ExperienceTitle, Experience1, Experience1Desc, Experience1Date, Experience2, Experience2Desc, Experience2Date } = data.fr.data;

const title = {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "24px"
}

const boxInfo = {
    width: "800px",
    margin: "0 auto",
    backgroundColor: "#f0f1f5",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: '3%'
}


const Skills = () => {
    return (
    <Box>
        <Box style={boxInfo}>
                <Heading style={title}>
                    {SkillTitle}
                </Heading>
            <Box direction="row-responsive" responsive={true} gap="large">
                <Box direction="column" gap="xsmall">
                    <Image className="html-img" background="accent-2" src={HtmlImg} size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"HTML5"}
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall"> 
                    <Image className="css-img" background="accent-2" src={CssImg} size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"CSS3"}
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall">
                    <Image className="javascript-img" background="accent-2" src={JSImg} size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"JavaScript"}
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall">
                    <Image className="php-img" background="accent-2" src={PHPImg} size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"PHP"}
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall">
                    <Image className="react-img" background="accent-2" src={ReactImg} size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"ReactJS"}
                    </Text>
                </Box>  
            </Box>
        </Box>
        
        <Box style={boxInfo}>
            <Heading style={title}>
                {ExperienceTitle}
            </Heading>
            <Box direction="row-responsive" responsive={true} gap="large">
                <Box direction="column" gap="xsmall">
                    <Text textAlign="center">
                        <Text>{Experience1} ({Experience1Date})</Text><Box/>
                        <Text size="12px">{Experience1Desc}</Text>
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall"> 
                    <Text textAlign="center">
                        <Text>{Experience2} ({Experience2Date})</Text><Box/>
                        <Text size="12px">{Experience2Desc}</Text>
                    </Text>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}
export default Skills;