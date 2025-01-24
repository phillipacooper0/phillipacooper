import React from 'react';
import homePage from '../content/homepage.json'
import profilePicture from '../content/profilepicture.jpg'
import styles from './background.module.css'


const HomePage = () => {
    return (
        <div className={styles.standard}>
            <div className={styles.container}>
                <img src={profilePicture}>
                </img>
                <div>
                    <div className={styles.container}>
                        <h8>Name:</h8>
                        <p>{homePage.name}</p>
                    </div>
                    <div className={styles.container}>
                        <h8>Current Role:</h8>
                        <p>{homePage.currentRole}</p>
                    </div>
                    <div className={styles.container}>
                        <h8 >Current Workplace:</h8>
                        <p>{homePage.currentWorkplace}</p>
                    </div>
                    <div className={styles.container}>
                        <h8 >Currently Upskilling:</h8>
                        <p>{homePage.currentUpskilling}</p>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default HomePage;