import React from 'react';
// import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">King's Punjabi</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contactus">Contact us</Nav.Link>
          <Nav.Link href='/menu-list'>Menu</Nav.Link>
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
