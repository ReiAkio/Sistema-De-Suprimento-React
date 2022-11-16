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

class InserirUsuario extends Component {
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

        if(password.length <8)
        {alert("A senha precisar ter pelo menos 8 caracteres");}
        else{  
        await api.inserirUsuario(payload).then(res => {
            window.alert(`Usuario ` + userName + ` cadastrado com successo`)
            this.setState({
                userName: '',
                passsword: '',
            })
        })
    }
    }

	showPassword() {
		var x = document.getElementById("inputPassword");
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
                <Title>Criar Usuário</Title><br></br>

                <Label>Nome </Label>
                <InputText
                    type="text"
                    placeholder='Nome'
                    value={userName}
                    onChange={this.handleChangeInputNome}

                />

				<Label>Senha </Label>
                <InputText
                    type="password"
                    placeholder='senha'
                    value={password}
                    onChange={this.handleChangeInputSenha}
					id="inputPassword"
                />
			<Label>Mostrar senha</Label>
			<input
			type="checkbox"
			onClick={this.showPassword}
			/>
			<br></br>             

                <Button onClick={this.handleIncludeUsuario}>Adicionar Usuario</Button>
                <CancelButton href={'/suprimentos/lista'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default InserirUsuario