import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css';

// Creates a nav bar with routing to other pages
export default function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <header>
            <Navbar expand='lg' className=' navigation-bar'>
                <Container>
                    <Navbar.Brand className='full-name'>Elvis Lau</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto tabs'>
                            <Link
                                to="/"
                                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                            >
                                About Me
                            </Link>
                            <Link 
                                to="/portfolio"
                                className={currentPage === "/portfolio" ? "nav-link active": "nav-link"}
                            >
                                Portfolio
                            </Link>
                            <Link 
                                to="/contact"
                                className={currentPage === "/contact" ? "nav-link active": "nav-link"}
                            >
                                Contact
                            </Link>
                            <Link 
                                to="/resume"
                                className={currentPage === "/resume" ? "nav-link active": "nav-link"}
                            >
                                Resume
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}