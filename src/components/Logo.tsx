import React, { useEffect, useState } from 'react';
import LogoDark from '../assets/logo_dark.svg';
import LogoLigth from '../assets/logo_ligth.svg';

interface LogoProps {
  currentTheme: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ currentTheme }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <img src={currentTheme == 'dark' ? LogoDark : LogoLigth} className='w-60' alt='Logotipo do App' />    
    </div>
  );
};

export default Logo;