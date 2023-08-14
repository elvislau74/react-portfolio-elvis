import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

// footer that links to github
export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/elvislau74">
                <FontAwesomeIcon icon={faGithub} className='github-icon'/>
            </a>
        </footer>
    )
}