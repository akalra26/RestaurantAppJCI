import React from 'react';
// import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">King's Punjabi</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Contact us</Nav.Link>
          <NavDropdown title="Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Add Menu</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Add Category</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Add Dishes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">SignOut</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
    // <nav>
    //   <ul className='NavbarUL'>
    //     <li className='NavbarLI'><a href="#home">Home</a></li>
    //     <li className='NavbarLI'><a href="#">About Us</a></li>
    //     <li className='NavbarLI'><a href="#">Contact</a></li>
    //     <li className='NavbarLI'><button className='NavbarBtn'>Create New Menu Item</button></li>
    //   </ul>
    // </nav>
  // );
}

export default navbar;
