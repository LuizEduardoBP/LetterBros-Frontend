import Input from "../../components/Input";
import Button from "../../components/Button"; // Importa o novo componente Button
import Logo from "../../components/Logo";

const LoginPage: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <div className="flex flex-3 justify-center items-center text-center text-gray-900 dark:text-gray-100 bg-gradient-to-r from-[#8466EA] to-[#39267B]">
                <h1 className="font-bold text-2xl text-gray-100">LetterBros</h1>
            </div>
            <div className="flex flex-col flex-2 justify-center items-center p-8 bg-[#14181C] dark:bg-[#14181C] text-gray-900 dark:text-gray-100">
                <Logo currentTheme={'light'} />
                <div className="w-full max-w-sm mt-8">
                    <h1 className="font-bold text-gray-100 mb-2">Acesse sua conta</h1>
                    <div className="mb-2 h-0.5 bg-[#3F3F3F]"></div>
                    <Input label="E-mail" type="email" placeholder="seuemail@exemplo.com" />

                    <Input label="Senha" type="password" placeholder="*********" />
                    <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Esqueceu a senha?
                    </a>

                    <div className="flex flex-col items-center mt-6">
                        <Button
                            type="submit"
                            onClick={() => console.log('Botão Entrar clicado!')}
                            className="mb-4" // w-3/4 para ser menor que o input, mb-4 para espaçamento
                        >
                            Entrar
                        </Button>
                    </div>
                    <div className="flex flex-row">
                        <h2 className="mr-1.5 inline-block align-baseline font-bold text-sm text-gray-100 hover:text-gray-300">Canalha novo?</h2>
                        <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Criar conta
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default LoginPage;