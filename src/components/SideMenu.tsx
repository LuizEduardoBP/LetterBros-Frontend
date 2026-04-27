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
    <div className="flex flex-col h-full w-full py-4">
      <div className="flex-grow">
        <div className={`flex flex-row items-center py-2 px-4 ${!isOpen ? 'justify-center' : 'justify-start'}`}>
          <Menu
            onClick={() => setIsMenuOpen(!isOpen)}
            className="cursor-pointer text-gray-100 hover:text-white transition-colors duration-200"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isOpen}
          />
        </div>

        <div className="my-4 h-0.5 w-full bg-[#583FAA]"></div>

        <div className="flex flex-col gap-2 px-2">
          {menuItems.map((item) => (
            <div
              key={item.text}
              className={`flex flex-row items-center py-2 px-3 rounded-md cursor-pointer text-gray-100 hover:bg-[#7a5cdb] transition-all duration-300 group ${!isOpen ? 'justify-center' : 'justify-start'}`}
              onClick={() => handleMenuItemClick(item)}
            >
              <item.icon className="w-5 h-5 text-gray-100 group-hover:text-white shrink-0" aria-label={item.text} />
              <div className={`overflow-hidden transition-all duration-300 flex items-center ${isOpen ? 'max-w-xs opacity-100 ml-4' : 'max-w-0 opacity-0 ml-0'}`}>
                <span className="text-base font-medium group-hover:text-white whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto px-2">
        <div className="my-4 h-0.5 w-full bg-[#583FAA]"></div>

        <div
          className={`flex flex-row items-center py-2 px-3 rounded-md cursor-pointer text-gray-100 hover:bg-[#7a5cdb] transition-all duration-300 group ${!isOpen ? 'justify-center' : 'justify-start'}`}
          onClick={() => {
            logout();
            setIsMenuOpen(false);
          }}
        >
          <LogOut className="w-5 h-5 text-gray-100 group-hover:text-white shrink-0" aria-label="Sair" />
          <div className={`overflow-hidden transition-all duration-300 flex items-center ${isOpen ? 'max-w-xs opacity-100 ml-4' : 'max-w-0 opacity-0 ml-0'}`}>
            <span className="text-base font-medium group-hover:text-white whitespace-nowrap">
              Sair
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;