import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./testes/Login";
import InserirUsuario from "./testes/InserirUsuario";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" />
           <Route component = { InserirUsuario }  path="/InserirUsuario" />
       </BrowserRouter>
   )
}

export default Routes;