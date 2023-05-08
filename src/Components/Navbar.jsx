import React, { useRef } from 'react';
// import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavbarComp() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  // const SearchRef = useRef(null);
  // const [items, setItems] = useState([]);
  //  function handleSearch(e){
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   if (form.checkValidity() === false) {
  //       // event.preventDefault();
  //       e.stopPropagation();
  //   } else {
  //       e.preventDefault();
  //       const text = SearchRef.current.value;
  //       axios.get("https://localhost:7237/api/MenuTables")
  //       .then(response => {
  //         setItems(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });

  //       if(items.menuName.contains(text)){
  //         console.log(items.menuName);
  //       }


  //      }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">King's Punjabi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contactus">Contact us</Nav.Link>
            <Nav.Link href='/menu-list'>Menu</Nav.Link>
            <Nav.Link href='/login'>SignOut</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setSearchValue(event.target.value)}
               value={searchValue}
            // ref={SearchRef}
            />
            <Button variant="outline-success" onClick={() => {console.log(searchValue); navigate("/dish-by-name", {state: {dishName: searchValue}})}}>Search</Button>
          </Form>
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

export default NavbarComp;
