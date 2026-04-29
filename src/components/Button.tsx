import React from 'react';

interface ButtonProps {
    children: React.ReactNode; 
    onClick?: () => void; 
    type?: 'button' | 'submit' | 'reset'; 
    className?: string;
}

const Button = ({ children, onClick, type = 'button', className = '' }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`shadow appearance-none border rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#6E50D5] hover:bg-[#6A4ECF] border-transparent font-bold ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;