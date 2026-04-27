import { Calendar, House, LogOut, Menu, Popcorn, User } from 'lucide-react';
import React from 'react';

interface SideMenuProps {
  isOpen: boolean; 
  setIsMenuOpen: (isOpen: boolean) => void; 
  logout: () => void; 
}

interface MenuItem {
  icon: React.ElementType; 
  text: string;
  path?: string;
  action?: () => void; 
}

const SideMenu = ({ isOpen, setIsMenuOpen, logout }: SideMenuProps) => {
  const menuItems: MenuItem[] = [
    { icon: House, text: 'Menu Principal', path: '/' },
    { icon: Popcorn, text: 'Filmes e Séries', path: '/movies-series' },
    { icon: Calendar, text: 'Agenda', path: '/agenda' },
    { icon: User, text: 'Perfil', path: '/profile' },
  ];

  const handleMenuItemClick = (item: MenuItem) => {
    setIsMenuOpen(false);
    item.action?.(); 
  };

  return (
    <>
      <div className="flex flex-row items-center justify-end w-full px-3"> 
        <Menu
          onClick={() => setIsMenuOpen(!isOpen)}
          className="cursor-pointer text-gray-100 hover:text-white transition-colors duration-200"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"} 
          aria-expanded={isOpen}
        />
      </div>
      <div className="m-2 h-0.5 w-10 bg-[#583FAA]"></div>

      {menuItems.map((item) => (
        <div
          key={item.text} 
          className="flex flex-row items-center py-2 px-3 rounded-md cursor-pointer text-gray-100 hover:bg-[#7a5cdb] transition-colors duration-200 group"
          onClick={() => handleMenuItemClick(item)}
        >
          <item.icon className="w-5 h-5 text-gray-100 group-hover:text-white" aria-label={item.text} />
          {isOpen && (<h1 className="pl-5 text-base font-medium group-hover:text-white">{item.text}</h1>)}
        </div>
      ))}

      <div className="m-2 h-0.5 w-10 bg-[#583FAA]"></div>

      <div
        className="flex flex-row items-center py-2 px-3 rounded-md cursor-pointer text-gray-100 hover:bg-[#7a5cdb] transition-colors duration-200 group"
        onClick={() => {
          logout();
          setIsMenuOpen(false);
        }}
      >
        <LogOut className="w-5 h-5 text-gray-100 group-hover:text-white" aria-label="Sair" />
        {isOpen && (<h1 className="pl-5 text-base font-medium group-hover:text-white">Sair</h1>)}
      </div>
    </>
  );
};

export default SideMenu;