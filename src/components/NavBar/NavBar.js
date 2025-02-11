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
            <Link to="/" onClick={(e) => handleClick('home', e)} className={`${styles.navbarLink} ${activeLink === 'home' ? styles.navbarLinkActive : ''}`}>Home Page</Link>
            <Link to="/about" onClick={(e) => handleClick('about', e)} className={`${styles.navbarLink} ${activeLink === 'about' ? styles.navbarLinkActive : ''}`}>About Me</Link>
            <Link to="/workexperience" onClick={(e) => handleClick('workexperience', e)} className={`${styles.navbarLink} ${activeLink === 'workexperience' ? styles.navbarLinkActive : ''}`}>Work Experience</Link>
            <Link to="/projects" onClick={(e) => handleClick('projects', e)} className={`${styles.navbarLink} ${activeLink === 'projects' ? styles.navbarLinkActive : ''}`}>Projects</Link>
            <Link to="/contacts" onClick={(e) => handleClick('contacts', e)} className={`${styles.navbarLink} ${activeLink === 'contacts' ? styles.navbarLinkActive : ''}`}>Contacts</Link>
        </div>
    )
}
export default NavBar;