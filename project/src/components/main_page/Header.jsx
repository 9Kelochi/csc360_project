import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import ProfileIcon from "./ProfileIcon";

const Header = ({ setShowResults }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      setShowResults(false);
    }
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[999] bg-gradient-to-br from-indigo-900 via-cyan-800 to-blue-900 shadow-lg px-4 md:px-8 py-4 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={handleHomeClick} className="flex items-center">
          <img
            src={logo}
            alt="BestElectronics4U Logo"
            className="w-28 md:w-32 rounded-md shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg focus:outline-none bg-white/10 hover:bg-white/20 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2 lg:gap-4 text-white font-medium">
            {[
              { label: "Home", to: "/" },
              { label: "Shop", to: "/shop" },
              { label: "Pricing", to: "/pricing" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Submit", to: "/submit" },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={handleLinkClick}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === to
                      ? "bg-cyan-400 text-black font-semibold shadow-md"
                      : "hover:bg-white/10 hover:text-cyan-300"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <ProfileIcon />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-2 border-t border-white/10 pt-4">
          <ul className="flex flex-col gap-2 text-white">
            {[
              { label: "Home", to: "/" },
              { label: "Shop", to: "/shop" },
              { label: "Pricing", to: "/pricing" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Submit", to: "/submit" },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={handleLinkClick}
                  className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === to
                      ? "bg-cyan-400 text-black font-semibold"
                      : "hover:bg-white/10 hover:text-cyan-300"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-2">
              <ProfileIcon />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
