import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          <h4 className=' text-danger fw-bold'>
          Salman
          </h4>
      
          
          </div>
        <div className='navbar-links'>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#service">Services</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href='#contact' className='navbar-button'>Connect Me</a>
      </div>
    </nav>
  );
};

export default Navbar;