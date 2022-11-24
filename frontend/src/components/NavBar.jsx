import React, { Component } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`
    height: 100px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-white bg-clear',
})`

    margin-bottom: 20 px;
`

function NavBar() {


    return (
        <Container>
            <Nav>
                <Links />
            </Nav>
        </Container>
    )
}

// class NavBar extends Component {
//     render() {
//         return (
//             <Container>
//                 <Nav>
//                     <Links />
//                 </Nav>
//             </Container>
//         )
//     }
// }

export default NavBar