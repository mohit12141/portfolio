import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
  onClick={() => setIsDark(!isDark)}
  className="fixed top-4 right-4 z-[9999] bg-white dark:bg-secondary border border-gray-300 dark:border-gray-600 p-2 rounded-full shadow-md hover:shadow-lg transition"
  aria-label="Toggle Dark Mode"
>
  {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
</button>

  );
};

export default DarkModeToggle;
