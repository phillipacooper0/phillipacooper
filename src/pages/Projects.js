import CollapsedExcerpt from '../components/CollapsedExcerpt/CollapsedExcerpt';
import svoc from '../content/svoc.json'
import myaccount from '../content/myaccount.json'
import nssot from '../content/nssot.json'

const Projects = () => {
    return (
        <div>
            <CollapsedExcerpt title={myaccount.title} content={myaccount.content}></CollapsedExcerpt>
            <CollapsedExcerpt title={svoc.title} content={svoc.content}></CollapsedExcerpt>
            <CollapsedExcerpt title={nssot.title} content={nssot.content}></CollapsedExcerpt>
        </div>
    )
}
export default Projects;