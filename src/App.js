import './App.css';
import './Componentes/body.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//---------------------PAGES
import Home from './Paginas/Home.js'
import Contacto from './Paginas/Contacto.js'
import Administracion from './Paginas/Administracion.js'
import PaginaAdmiIngredientes from './Paginas/admi.ingredientes.js'
import PaginaAdmiProductos from './Paginas/admi.productos.js'
import PaginaAdmiPedidos from './Paginas/admi.pedidos.js'
//---------------------


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route index element = {<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/contacto" element = {<Contacto />} />
          <Route path = "/administracion" element = {<Administracion />} />
          <Route path = "/admi-ingredientes" element = {<PaginaAdmiIngredientes />} />
          <Route path = "/admi-productos" element = {<PaginaAdmiProductos />} />
          <Route path = "/admi-pedidos" element = {<PaginaAdmiPedidos />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
