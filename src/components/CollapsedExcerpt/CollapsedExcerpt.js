import React, {useState} from 'react';
import styles from './CollapsedExcerpt.module.css'

const CollapsedExcerpt = () => {
  // State to manage the visibility of the content
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(prevState => !prevState);  // Toggle the state
  };
    return (
        <div className={styles.collapsable}>
            <button onClick={toggleContent}>
                Some CollapsibleExcerptsText ↓
            </button>
            {isOpen && (
                   <p> This is some expanded content </p>
                )
}
        </div>

    )

}

export default CollapsedExcerpt;