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
      <div>
        <button onClick={navigateLogin}>Login</button>
        <hr />
        <button onClick={navigateToInserir}>Inserir</button>

        <Routes>
          <Route path="/cadastro" element={<InserirUsuario />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Contacts() {
  return <h2>Contacts</h2>;
}
