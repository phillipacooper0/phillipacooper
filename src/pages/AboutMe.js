import React, { useState, useEffect } from 'react';
import aboutme from '../content/aboutme.json'
import styles from './background.module.css'
import { data } from 'framer-motion/client';


const AboutMe = () => {
    const [languages, setLanguages] = useState([])
    const [infra, setInfra] = useState([])
    const [databases, setDatabases] = useState([])
    const [nontechnical, setNontechnical] = useState([])
    const [other, setOther] = useState([])
    const [education, setEducation] = useState([])


    useEffect(()=>{
        setLanguages(aboutme.languages)
    })
    useEffect(()=>{
        setInfra(aboutme.infrastructure)
    })
    useEffect(()=>{
        setDatabases(aboutme.databases)
    })
    useEffect(()=>{
        setNontechnical(aboutme.nonTechnical)
    })
    useEffect(()=>{
        setOther(aboutme.other)
    })
    useEffect(() => {
        setEducation(aboutme.education)
    })


    return (
        <div className={styles.standard}> 
            <h5>Summary</h5>
            <p className={styles.card}>{aboutme.summary}</p>
            <h5>Education</h5>
            <div className={styles.containerbythreecentered}> 
                {education.map(item => 
                    <div className={styles.centeredcolumncard}>
                        <p className={styles.bold}>{item.name}</p>
                        <p className={styles.italic}>{item.year}</p>
                        <p>{item.place}</p> 
                    </div>
                )}
            </div>         
            <h5>Proficiencies</h5>
            <div className={styles.containerbythree}>
                <div className={styles.columncard}>
                    <h8>Languages:</h8>
                        <ul>
                        {
                            languages.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
                <div className={styles.columncard}>
                    <h8>Infrastructure:</h8>
                        <ul>
                        {
                            infra.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
                <div className={styles.columncard}>
                    <h8>Databases:</h8>
                        <ul>
                        {
                            databases.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
                <div className={styles.columncard}>
                    <h8>Non Technical:</h8>
                        <ul>
                        {
                            nontechnical.map((item) => 
                                <li>{item}</li>
                            )
                        }
                        </ul>              
                </div>
                <div className={styles.columncard}>
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