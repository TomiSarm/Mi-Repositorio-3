import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../products/firebase'; 
import { doc, getDoc } from 'firebase/firestore';

const DetalleHamburguesa = () => {
  const { id } = useParams();
  const [hamburguesa, setHamburguesa] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchHamburguesa = async () => {
      try {
        // Simular una carga de datos con 2 segundos de retraso
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Referencia al documento de la hamburguesa en Firestore
        const docRef = doc(db, 'hamburguesas', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setHamburguesa(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false); // Establecer el estado de carga a false
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