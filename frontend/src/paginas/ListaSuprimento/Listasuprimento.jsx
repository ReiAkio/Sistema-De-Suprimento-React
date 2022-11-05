import React from "react";
import api from '../../api'
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
                <td><button className="btn btn-primary">Editar</button></td>
                <td><button className="btn btn-danger">Remove</button></td>
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