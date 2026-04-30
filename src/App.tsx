import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Adicionado
import HomePage from './pages/homepage/HomePage'
import LoginPage from './pages/login/LoginPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/filmes-e-series" element={<HomePage />} />
        <Route path="/agenda" element={<HomePage />} />
        <Route path="/perfil" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
