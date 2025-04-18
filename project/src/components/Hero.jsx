import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import background from '../assets/background.jpg';

const Hero = () => {
  return (
    <section id="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-content">
        <h1>Welcome to BestElectronics4U</h1>
        <p>Your one-stop shop for the best electronics.</p>
        <p>We offer a wide range of real products that can be found in real stores.</p>
        <Link to="/find" className="btn">Find Your Electronic</Link>
      </div>
    </section>
  );
};

export default Hero; 