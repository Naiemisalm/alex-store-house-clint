import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="black"  variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">
            Alex Store House
            {/* <img src={logo} height={40} width={40} alt="" /> */}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/servicesitam'>Services Itam</Nav.Link>
            <Nav.Link as={Link} to='/selectitam'>Select Itam</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link className='text-white fa-bold font-weight-bold' as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
          {/* <Nav>
            {
      
              user ?
              <button className='btn btn-dark text-white' onClick={handleLogOut}>Log Out</button>
      
              :
              <Nav.Link className='text-dark fa-bold font-weight-bold' as={Link} to="/login">
              Login
            </Nav.Link>
            }
          </Nav> */}
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;