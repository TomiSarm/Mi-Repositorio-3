import logo from "../../assets/Logo.jpg"
import styles from "./Navbar.module.css"
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CART/CartContext';
import cartIcon from '../../assets/Carrito.jpg';
const Navbar = () => {
  const { cart } = useContext(CartContext); 

  return (
<header className={styles.navbar}>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="150" height="150" className="d-inline-block align-text-top"/>
          </Link>
          <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
          <Link className="nav-link" to="/Clasicas">Clásicas</Link>
          <Link className="nav-link" to="/Especiales">Especiales</Link>
          <div>
          <Link to="/carrito">
          <img src={cartIcon} alt="Carrito" width="30" height="30" />
          Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

