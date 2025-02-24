import React, {useState, useEffect} from 'react';
import MobileDisplay from './MobileDisplay'
import WebDisplay from './WebDisplay'

const CustomHeader = () => {

  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    setIsMobile(window.outerWidth <= 1024); 
  };

  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

    return ( 
        <div>
            {isMobile && <MobileDisplay/>} 
            {!isMobile && <WebDisplay/>} 
        </div>
    )
}
export default CustomHeader;