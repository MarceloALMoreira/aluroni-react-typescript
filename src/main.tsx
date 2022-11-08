import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Forms from './components/Formulario';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Forms/>
  </React.StrictMode>
)
