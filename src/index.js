import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NombreCompleto } from './components/NombreCompleto';
import { Mascota } from './components/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App />
    <NombreCompleto name="Wicho" age={18} show={true} />
    <Mascota name="Kenai" show={true} />
    <NombreCompleto name="Diego" age={19}  show={false} />
    <NombreCompleto name="Pax" age={25} show={false} />
  </React.StrictMode>
);

