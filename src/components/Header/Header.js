import React from 'react';
import styles from './Header.module.css'
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar"
import logo from './happy-duck.gif'


const CustomHeader = () => {
    return (
    <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
      >  
    <div className={styles.header}>
      <img src={logo} alt="walking duck" />
      <a href='/'>Phillipa Cooper</a>
    </div>
      <NavBar/>
    </motion.header>
    )
}
export default CustomHeader;