import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './testes/Login';
import InserirUsuario from './testes/InserirUsuario';

export default function App() {
  const navigate = useNavigate();

  const navigateToInserir = () => {
    // 👇️ navigate to /contacts
    navigate('/cadastro');
  };

  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate('/login');
  };

  return (
    <div>
      <div className="Cabecalho">
        <button onClick={navigateLogin}>Login</button><text> </text>
        <button onClick={navigateLogin}>Inserir Suprimento</button><text> </text>
        <button onClick={navigateLogin}>Lista de Suprimentos</button><text> </text>
        <button onClick={navigateLogin}>Sair da conta</button><text> </text>
        {/* <button onClick={navigateToInserir}>Inserir</button> */}
        

        <Routes>
          <Route path="/cadastro" element={<InserirUsuario />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}


