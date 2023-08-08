import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand className='full-name'>Elvis Lau</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
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
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}