import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/background.jpg';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center text-white px-6 text-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-2xl backdrop-blur-sm bg-black/50 p-8 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to BestElectronics4U
        </h1>
        <p className="text-lg mb-2">
          Your one-stop shop for the best electronics.
        </p>
        <p className="text-lg mb-6">
          We offer a wide range of real products that can be found in real stores.
        </p>
        <Link
          to="/find"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition"
        >
          Find Your Electronic
        </Link>
      </div>
    </section>
  );
};

export default Hero;
