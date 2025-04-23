import './App.css'
import Header from './components/Header'


function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="fixed left-0 w-1/5 h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md p-4">
            
            <ul className="space-y-4 p-3">
              <li className="text-gray-700 dark:text-gray-100 hover:text-blue-500 cursor-pointer">
                <h2/> Proximas Sugestões
              </li>
              <li className="text-gray-700  dark:text-gray-100 hover:text-blue-500 cursor-pointer">
                <h2/> Assistidos
              </li>
              <li className="text-gray-700  dark:text-gray-100 hover:text-blue-500 cursor-pointer">
                <h2/> Adicionar
              </li>
              {/* <li className="text-gray-700  dark:text-gray-100 hover:text-blue-500 cursor-pointer"> 
                <h2/> Confiigurações
              </li> */}
            </ul>
      </div>

      <main className="flex-1 p-5 ml-[20%]">
        <h1 className="text-3xl font-bold mb-4"></h1>
      </main>
    </div>
  )
}

export default App
