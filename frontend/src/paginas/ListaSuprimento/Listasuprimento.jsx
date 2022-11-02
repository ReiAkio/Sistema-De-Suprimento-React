import React, { Component } from 'react'
import ReactTable from 'react-table'

import api from '../../api'

import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class ListaSuprimento extends Component {
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
                suprimentos: suprimentos.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { suprimentos, isLoading } = this.state
        console.log('TCL: ListaSuprimentos -> render -> suprimentos', suprimentos)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
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
        ]

        let showTable = true
        if (!suprimentos.length ) {
            showTable = false
        }

        return (
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
        )
    }
}

export default ListaSuprimento
