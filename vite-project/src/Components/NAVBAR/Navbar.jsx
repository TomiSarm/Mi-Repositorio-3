import logo from "../../assets/Logo.jpg"
import styles from "./Navbar.module.css"
import Carrito from "../CARTWIDGET/Cartwidget.jsx"
const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <img src={logo} alt="" className= {styles.img}/>
        <nav>
            <ul className={styles.elementosNavbar}>
                <li>MENU</li>
                <li>NOSOTROS</li>
                <li>CONTACTO</li>
            </ul>
        </nav>
        <Carrito/>
    </header>
  )
}

export default Navbar