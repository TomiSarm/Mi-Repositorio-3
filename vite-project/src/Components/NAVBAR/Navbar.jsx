import logo from "../../assets/Logo.jpg"
import styles from "./Navbar.module.css"
import Carrito from "../CARTWIDGET/Cartwidget.jsx"
const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand"><img src={logo} alt="Logo" width="150" height="150" className="d-inline-block align-text-top"/></a>
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Our history</a>
            <a className="nav-link" href="#">Contact</a>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="Form"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Carrito/>
          </div>
        </nav>
        
    </header>
  )
}

export default Navbar