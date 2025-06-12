import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'certifications', label: 'Certifications' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-[#111827] text-textDark dark:text-white shadow-md z-40">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-primary dark:text-white cursor-pointer">
          Mohit Sahu
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer hover:text-primary transition"
              activeClass="text-primary font-semibold"
              spy={true}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#111827] px-6 pb-4 shadow">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
