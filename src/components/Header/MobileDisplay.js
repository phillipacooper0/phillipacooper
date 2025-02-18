import { motion } from "framer-motion";
import {useState} from 'react';
import logo from './happy-duck.gif'
import styles from './Header.module.css'
import { IoIosMenu, IoMdClose } from "react-icons/io"
import SideNav from "../SideNav/SideNav"



const MobileDisplay = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    const Hamburger =<IoIosMenu size="30px" className={styles.hamburger} onClick={handleClick}/>


    return (
      <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      title="header"
        >  
      <div className={styles.header}>
        <img className={styles.image1}src={logo} alt="walking duck" />
        <a href='/phillipacooper'>Phillipa Cooper</a>
        {Hamburger}
        { <SideNav isClicked={isClicked}/>}
      </div>  
        
      </motion.header>
    )
}

export default MobileDisplay;