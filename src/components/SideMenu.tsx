import { Calendar, House, LogOut, Menu, Popcorn, User } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface SideMenuProps {
  isOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  logout: () => void;
}

const menuItems = [
  {
    path: '/home',
    label: 'Página inicial',
    icon: House,
    activeColor: 'bg-[#583FAA]',
  },
  {
    path: '/filmes-e-series',
    label: 'Filmes e séries',
    icon: Popcorn,
    activeColor: 'bg-[#583FAA]',
  },
  {
    path: '/agenda',
    label: 'Agenda',
    icon: Calendar,
    activeColor: 'bg-[#583FAA]',
  },
  {
    path: '/perfil',
    label: 'Perfil',
    icon: User,
    activeColor: 'bg-[#583FAA]',
  },
];

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, setIsMenuOpen, logout }) => {
  return (
    <>
      <div className={`flex ${isOpen ? 'w-full justify-start' : 'justify-center'}`}>
        <button
          type="button"
          className="flex size-12 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <Menu size={26} />
        </button>
      </div>

      <div className={`h-0.5 bg-[#583FAA] ${isOpen ? 'w-full' : 'w-10'}`}></div>

      <nav className="flex w-full flex-col gap-2">
        {menuItems.map(({ path, label, icon: Icon, activeColor }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/home'}
            className={({ isActive }) =>
              [
                'grid min-h-14 w-full items-center rounded-xl text-white transition hover:bg-white/10',
                isOpen ? 'grid-cols-[3rem_1fr] px-0' : 'grid-cols-1 justify-items-center px-0',
                isActive ? activeColor : '',
              ].join(' ')
            }
          >
            <Icon size={30} strokeWidth={2.2} className="justify-self-center" />
            {isOpen && (
              <span className="pr-4 text-center text-sm font-bold leading-tight">
                {label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="flex-1" />

      <div className={`h-0.5 bg-[#583FAA] ${isOpen ? 'w-full' : 'w-10'}`}></div>
      <button
        type="button"
        className={`grid min-h-14 w-full items-center rounded-xl pb-3 text-white transition hover:bg-white/10 ${
          isOpen ? 'grid-cols-[3rem_1fr] px-0' : 'grid-cols-1 justify-items-center px-0'
        }`}
        onClick={logout}
      >
        <LogOut size={28} strokeWidth={2.2} className="justify-self-center" />
        {isOpen && (
          <span className="pr-4 text-center text-sm font-bold leading-tight">
            Sair
          </span>
        )}
      </button>

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
