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
  })

  useEffect(()=>{
    setOutcomes(content.outcomes)
  })

  useEffect(()=>{
    setResponsibilities(content.responsibilities)
  })


  const toggleContent = () => {
    setIsOpen(prevState => !prevState);  // Toggle the state
  };



    return (
        <div className={styles.collapsable}>
            <button className={globalStyles.bold} onClick={toggleContent}>
                {title} ↓
            </button>
            {isOpen && (
                  <div>
                      <p className={globalStyles.bold}>{content.organisation}</p>
                      <p className={globalStyles.italic}> {content.dates} </p>
                      <div1>Description</div1>
                      <p className={globalStyles.p}>{content.description}</p>
                      <div1>Key Responsibilities</div1>
                      <ul>
                          {
                              responsibilities.map((item) => 
                                  <li>{item}</li>
                              )
                          }
                        </ul>  
                      <div1>Outcomes</div1>
                        <ul>
                            {
                                outcomes.map((item) => 
                                    <li>{item}</li>
                                )
                            }
                        </ul>  
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