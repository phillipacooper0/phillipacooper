import React from 'react';
import styles from './SideNav.module.css'; 

const SideNav = ({isClicked, closeSideBar}) => {
   return (
        <nav className={`${styles.navbar} ${isClicked ? styles.open : ''}`} role="navigation" title="dropdown-navigation" alt="dropdown-navigation-list">            
            <ul>
                <li><a onClick={closeSideBar} href="/phillipacooper/" title="home-page-link-button" aria-label="home-page-link-button">Home</a></li>
                <li><a onClick={closeSideBar} href="/phillipacooper/#/about" title="about-me-link-button" aria-label="about-me-link-button">About</a></li>
                <li><a onClick={closeSideBar} href="/phillipacooper/#/workexperience" title="work-experience-link-button" aria-label="work-experience-link-button">Work Experience</a></li>
                <li><a onClick={closeSideBar} href="/phillipacooper/#/projects" title="projects-link-button" aria-label="projects-link-button">Projects</a></li>
                <li><a onClick={closeSideBar} href="/phillipacooper/#/contacts" title="contacts-link-button" aria-label="contacts-link-button">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default SideNav;