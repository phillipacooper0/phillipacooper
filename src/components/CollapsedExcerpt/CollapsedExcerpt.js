import React, {useState, useEffect} from 'react';
import styles from './CollapsedExcerpt.module.css'
import globalStyles from '../../styles/standard.module.css'


const CollapsedExcerpt = ({title, content}) => {
  // State to manage the visibility of the content
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState([])
  const [responsibilities, setResponsibilities] = useState([])
  const [outcomes, setOutcomes] = useState([])

  useEffect(()=>{
    setSkills(content.skills)
  }, [content.skills])

  useEffect(()=>{
    setOutcomes(content.outcomes)
  }, [content.outcomes])

  useEffect(()=>{
    setResponsibilities(content.responsibilities)
  }, [content.responsibilities])

  const toggleContent = () => {
    setIsOpen(prevState => !prevState);  
  };

    return (
        <div className={styles.collapsable} title="collapsible" role="region" aria-label="collapsible content">
            <button className={globalStyles.bold} onClick={toggleContent} title="collapsible-button"  aria-label="collapsible-button">
                {title} ↓
            </button>
            {isOpen && (
                  <div>
                      <p className={globalStyles.bold} title="organisation" aria-label="organisation">{content.organisation}</p>
                      <p className={globalStyles.italic} title="dates" aria-label="dates"> {content.dates} </p>
                      <div1>Description</div1>
                      <p title="description" aria-label="description">{content.description}</p>
                      <div1>Key Responsibilities</div1>
                      <ul title="list of responsibilities" aria-label="list of responsibilities">
                          {
                              responsibilities.map((item) => 
                                  <li>{item}</li>
                              )
                          }
                        </ul>  
                      <div1>Outcomes</div1>
                        <ul title="list of outcomes" aria-label="list of outcomes">
                            {
                                outcomes.map((item) => 
                                    <li>{item}</li>
                                )
                            }
                        </ul>  
                      <div1>Skills Used</div1>
                        <ul title="list of skills used" aria-label="list of skills used">
                          {
                              skills.map((item) => 
                                  <li>{item}</li>
                              )
                          }
                        </ul>  
                   </div>
                )}
        </div>
    )
}

export default CollapsedExcerpt;