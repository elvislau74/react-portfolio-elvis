import Card from 'react-bootstrap/Card';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// creates cards to display projects from props pulled from another file
export default function ProjectCard(props) {
    return(
        <div className='card-padding'>
            <Card style={{ width: '21rem'}} >
            <Card.Img variant="top" src={props.siteImage} className='image-size'/>
            <Card.Body className='body-size'>
                <Card.Title><Card.Link 
                href={props.link}
                className='site-link'><h2 className='title'>{props.name}</h2>
                </Card.Link></Card.Title>
                <Card.Link href={props.githubLink}>
                    <FontAwesomeIcon icon = {faGithub} className='icon'/>
                </Card.Link>
                <Card.Text className='text-spacing'>
                {props.languages}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}