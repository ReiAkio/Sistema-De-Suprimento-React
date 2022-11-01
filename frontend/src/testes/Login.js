import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import InserirUsuario from './InserirUsuario';

 

function Login() {
	const [name , setName] = useState('');
	const [password , setPassword] = useState('');
	const navigate = useNavigate();

  const navigateToInserir = () => {
    // 👇️ navigate to /contacts
    navigate('/cadastro');
  };

  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate('/login');
  };


	const handleChange =(e)=>{
	setName(e.target.value);
	}
	const handlePasswordChange =(e)=>{
	setPassword(e.target.value);
	}

	const handleSubmit=(e)=>{
	if(password.length <8)
	{alert("A senha precisar ter pelo menos 8 caracteres");
			
    
	}
	else{
	alert('Usuario Cadastrado com o nome: ' + name +
		'');
		
	}
	e.preventDefault();

	}
return (
	<div className="Login">
	<header className="Login-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{}
	<h2> Login de usuários </h2>
	<br></br> 
		
		<input type="text"  placeholder="Nome" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
		{}
      
		<input type="password"  placeholder="Senha" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
			{}
	<div>
        <button>Login</button>
        <hr />
        <button onClick={navigateToInserir}>Inserir novo Usuário</button>

        <Routes>
          <Route path="/cadastro" element={<InserirUsuario />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
	</form>
	</header>
	</div>
);
}

export default Login;
