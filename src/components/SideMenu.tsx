import { Calendar, House, LogOut, Menu, Popcorn, User } from 'lucide-react';
import React from 'react';
import Logo from './Logo';

interface SideMenuProps {
  isOpen: boolean; // Estado para controlar se o menu está aberto
  setIsMenuOpen: (isOpen: boolean) => void; // Função para alterar o estado do menu
  logout: () => void; // Função para fechar o menu
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, setIsMenuOpen, logout }) => {
  return (
    <>
      <div className="flex flex-row">
        <Menu onClick={() => setIsMenuOpen(!isOpen)}></Menu>
      </div>
      <div className="m-2 h-0.5 w-10 bg-[#583FAA]"></div>
      <div className="flex flex-row">
        <House></House>
        {isOpen && (<h1 className="pl-5">Menu Principal</h1>)}
      </div>
      <div className="flex flex-row"><Popcorn></Popcorn> {isOpen && (<h1 className="pl-5">Filmes e Séries</h1>)}</div>

      <div className="flex flex-row"><Calendar></Calendar> {isOpen && (<h1 className="pl-5">Agenda</h1>)}</div>

      <div className="flex flex-row"><User></User> {isOpen && (<h1 className="pl-5">Perfil</h1>)}</div>

      <div className="m-2 h-0.5 w-10 bg-[#583FAA]"></div>
      <div className="flex flex-row"><LogOut onClick={logout}></LogOut> {isOpen && (<h1 className="pl-5">Sair</h1>)}</div>

    </>
  );
};

export default SideMenu;