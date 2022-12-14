import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// const Collapse = styled.div.attrs({
//     className: 'collpase navbar-collapse',
// })``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const ItemLogout = styled.div.attrs({
    className: 'collpase navbar-collapse',
})` Position: absolute;
right: 100%;
text-align: left;
margin: 15px 50px 15px 15px;`

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``


function Links() {
    const handleSubmit = (e) => {
        sessionStorage.setItem("Login",false);
            
    }
    
    if (sessionStorage.getItem("Login") == 'true') {

        return((
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
                            <Link to="/login" className="nav-link" onClick={(e) => handleSubmit(e)}>
                                Logout
                            </Link>
                        </Item>
                    </List>
                
            </React.Fragment>
        ))
        
    }
    else{
        return (
            <React.Fragment>               
                    <List>
                        <ItemLogout>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </ItemLogout>
                    </List>
            </React.Fragment>
        )
    }
}



// class Links extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Link to="/suprimentos/lista" className="navbar-brand">
//                     Lista de Suprimentos
//                 </Link>
                
//                     <List>
//                         <Item>
//                             <Link to="/suprimentos/criar" className="nav-link">
//                                 Inserir Suprimento
//                             </Link>
//                         </Item>
//                         <Item>
//                             <Link to="/login" className="nav-link">
//                                 Login
//                             </Link>
//                         </Item>
//                     </List>
                
//             </React.Fragment>
//         )
//     }
// }

export default Links