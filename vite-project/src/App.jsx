import './App.module.css'
import Navbar from "./Components/NAVBAR/Navbar.jsx"
import ItemListContainer from "./Components/ITEMLISTCONTAINER/itemListContainer.jsx"

function App() {
  const itemListContainerProps = {
    saludo: "HOLA BIENVENIDO A NUESTRA TIENDA DE HAMBURGUESAS"
  }

  return (
    <>
      <Navbar/>
      <ItemListContainer
      { ...itemListContainerProps}
       />
    </>
  )
}

export default App
