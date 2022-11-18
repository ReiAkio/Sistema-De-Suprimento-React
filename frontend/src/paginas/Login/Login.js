import React,{useState} from 'react';
import './Login.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import InserirUsuario from '../Inserirusuario/InserirUsuario';
import axios from "axios";


 

function Login() {
	const [userName , setName] = useState('');
	const [password , setPassword] = useState('');
	const [login, setLogin] = useState(false);
	const navigate = useNavigate();

  const navigateToInserir = () => {
    navigate('/cadastro');
  };

//   const navigateLogin = () => {
//     navigate('/login');
//   };
const handleSubmit = (e) => {
    const configuration = {
		method: "post",
		url: "http://localhost:4000/usuario/login",
		data: {
		  userName,
		  password,
		},
	  };
	  axios(configuration)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  }



return (
	<div className="Login">
	<header className="Login-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{}
	<h2> Login de usuários </h2>
	<br></br> 
		
		<input type="text"  placeholder="Nome" value={userName} name="userName" onChange={(e) => setName(e.target.value)} /><br/>
		{}
      
		<input type="password"  placeholder="Senha" value={password} name="password" onChange={(e) => setPassword(e.target.value)} /><br/>
			{}
	<div>
        <button onClick={(e) => handleSubmit(e)}>Login</button>
        <hr />
        <button onClick={navigateToInserir}>Inserir novo Usuário</button>

        <Routes>
          <Route path="/cadastro" element={<InserirUsuario />} />
          <Route path="/login" element={<Login />} />
        </Routes>
		{login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </div>
	</form>
	</header>
	</div>
);
}

export default Login;
