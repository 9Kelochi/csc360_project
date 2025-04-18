import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Find Your Electronic', to: '/find' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Submit', to: '/submit' },
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-[999] bg-gradient-to-r from-indigo-800 via-cyan-700 to-blue-700 shadow-md px-10 py-5 flex justify-between items-center backdrop-blur-sm">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="BestElectronics4U Logo" className="w-32 rounded-md shadow-md" />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-4 text-white font-medium text-[1.1rem]">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

