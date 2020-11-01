import React from 'react';
import { Box, Text, Heading, Image } from 'grommet';

const title = {
    color: "rgb(252, 64, 63)",
    fontFamily: 'monospace',
    textTransform: "uppercase",
}
const Skills = () => {
    return (
        <Box>
            <Box height="small">
                <Heading textAlign="center" style={title}>
                    {"Mes compétences"}
                </Heading>
            </Box>
            <Box basis="xsmall" />
            <Box direction="row-responsive" responsive={true} gap="large">
                <Box direction="column" gap="xsmall">
                    <Image className="html-img" background="accent-2" src="img/html.png" size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"HTML5"}
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall"> 
                    <Image className="css-img" background="accent-2" src="img/css.png" fit="contain" size="256px" /> 
                    <Text textAlign="center">
                        {"CSS3"}
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall">
                    <Image className="javascript-img" background="accent-2" src="img/javascript.png" size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"JavaScript"}
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall">
                    <Image className="php-img" background="accent-2" src="img/php.png" size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"PHP"}
                    </Text>
                </Box>
                <Box />
                <Box gap="xsmall">
                    <Image className="react-img" background="accent-2" src="img/react.png" size="256px" fit="contain" /> 
                    <Text textAlign="center">
                        {"React Native"}
                    </Text>
                </Box>  
            </Box>
        </Box>
            
    )
}
export default Skills;