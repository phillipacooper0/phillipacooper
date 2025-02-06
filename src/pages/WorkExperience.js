import snsw from '../content/workexp_snsw.json'
import cisco from '../content/workexp_cisco.json'
import thales from '../content/workexp_thales.json'
import WorkExperienceCard from '../components/Card/WorkExperienceCard';
import styles from './background.module.css'


const WorkExperience = () => {
    return (
        <div className={styles.standard}>
            <WorkExperienceCard title={snsw.title} content={snsw.content}/>
            <WorkExperienceCard title={cisco.title} content={cisco.content}/>
            <WorkExperienceCard title={thales.title} content={thales.content}/>
        </div>
    )
}
export default WorkExperience;