import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Hamburger from './Hamburger';
import Switch from './Switch';
import SideMenu from './SideMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme as 'light' | 'dark';
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; 
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md p-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center">
          <Hamburger onClick={toggleMenu} />
          <div className="ml-4 lg:ml-0">
             <Logo currentTheme={theme}/>
          </div>
        </div>

        <div>
          <Switch currentTheme={theme} onToggle={toggleTheme} />
        </div>
{/* 
        <div>
          <Profile currentTheme={theme} onToggle={toggleTheme} />
        </div> */}
      </header>

      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;