import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const CatalogoHamburguesas = ({ hamburguesas }) => {
    const [cantidades, setCantidades] = useState({});

    const handleSumar = (id) => {
      setCantidades(prevCantidades => ({
        ...prevCantidades,
        [id]: (prevCantidades[id] || 0) + 1 
      }));
    };
  
    const handleRestar = (id) => {
      if (cantidades[id] > 1) { 
        setCantidades(prevCantidades => ({
          ...prevCantidades,
          [id]: prevCantidades[id] - 1 
        }));
      }
    };
  
    const handleAgregarAlCarrito = (id, nombre) => {
      const cantidad = cantidades[id] || 1; 
      console.log(`Agregado al carrito: ${cantidad} x ${nombre}`);
    };
  
    return (
      <div>
        <h2>Catálogo de Hamburguesas</h2>
        {hamburguesas.map(hamburguesa => (
          <div key={hamburguesa.id}>
            <h3>{hamburguesa.nombre}</h3>
            <img src={hamburguesa.imagenUrl} alt={hamburguesa.nombre} width="200" height="200" />
            <p>Precio: ${hamburguesa.precio}</p>
            <div>
              <button onClick={() => handleRestar(hamburguesa.id)}>-</button>
              <span>{cantidades[hamburguesa.id] || 1}</span>
              <button onClick={() => handleSumar(hamburguesa.id)}>+</button>
            </div>
            <button onClick={() => handleAgregarAlCarrito(hamburguesa.id, hamburguesa.nombre)}>Agregar al Carrito</button>
            <Link to={`/detalle/${hamburguesa.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    );
  };
  
  
export default CatalogoHamburguesas;