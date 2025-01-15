import React from 'react';
import aboutme from '../content/aboutme.json'


const AboutMe = () => {
    return (
        <p>{aboutme.content}</p>    
    )
}

export default AboutMe;