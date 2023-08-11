import Card from 'react-bootstrap/Card';
import '../styles/Projects.css';

export default function ProjectCard(props) {
    return(
        <div className='card-padding'>
            <Card style={{ width: '20rem'}} >
            <Card.Img variant="top" src={props.siteImage} className='image-size'/>
            <Card.Body >
                <Card.Title><h2>{props.name}</h2></Card.Title>
                <Card.Text className='text-spacing'>
                Technologies: {props.languages}
                </Card.Text>
                <Card.Link href={props.link}>Link to Livesite</Card.Link>
            </Card.Body>


            {/* <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
            </Card>
        </div>
    )
}