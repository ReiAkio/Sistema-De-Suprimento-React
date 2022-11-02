import React, {useState} from 'react';
import './Inserirusuario.css';

function InserirUsuario() {
	const [name , setName] = useState('');
	const [password , setPassword] = useState('');


	
	const handleChange =(e)=>{
	setName(e.target.value);
	}

	const handlePasswordChange =(e)=>{
	setPassword(e.target.value);
	}

	const handleSubmit=(e)=>{
	if(password!=null)
	{
			
    alert('Usuario Cadastrado com o nome: ' + name +
		'');
	}
	else{alert("password Not Match");
		
	}
	e.preventDefault();

	}
return (
	<div className="InserirUsuario">
	<header className="InserirUsuario-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{}
	<h2> Inserção de usuários </h2>
	<h1><br></br>  </h1>
		
		<input type="text"  placeholder="Nome" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
		{}
      <br></br>
		<input type="password"  placeholder="Senha" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
			{}
    <h1><br></br></h1>
		<button type="submit">Inserir</button>
	</form>
	</header>
	</div>
);
}

export default InserirUsuario;
