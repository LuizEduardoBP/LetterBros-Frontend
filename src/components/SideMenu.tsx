import React from 'react';

interface SideMenuProps {
  isOpen: boolean; // Estado para controlar se o menu está aberto
  onClose: () => void; // Função para fechar o menu
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay (clica nele para fechar o menu) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* O Menu Lateral */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full' // Controla a posição com translate
        }`}
      >
        <div className="p-4">
          {/* Exemplo de itens de menu */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={onClose}>Início</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={onClose}>Sobre</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={onClose}>Serviços</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={onClose}>Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;