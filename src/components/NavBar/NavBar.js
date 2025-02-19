import styles from "./NavBar.module.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); 

    const handleClick = (linkName, e) => {
        setActiveLink(linkName); 
    };

    return (
        <div className={styles.navbar} title="navbar" >
            <Link to="/phillipacooper/#/" onClick={(e) => handleClick('home', e)} className={`${styles.navbarLink} ${activeLink === 'home' ? styles.navbarLinkActive : ''}`}>Home Page</Link>
            <Link to="/phillipacooper/#/about" onClick={(e) => handleClick('about', e)} className={`${styles.navbarLink} ${activeLink === 'about' ? styles.navbarLinkActive : ''}`}>About Me</Link>
            <Link to="/phillipacooper/#/workexperience" onClick={(e) => handleClick('workexperience', e)} className={`${styles.navbarLink} ${activeLink === 'workexperience' ? styles.navbarLinkActive : ''}`}>Work Experience</Link>
            <Link to="/phillipacooper/#/projects" onClick={(e) => handleClick('projects', e)} className={`${styles.navbarLink} ${activeLink === 'projects' ? styles.navbarLinkActive : ''}`}>Projects</Link>
            <Link to="/phillipacooper/#/contacts" onClick={(e) => handleClick('contacts', e)} className={`${styles.navbarLink} ${activeLink === 'contacts' ? styles.navbarLinkActive : ''}`}>Contacts</Link>
        </div>
    )
}
export default NavBar;