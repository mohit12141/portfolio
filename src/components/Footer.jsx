import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-section border-t border-gray-200 dark:border-gray-700 text-center py-6 text-sm">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} <span className="text-primary font-medium">Mohit Sahu</span>. All rights reserved.
        </p>
      </footer>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-accent transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
