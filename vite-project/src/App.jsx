import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NAVBAR/Navbar.jsx";
import CatalogoHamburguesas from './Components/CATA-HAMBUR/CatalogoHamburguesas.jsx';
import DetalleHamburguesa from './Components/DETALLE-HAMBUR/Detallehamburguesa.jsx';
import { db } from './products/firebase.js'; // Importa tu instancia de Firebase

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Realiza una consulta a la colección "products" en Firebase
        const productsSnapshot = await db.collection("products").get();
        const productsData = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Clasicas" element={<CatalogoHamburguesas hamburguesas={products.filter(product => product.categoria === 'Clasicas')} />} />
          <Route path="/Especiales" element={<CatalogoHamburguesas hamburguesas={products.filter(product => product.categoria === 'Especiales')} />} />
          <Route path="/detalle/:id" element={<DetalleHamburguesa hamburguesas={products} />} />
          <Route path="/" element={<CatalogoHamburguesas hamburguesas={products} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
