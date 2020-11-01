import React, {useState} from 'react';
import { Header, Main, Box, Button, Footer, Text, Anchor } from 'grommet';
import { Next } from 'grommet-icons';

import Skills from './Skills';
import Resume from './Resume';

import data from './Data';
const { ChooseButton, Copyright, FooterButtonTxt, OriginalWebsiteLink } = data.fr.data;


const button = {
    backgroundColor: "#fc403f",
    margin: "0 auto",
    fontFamily: 'monospace',
    padding: '10px',
    color: "#ffffff",
    textTransform: "uppercase",
    textSize: "18px",
    marginBottom: "15px",
    border: "hidden"
};

const info = {
    padding: "30px",
    backgroundColor: "#f0f1f5",
    borderRadius: "10px"
}

const footerSection = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    backgroundColor: "#f0f1f5",
    color: "#000"
}

const footerButton = {
    backgroundColor: "#fc403f",
    padding: '10px',
    color: "#ffffff",
    textSize: "8px",
    border: "hidden"
}

const Competence = ({ type }) => {
    return (
        <Box>
            {type === 'resume' && (
                <Resume />
            )}
            {type === 'skills' && (
                <Skills />
            )}
        </Box>
    );

}

const MainContent = () => {
    const [choice, setChoice] = useState('resume');
    
    const handleClick = () => {
        setChoice(choice === 'resume' ? 'skills' : 'resume')
    };

    return(
        <Box>
            <Main pad="large">
                <Button fill="horizontal" onClick={handleClick} style={button} label={ChooseButton} icon={<Next color="#fff" />} reverse ></Button>
                <Competence type={choice}/>
            </Main>
            <Footer background="brand" pad="medium" style={footerSection}>
                <Text>{Copyright}</Text>
                <Button style={footerButton} label={FooterButtonTxt} href={OriginalWebsiteLink} target="_blank" />
            </Footer>
        </Box>
    );
}
export default MainContent;