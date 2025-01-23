import React from 'react';
import aboutme from '../content/aboutme.json'
import styles from './background.module.css'


const AboutMe = () => {
    return (
        <p className={styles.standard}>{aboutme.content}</p>    
    )
}

export default AboutMe;