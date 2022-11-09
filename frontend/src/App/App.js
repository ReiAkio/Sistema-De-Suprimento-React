import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Login from '../paginas/Login/Login';
import InserirUsuario from '../paginas/Inserirusuario/InserirUsuario';
import { ListaSuprimento } from '../paginas/ListaSuprimento';
import { InserirSuprimento } from '../paginas/InserirSuprimento';
import { UpdateSuprimento } from '../paginas/UpdateSuprimento';


import 'bootstrap/dist/css/bootstrap.min.css'



export default function App() {
  

  return (
    <Routes>
          <Route path="/cadastro" element={<InserirUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/suprimentos/lista" element={<ListaSuprimento/>} />
          <Route path="/suprimentos/criar" element={<InserirSuprimento />} />
          <Route path="/suprimentos/update/:id" element={<UpdateSuprimento />} />

        </Routes>
    
  );
}
