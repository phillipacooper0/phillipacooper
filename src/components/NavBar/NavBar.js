import styles from "./NavBar.module.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); 

    const handleClick = (linkName, e) => {
        setActiveLink(linkName); 
    };

    return (
        <div className={styles.navbar} title="fixed-navigation" role="navigation" aria-label="fixed-navigation-bar">
            <Link to="/" onClick={(e) => handleClick('home', e)} className={`${styles.navbarLink} ${activeLink === 'home' ? styles.navbarLinkActive : ''}`} title="home-page-link-button" aria-label="home-page-link-button">Home Page</Link>
            <Link to="/about" onClick={(e) => handleClick('about', e)} className={`${styles.navbarLink} ${activeLink === 'about' ? styles.navbarLinkActive : ''}`} title="about-me-link-button" aria-label="about-me-page-link-button">About Me</Link>
            <Link to="/workexperience" onClick={(e) => handleClick('workexperience', e)} className={`${styles.navbarLink} ${activeLink === 'workexperience' ? styles.navbarLinkActive : ''}`} title="work-experience-link-button" aria-label="work-experience-link-button">Work Experience</Link>
            <Link to="/projects" onClick={(e) => handleClick('projects', e)} className={`${styles.navbarLink} ${activeLink === 'projects' ? styles.navbarLinkActive : ''}`} title="projects-link-button" aria-label="projects-link-button">Projects</Link>
            <Link to="/contacts" onClick={(e) => handleClick('contacts', e)} className={`${styles.navbarLink} ${activeLink === 'contacts' ? styles.navbarLinkActive : ''}`} title="contacts-link-button" aria-label="contacts-link-button">Contacts</Link>
        </div>
    )
}
export default NavBar;