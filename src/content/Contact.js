import styles from '../styles/background.module.css'
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
        <div className={styles.standard}>
            <p className={globalStyles.p}>{content.email}</p>
            <p className={globalStyles.p}>{content.location}</p>
            <img className={styles.image2} src={linkedInLogo} alt="linkedIn logo"/>
            <img className={styles.image2} src={githubLogo} alt="github logo"/> 

        </div>
    )
}
export default Contact;