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

class InserirSuprimento extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameSupply: '',
            qttSupply: 0,
            typeSupply: '',
        }
    }

    handleChangeInputNome = async event => {
        const nameSupply = event.target.value
        this.setState({ nameSupply })
    }

    handleChangeInputQuantidade = async event => {
        const qttSupply = event.target.validity.valid
            ? event.target.value
            : this.state.qttSupply

        this.setState({ qttSupply })
    }

    handleChangeInputTipo = async event => {
        const typeSupply = event.target.value
        this.setState({ typeSupply })
    }

    handleIncludeSuprimento = async () => {
        const { nameSupply, qttSupply, typeSupply } = this.state
        const payload = { nameSupply, qttSupply, typeSupply }

        await api.inserirSuprimento(payload).then(res => {
            window.alert(`Suprimento inserido com successo`)
            this.setState({
                nameSupply: '',
                qttSupply: 0,
                typeSupply: '',
            })
        })
    }

    render() {
        const { nameSupply, qttSupply, typeSupply } = this.state
        return (
            <Wrapper>
                <Title>Criar Suprimento</Title>

                <Label>Nome: </Label>
                <InputText
                    type="text"
                    value={nameSupply}
                    onChange={this.handleChangeInputNome}
                />

                <Label>Quantidade: </Label>
                <InputText
                    type= "number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="100000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={qttSupply}
                    onChange={this.handleChangeInputQuantidade}
                />

                <Label>Tipo: </Label>
                <Select value={typeSupply} onChange={this.handleChangeInputTipo}>
                <option value="Kg">KG</option>
                <option value="L">L</option>
                </Select>
                <br></br>

                <Button onClick={this.handleIncludeSuprimento}>Adicionar Suprimento</Button>
                <CancelButton href={'/suprimentos/lista'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default InserirSuprimento