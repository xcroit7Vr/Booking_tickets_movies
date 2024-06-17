import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFilm, faBook, faUsers, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../context/authContext';

const Sidebar = () => {
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const { isAuthAdmin} = useContext(AuthContext)

  const togglePagesDropdown = () => {
    setShowPagesDropdown(!showPagesDropdown);
  };

  return (
    <Nav className="flex-column sidebar">
      <div className="sidebar-logo">
        <strong>TICKETBioskop</strong>
      </div>
      {
        isAuthAdmin && (
          <>
            <Nav.Item>
        <Link to="/admin" className="nav-link">
          <FontAwesomeIcon icon={faChartBar} className="icon" /> Dashboard
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/admin/catalog" className="nav-link">
          <FontAwesomeIcon icon={faFilm} className="icon" /> Catalog
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/admin/users" className="nav-link">
          <FontAwesomeIcon icon={faUsers} className="icon" /> Users
        </Link>
      </Nav.Item>
          </>
        )
      }
      
      <Nav.Item>
        <div className="nav-link pages-link" onClick={togglePagesDropdown}>
          <FontAwesomeIcon icon={faBook} className="icon" /> Pages
        </div>
        {showPagesDropdown && (
          <Nav className="flex-column dropdown">
            <Nav.Item>
              <Link to="/admin/edit-user" className="nav-link">Edit User</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/admin/sign-in" className="nav-link">Sign In</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/admin/sign-up" className="nav-link">Sign Up</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/admin/forgot-password" className="nav-link">Forgot Password</Link>
            </Nav.Item>
          </Nav>
        )}
      </Nav.Item>
      
      
    </Nav>
  );
};

function Header() {
  const { isAuthAdmin} = useContext(AuthContext)
  return (
    <div>
      <Navbar expand="lg" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="/" className="text-white">Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
            {isAuthAdmin && (
              <Nav.Link href="/admin/add-item">Add Items</Nav.Link>)}
            </Nav>
            <Sidebar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
