import Carrito from "../../assets/Carrito.jpg"
import Styles from "./Cartwidget.module.css"

const Cartwidget = () => {
  return (
    <>
    <img src={Carrito} alt="" className={Styles.Carrito}/>
    </>
  )
}

export default Cartwidget