import React,{useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import api from '../../api'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`



const ButtonLogin = styled.button.attrs({
    className: `btn btn-primary`,
})`  Position: relative;
Left: 50%;
text-align: center;
margin: 15px 15px 15px 15px;
`
const Span = styled.span.attrs({
    className: `psw`,
})`Position: absolute;
Left: 82%;
text-align: center;
    margin: 1px 1px 1px 1px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-link`,
})`
margin: 1px 1px 1px 1px;
text_align: center;
font-size:18px;
`


function showPassword()  {
	var x = document.getElementById("inputPassword");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }

  function EstouLogado(){
	const logado =  sessionStorage.getItem("Login")
	
	if (sessionStorage.getItem("Login") == 'true') {
		
		return  <p className="text-success">Você ja esta Logado</p>
	} else {
		return <p className="text-danger">Você não está logado</p>
	}

  }
 

function Login() {
	const [userName , setName] = useState('');
	const [password , setPassword] = useState('');
	const [login, setLogin] = useState(false);
	const navigate = useNavigate();


const handleSubmit = (e) => {
	const payload = { userName, password }
    api.login(payload)
	.then((result) => {
		console.log(result.data.mensagem)
		if (result.data.mensagem === "Logado") {
			setLogin(true);
			sessionStorage.setItem("Login",true);
			navigate("/suprimentos/lista");
			window.location.reload(true);
			
		}
		else{
			setLogin(false);
			sessionStorage.setItem("Login",false);
			window.alert("Usuario e/ou senha incorretos")
		}
		
      })
	  .catch((error) => {
        error = new Error();
      });
  }





return (
	<Wrapper>
	<Title>Login</Title><br></br>

	<Label>Nome:</Label>
	<InputText
		type="text"
		value={userName}
		onChange={(e) => setName(e.target.value)}

	/>

	<Label>Senha:</Label>
	<InputText
		type="password"
		value={password}
		onChange={(e) => setPassword(e.target.value)}
		id="inputPassword"
	/>
<Label>Mostrar senha</Label>
<input
type="checkbox"
onClick={showPassword}
/>
<br></br>             

	<ButtonLogin onClick={(e) => handleSubmit(e)}>Entrar</ButtonLogin>
	<br></br>
	<Span>Ainda não tem cadastro? <br></br><a href="/cadastro">Crie um novo usuário</a></Span>
	<div>
		<div>{EstouLogado()}</div>		
      </div>
</Wrapper>
	
);
}

export default Login;
