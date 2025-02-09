import CollapsedExcerpt from '../components/CollapsedExcerpt/CollapsedExcerpt';
import svoc from '../content/projects_svoc.json'
import myaccount from '../content/projects_myaccount.json'
import nssot from '../content/projects_nssot.json'
import sims from '../content/projects_simlab.json'
import globalStyles from '../styles/standard.module.css'


const Projects = () => {
    return (
        <div className={globalStyles.standard}>
            <CollapsedExcerpt title={myaccount.title} content={myaccount.content}></CollapsedExcerpt>
            <CollapsedExcerpt title={svoc.title} content={svoc.content}></CollapsedExcerpt>
            <CollapsedExcerpt title={nssot.title} content={nssot.content}></CollapsedExcerpt>
            <CollapsedExcerpt title={sims.title} content={sims.content}></CollapsedExcerpt>

        </div>
    )
}
export default Projects;