import React, {useState, useEffect} from 'react';
import styles from './CollapsedExcerpt.module.css'

const CollapsedExcerpt = ({title, content}) => {
  // State to manage the visibility of the content
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState([])
  const [responsibilities, setResponsibilities] = useState([])


  useEffect(()=>{
    setSkills(content.skills)
  })
  useEffect(()=>{
    setResponsibilities(content.responsibilities)
  })


  const toggleContent = () => {
    setIsOpen(prevState => !prevState);  // Toggle the state
  };



    return (
        <div className={styles.collapsable}>
            <button className={styles.bold} onClick={toggleContent}>
                {title} ↓
            </button>
            {isOpen && (
                  <div>
                      <p className={styles.bold}>{content.organisation}</p>
                      <p className={styles.italic}> {content.dates} </p>
                      <div1>Description</div1>
                      <p>{content.description}</p>
                      <div1>Key Responsibilities</div1>
                      <p>{responsibilities}</p>
                      <div1>Outcomes</div1>
                      <p>{content.outcomes}</p>
                      <div1>Skills Used</div1>
                      <ul>
                        {
                            skills.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>  
                   </div>
                )
}
        </div>

    )

}

export default CollapsedExcerpt;