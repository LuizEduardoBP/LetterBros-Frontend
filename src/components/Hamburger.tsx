import React from 'react';
import { FiMenu } from 'react-icons/fi'; // Importa o ícone de menu da react-icons

interface HamburgerProps {
  onClick: () => void; // Função que será chamada ao clicar
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 rounded-md lg:hidden"
      aria-label="Abrir Menu" // Acessibilidade
    >
      <FiMenu className="w-6 h-6 text-gray-800 dark:text-white" />
    </button>
  );
};

export default Hamburger;