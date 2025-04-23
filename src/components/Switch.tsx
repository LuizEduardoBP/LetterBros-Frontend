import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Ícones de sol e lua

interface SwitchProps {
  currentTheme: 'light' | 'dark'; // O tema atual
  onToggle: () => void; // Função para alternar o tema
}

const Switch: React.FC<SwitchProps> = ({ currentTheme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 rounded-md"
      aria-label={`Mudar para tema ${currentTheme === 'light' ? 'escuro' : 'claro'}`} // Acessibilidade
    >
      {currentTheme === 'light' ? (
        <FiMoon className="w-6 h-6 text-gray-800" /> // Mostra lua no tema claro
      ) : (
        <FiSun className="w-6 h-6 text-white" /> // Mostra sol no tema escuro
      )}
    </button>
  );
};

export default Switch;