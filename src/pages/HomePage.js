import React from 'react';
import homePage from '../content/homepage.json'
import styles from './background.module.css'


const HomePage = () => {
    return (
        <div className={styles.standard}>
            <p>This is some homepage text</p>
            <p>{homePage.name}</p>    
        </div>
    )
}

export default HomePage;