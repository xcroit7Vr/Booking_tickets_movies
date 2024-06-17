import React, { useContext } from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faMapMarkerAlt, faHistory } from '@fortawesome/free-solid-svg-icons'; // Import faHistory icon
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';

const NavigationBar = ({ selectedCity }) => {

  const {isAuth} = useContext(AuthContext);

  return (
    <Navbar className="Navbar-nav fixed-top" expand="lg">
      <Container>
        <Navbar.Brand href="/"><strong>TICKET</strong>Bioskop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
            
              <FontAwesomeIcon icon={faFilm} />
              <span className="icon-text-spacing">Now Playing</span>
            
            </Link>
            <Nav.Link href="/cityMenu">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="icon-text-spacing">Playing In - {selectedCity}</span>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* <Nav.Link href="/purchase-history" className="history-icon">
              <FontAwesomeIcon icon={faHistory} />
              <span className="icon-text-spacing">Purchase History</span>
            </Nav.Link> */}
            <NavDropdown title={<div className="profile-icon"><i className="fas fa-user"></i></div>} id="basic-nav-dropdown" align="end">
            {
              isAuth ?
                (<>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>              
                </>) :
                (<>
                <NavDropdown.Item href="/registerForm">Register</NavDropdown.Item>
              <NavDropdown.Item href="/loginForm">Login</NavDropdown.Item>
                </>)
            }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
