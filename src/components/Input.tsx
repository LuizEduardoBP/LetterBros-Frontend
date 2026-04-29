
interface InputProps {
    type: 'email' | 'password' | 'text'; // Adicionado 'password' e 'text' para uso mais geral
    placeholder: string;
    label: string;
}

const Input = ({ type, placeholder, label }: InputProps) => {
    return (
        <div className="mb-4">
            <label htmlFor={type} className="block text-gray-400 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type={type}
                id={type}
                placeholder={placeholder}
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700 dark:bg-gray-700 border-gray-600 dark:border-gray-600"
            />
        </div>
    );
};

export default Input;