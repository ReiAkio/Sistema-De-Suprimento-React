import {createRoot} from 'react-dom/client';
import React from 'react';
import App from './App/App';
import {BrowserRouter as Router} from 'react-router-dom';
import { NavBar } from './components';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);




// 👇️ wrap App in Router
root.render(
  <Router>
    <NavBar/>
    <App/>
  </Router>

);
