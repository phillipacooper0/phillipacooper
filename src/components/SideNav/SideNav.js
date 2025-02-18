import React from 'react';
import styles from './SideNav.module.css'; 

const SideNav = ({isClicked}) => {
    return (
        <nav className={`${styles.navbar} ${isClicked ? styles.open : ''}`}>            
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/workexperience">Work Experience</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default SideNav;