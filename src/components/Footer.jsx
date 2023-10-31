import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

// footer that links to github
export default function Footer() {
    return (
        <footer className='footer-spacing'>
            <a href="https://github.com/elvislau74">
                <FontAwesomeIcon icon={faGithub} className='github-icon'/>
            </a>
            <a href="https://www.linkedin.com/in/-elvis-lau/">
                <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon'/>
            </a>
        </footer>
    )
}