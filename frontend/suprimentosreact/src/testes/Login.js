import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { useNavigate,Link} from "react-router-dom";
import InserirUsuario from './InserirUsuario';

 

function Login() {
	const [name , setName] = useState('');
	const [password , setPassword] = useState('');

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
	<h1><br></br>  </h1>
		
		<input type="text"  placeholder="Nome" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
		{}
      <h1></h1>
		<input type="password"  placeholder="Senha" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
			{}
    <h1><br></br></h1>
		<input  type="submit" value="Enviar"/> 
        <button onClick={InserirUsuario} type="button">Inserir</button>
	</form>
	</header>
	</div>
);
}

export default Login;
