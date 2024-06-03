import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../products/firebase'; 
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../CART/CartContext.jsx'; 

const DetalleHamburguesa = () => {
  const { id } = useParams();
  const [hamburguesa, setHamburguesa] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchHamburguesa = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setHamburguesa(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHamburguesa();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!hamburguesa) {
    return <div>Hamburguesa no encontrada</div>;
  }

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    setCantidad(Math.max(cantidad - 1, 1));
  };

  const handleAgregarAlCarrito = () => {
    addToCart(hamburguesa, cantidad);
  };

  return (
    <div>
      <h2>{hamburguesa.nombre}</h2>
      <img src={hamburguesa.imagenUrl} alt={hamburguesa.nombre} width="200" height="200" />
      <p>{hamburguesa.descripcion}</p>
      <p>Precio: ${hamburguesa.precio}</p>
      <div>
        <button onClick={handleRestar}>-</button>
        <span>{cantidad}</span>
        <button onClick={handleSumar}>+</button>
      </div>
      <button onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
};

export default DetalleHamburguesa;