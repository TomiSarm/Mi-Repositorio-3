import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../products/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { CartContext } from '../CART/CartContext'; 

const CatalogoHamburguesas = ({ categoria }) => {
  const [hamburguesas, setHamburguesas] = useState([]);
  const { addToCart } = useContext(CartContext); 
  const [cantidades, setCantidades] = useState({});

  useEffect(() => {
    const fetchHamburguesas = async () => {
      try {
        const hamburguesasCollection = collection(db, 'products');
        const hamburguesasSnapshot = await getDocs(hamburguesasCollection);
        const hamburguesasData = hamburguesasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setHamburguesas(hamburguesasData);
      } catch (error) {
        console.error("Error fetching hamburguesas: ", error);
      }
    };

    fetchHamburguesas();
  }, []);

  const filteredHamburguesas = categoria 
    ? hamburguesas.filter(hamburguesa => hamburguesa.categoria === categoria) 
    : hamburguesas;

  const handleSumar = (id) => {
    setCantidades(prevCantidades => ({
      ...prevCantidades,
      [id]: (prevCantidades[id] || 0) + 1
    }));
  };

  const handleRestar = (id) => {
    setCantidades(prevCantidades => ({
      ...prevCantidades,
      [id]: Math.max((prevCantidades[id] || 0) - 1, 0)
    }));
  };

  const handleAgregarAlCarrito = (hamburguesa) => {
    const cantidad = cantidades[hamburguesa.id] || 1;
    addToCart(hamburguesa, cantidad);
  };

  return (
    <div>
      <h2>Catálogo de Hamburguesas</h2>
      {filteredHamburguesas.map(hamburguesa => (
        <div key={hamburguesa.id}>
          <h3>{hamburguesa.nombre}</h3>
          <img src={hamburguesa.imagenUrl} alt={hamburguesa.nombre} width="200" height="200" />
          <p>Precio: ${hamburguesa.precio}</p>
          <div>
            <button onClick={() => handleRestar(hamburguesa.id)}>-</button>
            <span>{cantidades[hamburguesa.id] || 0}</span>
            <button onClick={() => handleSumar(hamburguesa.id)}>+</button>
          </div>
          <button onClick={() => handleAgregarAlCarrito(hamburguesa)}>Agregar al Carrito</button>
          <Link to={`/detalle/${hamburguesa.id}`}>Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default CatalogoHamburguesas;