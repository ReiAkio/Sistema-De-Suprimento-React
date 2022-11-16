// import React, { Component } from 'react'
// import api from '../../api'

// import styled from 'styled-components'

// import { useParams } from 'react-router-dom';

// const Title = styled.h1.attrs({
//     className: 'h1',
// })``

// const Wrapper = styled.div.attrs({
//     className: 'form-group',
// })`
//     margin: 0 30px;
// `

// const Label = styled.label`
//     margin: 5px;
// `

// const InputText = styled.input.attrs({
//     className: 'form-control',
// })`
//     margin: 5px;
// `

// const Button = styled.button.attrs({
//     className: `btn btn-primary`,
// })`
//     margin: 15px 15px 15px 5px;
// `

// const CancelButton = styled.a.attrs({
//     className: `btn btn-danger`,
// })`
//     margin: 15px 15px 15px 5px;
// `
// class UpdateSuprimento extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             nameSupply: '',
//             qttSupply: '',
//             typeSupply: '',
//         }
//     }

//     handleChangeInputName = async event => {
//         const nameSupply = event.target.value
//         this.setState({ nameSupply })
//     }

//     handleChangeInputQuantidade = async event => {
//         const qttSupply = event.target.validity.valid
//             ? event.target.value
//             : this.state.qttSupply

//         this.setState({ qttSupply })
//     }

//     handleChangeInputTipo = async event => {
//         const typeSupply = event.target.value
//         this.setState({ typeSupply })
//     }

//     handleUpdateSuprimentos = async () => {
//         const { id, nameSupply, qttSupply, typeSupply } = this.state
//         const payload = { nameSupply, qttSupply, typeSupply }

//         await api.updateSuprimentoPorId(id, payload).then(res => {
//             window.alert(`Suprimento atualizado com sucesso`)
//             this.setState({
//                 nameSupply: '',
//                 qttSupply: '',
//                 typeSupply: '',
//             })
//         })
//     }

//     componentDidMount = async () => {
//         const { id } = this.state
//         const suprimento = await api.getSuprimentoPorId(id)

//         this.setState({
//             nameSupply: suprimento.data.data.nameSupply,
//             qttSupply: suprimento.data.data.qttSupply,
//             typeSupply: suprimento.data.data.typeSupply,
//         })
//     }

//     render() {
//         const { nameSupply, qttSupply, typeSupply } = this.state
//         return (
//             <Wrapper>
//                 <Title>Atualizar Suprimento</Title>

//                 <Label>Nome </Label>
//                 <InputText
//                     type="text"
//                     value={nameSupply}
//                     onChange={this.handleChangeInputName}
//                 />

//                 <Label>Quantidade </Label>
//                 <InputText
//                     type="number"
//                     step="0.1"
//                     lang="en-US"
//                     min="1"
//                     max="10000000"
//                     pattern="[0-9]+([,\.][0-9]+)?"
//                     value={qttSupply}
//                     onChange={this.handleChangeInputQuantidade}
//                 />

//                 <Label>Tipo: </Label>
//                 <InputText
//                     type="text"
//                     value={typeSupply}
//                     onChange={this.handleChangeInputTipo}
//                 />

//                 <Button onClick={this.handleUpdateSuprimentos}>Atualizar Suprimento</Button>
//                 <CancelButton href={'/suprimentos/lista'}>Cancelar</CancelButton>
//             </Wrapper>
//         )
//     }
// }


// // const UpdateSuprimentos = () => {
// //     let params = useParams();
// //     //console.log(params);
// //     console.log(params.id);
// //     return <div>{params.id}</div>;
// //   };


// export default UpdateSuprimento



import React, { Component, useState,useEffect } from 'react'
import api from '../../api'

import styled from 'styled-components'

import { useParams } from 'react-router-dom';

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
function UpdateSuprimento() {
    let params = useParams();
    console.log(params);
    console.log(params.id);


    const [id, setId] = useState(params.id);
    const [nameSupply, setName] = useState('');
    const [qttSupply, setQtt] = useState('');
    const [typeSupply, setType] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        const suprimento = await api.getSuprimentoPorId(params.id);
        return suprimento
    } 
    const suprimento = fetchData()
    console.log(suprimento)

        //setName(suprimento.data.data.nameSupply);
        //setQtt(suprimento.data.data.qttSupply);
        //setType(suprimento.data.data.typeSupply);
        

        }
    );

    const handleNameSupplyInput = async e => {
        setName({ nameSupply: e.target.value });
      };
      const handleQttInput = async e => {
        setQtt({ firstName: e.target.value });
      };
      const handleTypeInput = async e => {
        setType({ lastName: e.target.value });
      };

       const handleUpdateSuprimento = async () => {
                const { id, nameSupply, qttSupply, typeSupply } = this.state
                const payload = { nameSupply, qttSupply, typeSupply }
        
                await api.updateSuprimentoPorId(id, payload).then(res => {
                    window.alert(`Suprimento atualizado com sucesso`)
                    setName("");
                    setQtt("");
                    setType("");
                })
            }

    return (
    
    <><Wrapper>
            <Title>Criar Suprimento</Title>

            <Label>Nome: </Label>
            <InputText
                type="text"
                value={nameSupply}
                onChange={handleNameSupplyInput} />

            <Label>Quantidade: </Label>
            <InputText
                type="number"
                step="0.1"
                lang="en-US"
                min="1"
                max="100000"
                pattern="[0-9]+([,\.][0-9]+)?"
                value={qttSupply}
                onChange={handleQttInput} />

            <Label>Tipo: </Label>
            <Select value={typeSupply} onChange={handleTypeInput}>
                <option>--</option>
                <option value="Kg">KG</option>
                <option value="L">L</option>
            </Select>
            <br></br>

            <Button onClick={handleUpdateSuprimento}>Adicionar Suprimento</Button>
            <CancelButton href={'/suprimentos/lista'}>Cancel</CancelButton>
        </Wrapper>
        
        <div>{params.id}</div></>
    
    
    )




  };



  export default UpdateSuprimento