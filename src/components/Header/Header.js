import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {

  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="black" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Alex Store House

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/servicesitam'>Services Itam</Nav.Link>
            <Nav.Link as={Link} to='/uploadproduct'>Upload Product</Nav.Link>
            
            {
              user && <>
              <Nav.Link as={Link} to='/manageproduct'>Manage Product</Nav.Link>
              </>
            }
             <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
          </Nav>
          <Nav>
            {

              user ?
                <button className='btn btn-primary text-white' onClick={handleLogOut}>Log Out</button>

                :
                <Nav.Link className='text-white fa-bold font-weight-bold' as={Link} to="/login">
                  Login
                </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;