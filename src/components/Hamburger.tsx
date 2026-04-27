import { FiMenu } from 'react-icons/fi'; // Importa o ícone de menu da react-icons

interface HamburgerProps {
  onClick: () => void;
}

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 rounded-md lg:hidden"
      aria-label="Abrir Menu"
    >
      <FiMenu className="w-6 h-6 text-gray-800 dark:text-white" />
    </button>
  );
};

export default Hamburger;