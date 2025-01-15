import React from 'react';
import styles from './Header.module.css'
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar"

const CustomHeader = () => {
    return (
    <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
      >  
    <div className={styles.header}>
        <div class="tenor-gif-embed" data-postid="24800350" data-share-method="host" data-aspect-ratio="1" data-width="1n"><a href="https://tenor.com/view/sei-la-gif-24800350">Duck Walking GIF</a>from <a href="https://tenor.com/search/sei+la-gifs">Sei La GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>        
        <a href='/'>Phillipa Cooper</a>
    </div>
      <NavBar/>
    </motion.header>
    )
}
export default CustomHeader;