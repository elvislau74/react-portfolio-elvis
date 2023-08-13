import Card from 'react-bootstrap/Card';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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


            {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <embed src = '../assets/images/github.svg'/>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
            </Card>
        </div>
    )
}