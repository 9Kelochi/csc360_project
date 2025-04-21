import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import ProfileIcon from './ProfileIcon';

const Header = ({ setShowResults }) => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      setShowResults(false);
    }
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-[999] bg-gradient-to-r from-indigo-800 via-cyan-700 to-blue-700 shadow-md px-10 py-5 flex justify-between items-center backdrop-blur-sm">
      {/* Logo */}
      <Link to="/" onClick={handleHomeClick}>
        <img src={logo} alt="BestElectronics4U Logo" className="w-32 rounded-md shadow-md" />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-4 text-white font-medium text-[1.1rem]">
          {[
            { label: 'Home', to: '/' },
            { label: 'Shop', to: '/shop' },
            { label: 'Pricing', to: '/pricing' },
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: 'Submit', to: '/submit' },
          ].map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => window.scrollTo(0, 0)}
                className={`px-4 py-2 rounded-md transition duration-200 ${
                  location.pathname === to
                    ? 'bg-white text-blue-700 font-semibold shadow-md'
                    : 'hover:bg-white/20 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <ProfileIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

