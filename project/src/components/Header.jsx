import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <section id="header">
      <Link to="/">
        <img src={logo} className="logo" alt="BestElectronics4U Logo" />
      </Link>
      <div>
        <ul id="navigator_bar">
          <li><Link className="tab" to="/">Home</Link></li>
          <li><Link to="/find">Find Your Electronic</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/submit">Submit</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </section>
  );
};

export default Header; 