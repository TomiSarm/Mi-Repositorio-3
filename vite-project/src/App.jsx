// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NAVBAR/Navbar.jsx";
import CatalogoHamburguesas from './Components/CATA-HAMBUR/CatalogoHamburguesas.jsx';
import DetalleHamburguesa from './Components/DETALLE-HAMBUR/Detallehamburguesa.jsx';
import Carrito from './Components/CART/carrito.jsx'; // Importa el componente del carrito
import { CartProvider } from './Components/CART/CartContext'; // Importa el CartProvider

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/Clasicas" element={<CatalogoHamburguesas categoria="Clasicas" />}/>
            <Route path="/Especiales" element={<CatalogoHamburguesas categoria="Especiales" />}/>
            <Route path="/detalle/:id" element={<DetalleHamburguesa />}/>
            <Route path="/carrito" element={<Carrito />}/> 
            <Route path="/" element={<CatalogoHamburguesas />}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;