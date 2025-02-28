import React, { useState, useEffect } from 'react';
import aboutme from '../content/aboutme.json'
import globalStyles from '../styles/standard.module.css'
import cardStyles from '../styles/card.module.css'
import gridStyles from '../styles/grid.module.css'


const AboutMe = () => {
    const [languages, setLanguages] = useState([])
    const [infra, setInfra] = useState([])
    const [databases, setDatabases] = useState([])
    const [nontechnical, setNontechnical] = useState([])
    const [other, setOther] = useState([])
    const [education, setEducation] = useState([])


    useEffect(()=>{
        setLanguages(aboutme.languages)
    }, [])
    
    useEffect(()=>{
        setInfra(aboutme.infrastructure)
    }, [])

    useEffect(()=>{
        setDatabases(aboutme.databases)
    }, [])

    useEffect(()=>{
        setNontechnical(aboutme.nonTechnical)
    }, [])

    useEffect(()=>{
        setOther(aboutme.other)
    }, [])

    useEffect(() => {
        setEducation(aboutme.education)
    }, [])


    return (
        <div className={globalStyles.standard}> 
            <h5>Summary</h5>
            <p className={cardStyles.card}>{aboutme.summary}</p>
            <h5>Education</h5>
            <div className={gridStyles.gridbythreecentered}> 
                {education.map(item => 
                    <div className={gridStyles.gridcard}>
                        <p className={globalStyles.bold}>{item.name}</p>
                        <p className={globalStyles.italic}>{item.year}</p>
                        <p className={globalStyles.p}>{item.place}</p> 
                    </div>
                )}
            </div>         
            <h5>Proficiencies</h5>
            <div className={gridStyles.gridbythreeleft}>
                <div className={gridStyles.gridcard}>
                    <h8>Languages:</h8>
                        <ul>
                        {
                            languages.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
                <div className={gridStyles.gridcard}>
                    <h8>Infrastructure:</h8>
                        <ul>
                        {
                            infra.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
                <div className={gridStyles.gridcard}>
                    <h8>Databases:</h8>
                        <ul>
                        {
                            databases.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
                <div className={gridStyles.gridcard}>
                    <h8>Non Technical:</h8>
                        <ul>
                        {
                            nontechnical.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
                <div className={gridStyles.gridcard}>
                    <h8>Other:</h8>
                        <ul>
                        {
                            other.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
            </div>
        </div>
    )
}

export default AboutMe;