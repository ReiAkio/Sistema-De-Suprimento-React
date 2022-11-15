import React, { Component } from 'react'
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

import api from '../../api'
import styled from 'styled-components'



const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    
  `

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateSuprimento extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/suprimentos/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteSuprimento extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Voce tem certeza que quer deletar ${this.props.name} permanentemente?`,
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

class ListaSuprimentos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suprimentos: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getTodosSuprimentos().then(suprimentos => {
            this.setState({
                suprimentos: suprimentos.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { suprimentos, isLoading } = this.state

        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     filterable: true,
            // },
            {
                Header: 'Nome',
                accessor: 'nameSupply',
                filterable: true,
            },
            {
                Header: 'Quantidade',
                accessor: 'qttSupply',
                filterable: true,
            },
            {
                Header: 'Tipo',
                accessor: 'typeSupply',

            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteSuprimento name={props.original.nameSupply} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateSuprimento id={props.original._id} nome={props.original.nameSupply} quantidade={props.original.qttSupply} tipo={props.original.typeSupply} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!suprimentos.length) {
            showTable = false
        }

        return (
            <div>
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={suprimentos}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
            </div>
        )
    }
}

export default ListaSuprimentos