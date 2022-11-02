// import React, {useState} from 'react';
// import './Inserirusuario.css';

// function InserirUsuario() {
// 	const [name , setName] = useState('');
// 	const [password , setPassword] = useState('');


	
// 	const handleChange =(e)=>{
// 	setName(e.target.value);
// 	}

// 	const handlePasswordChange =(e)=>{
// 	setPassword(e.target.value);
// 	}

// 	const handleSubmit=(e)=>{
// 	if(password!=null)
// 	{
			
//     alert('Usuario Cadastrado com o nome: ' + name +
// 		'');
// 	}
// 	else{alert("password Not Match");
		
// 	}
// 	e.preventDefault();

// 	}
// return (
// 	<div className="InserirUsuario">
// 	<header className="InserirUsuario-header">
// 	<form onSubmit={(e) => {handleSubmit(e)}}>
// 	{}
// 	<h2> Inserção de usuários </h2>
// 	<h1><br></br>  </h1>
		
// 		<input type="text"  placeholder="Nome" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
// 		{}
//       <br></br>
// 		<input type="password"  placeholder="Senha" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
// 			{}
//     <h1><br></br></h1>
// 		<button type="submit">Inserir</button>
// 	</form>
// 	</header>
// 	</div>
// );
// }

// export default InserirUsuario;


import React, { Component } from 'react'
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

const Select = styled.select.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class Inserirusuario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
        }
    }

    handleChangeInputNome = async event => {
        const userName = event.target.value
        this.setState({ userName })
    }

    handleChangeInputSenha = async event => {
        const password = event.target.validity.valid
            ? event.target.value
            : this.state.password

        this.setState({ password })
    }


    handleIncludeUsuario = async () => {
        const { userName, password } = this.state
        const payload = { userName, password }

        await api.inserirUsuario(payload).then(res => {
            window.alert(`Usuario inserido com successo`)
            this.setState({
                userName: '',
                passsword: '',
            })
        })
    }

	myFunction() {
		var x = document.getElementById("myInput");
		if (x.type === "password") {
		  x.type = "text";
		} else {
		  x.type = "password";
		}
	  }

    render() {
        const { userName, password } = this.state
        return (
            <Wrapper>
                <Title>Criar Usuário</Title>

                <Label>Nome: </Label>
                <InputText
                    type="text"
                    value={userName}
                    onChange={this.handleChangeInputNome}
                />

				<Label>Senha: </Label>
                <InputText
                    type="password"
                    value={password}
                    onChange={this.handleChangeInputSenha}
					id="myInput"
                />
			<Label>Mostrar senha</Label>
			<input
			type="checkbox"
			onClick={this.myFunction}
			/>
			<br></br>             

                <Button onClick={this.handleIncludeUsuario}>Adicionar Usuario</Button>
                <CancelButton href={'/suprimentos/lista'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default Inserirusuario