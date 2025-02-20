import React from 'react';
import styles from './SideNav.module.css'; 

const SideNav = ({isClicked}) => {
    return (
        <nav className={`${styles.navbar} ${isClicked ? styles.open : ''}`}>            
            <ul>
                <li><a href="/phillipacooper/">Home</a></li>
                <li><a href="/phillipacooper/#/about">About</a></li>
                <li><a href="/phillipacooper/#/workexperience">Work Experience</a></li>
                <li><a href="/phillipacooper/#/projects">Projects</a></li>
                <li><a href="/phillipacooper/#/contacts">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default SideNav;