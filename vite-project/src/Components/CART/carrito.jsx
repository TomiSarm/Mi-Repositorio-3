import React, { useContext } from 'react';
import { CartContext } from '../CART/CartContext'; 

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext); 

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.nombre}</h3>
              <img src={item.imagenUrl} alt={item.nombre} width="100" height="100" />
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;