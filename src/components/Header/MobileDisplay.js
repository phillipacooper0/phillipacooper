import { motion } from "framer-motion";
import {useState, useEffect} from 'react';
import logo from './happy-duck.gif'
import styles from './Header.module.css'
import { IoIosMenu} from "react-icons/io"
import SideNav from "../SideNav/SideNav"

const MobileDisplay = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    const Hamburger =<IoIosMenu size="30px" className={styles.hamburger} onClick={handleClick}/>
    const handleLinkClicked = () => {
      setIsClicked(false);
    }

    useEffect(() => {
      if (isClicked) {
        // Disable scrolling when the menu is open
        document.body.style.overflow = 'hidden';
      } else {
        // Enable scrolling when the menu is closed
        document.body.style.overflow = 'auto';
      }
  
      // Cleanup effect when the component is unmounted or menu state changes
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isClicked]);

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
        { <SideNav isClicked={isClicked} closeSideBar={handleLinkClicked}/>}
      </div>  
        
      </motion.header>
    )
}

export default MobileDisplay;