import './App.module.css'
import Navbar from "./Components/NAVBAR/Navbar.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogoHamburguesas from './Components/CATA-HAMBUR/CatalogoHamburguesas.jsx';
import DetalleHamburguesa from './Components/DETALLE-HAMBUR/Detallehamburguesa.jsx';
import Mockdata from "../Utils/MockData.js";

const hamburguesasClasicas = Mockdata.filter(hamburguesa => hamburguesa.categoria === 'Clasicas');
const hamburguesasEspeciales = Mockdata.filter(hamburguesa => hamburguesa.categoria === 'Especiales');

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Clasicas" element={<CatalogoHamburguesas hamburguesas={hamburguesasClasicas} />} />
          <Route path="/Especiales" element={<CatalogoHamburguesas hamburguesas={hamburguesasEspeciales} />} />
          <Route path="/detalle/:id" element={<DetalleHamburguesa hamburguesas={Mockdata} />} />
          <Route path="/" element={<CatalogoHamburguesas hamburguesas={Mockdata} />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
