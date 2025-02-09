import globalStyles from '../globalStyles/standard.module.css'
import content from '../content/contact.json'
import linkedInLogo from './linkedin.png'
import githubLogo from './github.png'


const Contact = () => {

    const redirectToLinkedIn = () =>{
        window.location.href = "http://www.linkedin.com/in/phillipa-cooper-72095a136/";
      }
    
      const redirectToGithub = () => {
        window.location.href = "https://github.com/phillipacooper0";
      }
    

    return (
        <div className={globalStyles.standard}>
            <p className={globalglobalStyles.p}>{content.email}</p>
            <p className={globalglobalStyles.p}>{content.location}</p>
            <img className={globalStyles.image2} src={linkedInLogo} alt="linkedIn logo"/>
            <img className={globalStyles.image2} src={githubLogo} alt="github logo"/> 

        </div>
    )
}
export default Contact;