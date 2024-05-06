import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const DetalleHamburguesa = ({ hamburguesas }) => {
    const { id } = useParams();
    const [hamburguesa, setHamburguesa] = useState(null);
  
    useEffect(() => {
      const fetchHamburguesa = async () => {
        // Simular una carga de datos con 2 segundos de retraso
        await new Promise(resolve => setTimeout(resolve, 2000));
        const hamburguesaEncontrada = hamburguesas.find(h => h.id === parseInt(id));
        setHamburguesa(hamburguesaEncontrada);
      };
      fetchHamburguesa();
    }, [hamburguesas, id]);
  
    if (!hamburguesa) {
      return <div>Cargando...</div>;
    }
  
    return (
      <div>
        <h2>{hamburguesa.nombre}</h2>
        <img src={hamburguesa.imagenUrl} alt={hamburguesa.nombre} width="200" height="200" />
        <p>{hamburguesa.descripcion}</p>
        <p>Precio: ${hamburguesa.precio}</p>
      </div>
    );
  };
  
export default DetalleHamburguesa;  