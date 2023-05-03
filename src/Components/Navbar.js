import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className='NavbarUL'>
        <li className='NavbarLI'><a href="#">Home</a></li>
        <li className='NavbarLI'><a href="#">About Us</a></li>
        <li className='NavbarLI'><a href="#">Contact</a></li>
        <li className='NavbarLI'><button className='NavbarBtn'>Create New Menu Item</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
