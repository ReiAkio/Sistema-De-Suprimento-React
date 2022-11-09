import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// const Collapse = styled.div.attrs({
//     className: 'collpase navbar-collapse',
// })``

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
                <Link to="/suprimentos/lista" className="navbar-brand">
                    Lista de Suprimentos
                </Link>
                
                    <List>
                        <Item>
                            <Link to="/suprimentos/criar" className="nav-link">
                                Inserir Suprimento
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </Item>
                    </List>
                
            </React.Fragment>
        )
    }
}

export default Links