import React from 'react';
import homePage from '../content/homepage.json'
import profilePicture from '../content/profilepicture.jpg'
import globalStyles from '../styles/standard.module.css'
import gridStyles from '../styles/grid.module.css'


const HomePage = () => {
    return (
            <div className={globalStyles.standard}>
                <div className={gridStyles.gridbytwocentered}>
                    <img className={globalStyles.roundimage}src={profilePicture}>
                    </img>
                    <div>
                        <div className={gridStyles.gridbytwocentered}>
                            <h8>Name:</h8>
                            <p >{homePage.name}</p>
                        </div>
                        <div className={gridStyles.gridbytwocentered}>
                            <h8>Current Role:</h8>
                            <p >{homePage.currentRole}</p>
                        </div>
                        <div className={gridStyles.gridbytwocentered}>
                            <h8>Current Workplace:</h8>
                            <p >{homePage.currentWorkplace}</p>
                        </div>
                        <div className={gridStyles.gridbytwocentered}>
                            <h8>Currently Upskilling:</h8>
                            <p >{homePage.currentUpskilling}</p>
                        </div>      
                    </div>
                </div>
            </div>
    )
}

export default HomePage;