import React from 'react';

interface ButtonProps {
    children: React.ReactNode; // O texto ou conteúdo dentro do botão
    onClick?: () => void; // Função a ser executada ao clicar no botão
    type?: 'button' | 'submit' | 'reset'; // Tipo do botão (padrão é 'button')
    className?: string; // Para permitir classes adicionais de estilização
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            // Estilos base para o botão, com um fundo roxo e hover, e borda transparente
            // w-full para preencher a largura do container, mas o container será menor
            className={`shadow appearance-none border rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#6E50D5] hover:bg-[#6A4ECF] border-transparent font-bold ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;