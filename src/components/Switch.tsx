import { FiSun, FiMoon } from 'react-icons/fi'; // Ícones de sol e lua

interface SwitchProps {
  currentTheme: 'light' | 'dark'; // O tema atual
  onToggle: () => void; // Função para alternar o tema
}

const Switch = ({ currentTheme, onToggle }: SwitchProps) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 rounded-md"
      aria-label={`Mudar para tema ${currentTheme === 'light' ? 'escuro' : 'claro'}`} // Acessibilidade
    >
      {currentTheme === 'light' ? (
        <FiMoon className="w-6 h-6 text-gray-800" />
      ) : (
        <FiSun className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default Switch;