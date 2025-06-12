import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-secondary dark:bg-[#1f2937] text-textDark dark:text-gray-300 py-6 text-center text-sm">

        <p>© {new Date().getFullYear()} Mohit Sahu. All rights reserved.</p>
      </footer>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
