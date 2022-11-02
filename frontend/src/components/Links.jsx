import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Lista de Suprimentos
                </Link>
                <Collapse>
                    <List>
                    <Item>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/cadastro" className="nav-link">
                                Inserir Usuario
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/suprimentos/lista" className="nav-link">
                                Lista Suprimentos
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/suprimentos/criar" className="nav-link">
                                Inserir Suprimento
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/suprimentos/update" className="nav-link">
                                Update Suprimento
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links