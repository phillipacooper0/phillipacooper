import React, {useState} from 'react';
import styles from './CollapsedExcerpt.module.css'

const CollapsedExcerpt = ({title, content}) => {
  // State to manage the visibility of the content
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(prevState => !prevState);  // Toggle the state
  };
    return (
        <div className={styles.collapsable}>
            <button onClick={toggleContent}>
                {title} ↓
            </button>
            {isOpen && (
                   <p> {content} </p>
                )
}
        </div>

    )

}

export default CollapsedExcerpt;