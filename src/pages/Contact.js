import content from '../content/contact.json'
import linkedInLogo from '../content/linkedin.png'
import githubLogo from '../content/github.png'
import gridStyles from '../styles/grid.module.css'
import globalStyles from '../styles/standard.module.css'

const Contact = () => {

    const redirectToLinkedIn = () =>{
        window.location.href = "http://www.linkedin.com/in/phillipa-cooper-72095a136/";
      }
    
      const redirectToGithub = () => {
        window.location.href = "https://github.com/phillipacooper0";
      }
    

    return (
        <div className={globalStyles.standard}>
            <div className={gridStyles.gridbytwocentered}>
                <div1>Email</div1>
                <p>{content.email}</p>
            </div>
            <div className={gridStyles.gridbytwocentered}>
                <div1>Location</div1>
                <p>{content.location}</p>
            </div>
            <div className={gridStyles.gridbytwocentered}>
                <div1>Socials</div1>
                <div className={gridStyles.gridbytwoleft}>
                    <div style={{cursor: 'pointer'}} onClick={redirectToLinkedIn}> 
                        <img className={globalStyles.rectangularimage} src={linkedInLogo} alt="linkedIn logo"/>
                    </div>
                    <div style={{cursor: 'pointer'}} onClick={redirectToGithub}> 
                        <img className={globalStyles.rectangularimage} src={githubLogo} alt="github logo"/> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;