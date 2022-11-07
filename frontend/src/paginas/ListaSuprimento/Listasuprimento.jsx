import React, { Component } from 'react'
import api from '../../api'
import styled from 'styled-components'
const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
class DeleteSuprimento extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Deseja deletar esse item permanentemente?`,
            )
        ) {
            api.deletarSuprimentoPorId(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ListaSuprimentos extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list: []
        }
        this.callApi = this.callApi.bind(this)
        this.callApi();
    }


    callApi() {
       fetch("http://localhost:4000/suprimentos")
        .then((response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                list:data.data
            }) 
        })
    }

render(){
    let tb_data = this.state.list.map((item) =>{
        return (
            <tr key ={item._id}>
                <td>{item.nameSupply}</td>
                <td>{item.qttSupply}</td>
                <td>{item.typeSupply}</td>
                <span>
                            <DeleteSuprimento id={item._id} />
                        </span>
            </tr>
        )
    })
    return(
        <div>
            <table>
                <tbody>
                    {tb_data}
                </tbody>
            </table>
        </div>
    )
}
}

export default ListaSuprimentos;