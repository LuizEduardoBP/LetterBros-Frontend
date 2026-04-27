import LogoDark from '../assets/logo-no-letter.svg';
import LogoLigth from '../assets/logo-no-letter.svg';

interface LogoProps {
  currentTheme: 'light' | 'dark';
}

const Logo = ({ currentTheme }: LogoProps) => {
  return (
    <div className="flex items-center justify-center">
      <img src={currentTheme == 'dark' ? LogoDark : LogoLigth} className='w-20' alt='Logotipo do App' />    
    </div>
  );
};

export default Logo;