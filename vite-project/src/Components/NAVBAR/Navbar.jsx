import logo from "../../assets/Logo.jpg"
import styles from "./Navbar.module.css"
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
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
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" id="Form"/>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

