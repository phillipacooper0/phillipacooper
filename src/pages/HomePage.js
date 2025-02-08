import React from 'react';
import homePage from '../content/homepage.json'
import profilePicture from '../content/profilepicture.jpg'
import styles from '../styles/background.module.css'
import globalStyles from '../styles/standard.module.css'
import gridStyles from '../styles/grid.module.css'


const HomePage = () => {
    return (
            <div className={styles.standard}>
                <div className={gridStyles.gridbytwocentered}>
                    <img className={globalStyles.roundimage}src={profilePicture}>
                    </img>
                    <div>
                        <div className={gridStyles.gridbytwocentered}>
                            <h8 className={globalStyles.bold}>Name:</h8>
                            <p className={globalStyles.p}>{homePage.name}</p>
                        </div>
                        <div className={gridStyles.gridbytwocentered}>
                            <h8 className={globalStyles.bold}>Current Role:</h8>
                            <p className={globalStyles.p}>{homePage.currentRole}</p>
                        </div>
                        <div className={gridStyles.gridbytwocentered}>
                            <h8 className={globalStyles.bold}>Current Workplace:</h8>
                            <p className={globalStyles.p}>{homePage.currentWorkplace}</p>
                        </div>
                        <div className={gridStyles.gridbytwocentered}>
                            <h8 className={globalStyles.bold}>Currently Upskilling:</h8>
                            <p className={globalStyles.p}>{homePage.currentUpskilling}</p>
                        </div>      
                    </div>
                </div>
            </div>
    )
}

export default HomePage;