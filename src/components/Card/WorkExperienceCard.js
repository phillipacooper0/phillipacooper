import React, {useState, useEffect} from 'react';
import globalStyles from '../../styles/standard.module.css'
import cardStyles from '../../styles/card.module.css'


const WorkExperienceCard = ({title, content}) => {
    const [responsibilities, setResponsibilities] = useState([])

    useEffect(() => {
        setResponsibilities(content.key_responsibilities)
    })


    return (
        <div className={cardStyles.card}>
            <h5 className={globalStyles.bold} >{title}</h5>
            <p className={globalStyles.italic} >{content.dates}</p>
            <p className={globalStyles.p} >{content.role}</p>
            <ul>
                {
                    responsibilities.map((item) => 
                        <li>{item}</li>
                    )
                }
            </ul>  
            <p className={globalStyles.italic}>{content.stack}</p>
        </div>
    )

}

export default WorkExperienceCard;