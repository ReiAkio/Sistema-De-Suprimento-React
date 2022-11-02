import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Login from '../paginas/Login/Login';
import InserirUsuario from '../paginas/Inserirusuario/InserirUsuario';
import { ListaSuprimento } from '../paginas/ListaSuprimento';
import { InserirSuprimento } from '../paginas/InserirSuprimento';
import { UpdateSuprimento } from '../paginas/UpdateSuprimento';


import 'bootstrap/dist/css/bootstrap.min.css'



export default function App() {
  // const navigate = useNavigate();

  // const navigateToInserir = () => {
  //   navigate('/cadastro');
  // };

  // const navigateLogin = () => {
  //   navigate('/login');
  // };

  return (
    <Routes>
          <Route path="/cadastro" element={<InserirUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/suprimentos/lista" element={<ListaSuprimento/>} />
          <Route path="/suprimentos/criar" element={<InserirSuprimento />} />
          <Route path="/suprimentos/update" element={<UpdateSuprimento />} />

        </Routes>
    // <div>
    //   <div className="Cabecalho">
    //     <button onClick={navigateLogin}>Login</button><text> </text>
    //     <button onClick={navigateLogin}>Inserir Suprimento</button><text> </text>
    //     <button onClick={navigateLogin}>Lista de Suprimentos</button><text> </text>
    //     <button onClick={navigateLogin}>Sair da conta</button><text> </text>
    //     {<button onClick={navigateToInserir}>Inserir</button> }

        
        
        
    //   </div>
    // </div>
  );
}
