import React, {useState} from 'react';
import { Header, Main, Box, Button } from 'grommet';
import { Next } from 'grommet-icons';

import Skills from './Skills';
import Resume from './Resume';

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

const info = {
    padding: "30px",
    backgroundColor: "#f0f1f5",
    borderRadius: "10px"
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
        <Header background="brand">
        </Header>,
        <Main pad="large">
            <Button fill="horizontal" onClick={handleClick} style={button} label={choice} icon={<Next />} reverse ></Button>
            <Competence type={choice}/>
        </Main>
    );
}
export default MainContent;