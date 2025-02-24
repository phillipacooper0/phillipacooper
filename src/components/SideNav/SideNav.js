import React from 'react';
import styles from './SideNav.module.css'; 

const SideNav = ({isClicked, closeSideBar}) => {
   return (
        <nav className={`${styles.navbar} ${isClicked ? styles.open : ''}`}>            
            <ul>
                <li><a onClick={closeSideBar} href="/phillipacooper/">Home</a></li>
                <li><a onClick={closeSideBar} href="/phillipacooper/#/about">About</a></li>
                <li><a onClick={closeSideBar} href="/phillipacooper/#/workexperience">Work Experience</a></li>
                <li><a onClick={closeSideBar} href="/phillipacooper/#/projects">Projects</a></li>
                <li><a onClick={closeSideBar} href="/phillipacooper/#/contacts">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default SideNav;