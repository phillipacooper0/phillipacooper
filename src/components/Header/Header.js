import React from 'react';
import styles from './Header.module.css'
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar"
import logo from './happy-duck.gif'
import linkedInLogo from './linkedin.png'
import githubLogo from './github.png'


const CustomHeader = () => {
    return (
    <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    title="header"
      >  
    <div className={styles.header}>
      <img className={styles.image1}src={logo} alt="walking duck" />
      <a href='/'>Phillipa Cooper</a>
    <div2 className={styles.div2}>
        <img className={styles.image2} src={linkedInLogo} alt="linkedIn logo"/>
        <img className={styles.image2} src={githubLogo} alt="github logo"/> 
      </div2>
    </div>
      <NavBar/>
    </motion.header>
    )
}
export default CustomHeader;