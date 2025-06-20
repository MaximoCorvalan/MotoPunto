import { Routes, Route, NavLink } from "react-router-dom";
import Marcas from '../Components/Marcas/Marcas'
import './Rutas.css'
import Filtros from "../Components/Filtros/Filtros";
import ListaMarcas from "../Components/ListaMarcas/ListaMarcas";
import NavBar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";



export default function Rutas() {
    return (
        <>
        <div className="layout">

            <NavBar></NavBar>
           

              <ListaMarcas></ListaMarcas>
         
                <Filtros></Filtros>
            <main>
            

              <div className="conteinerMain">
              <Routes>
                <Route path="/" element={<Marcas indicador={1} />} />
                <Route path="/contacto" element={<Marcas indicador={2} />} />
                <Route path="/articulos" element={<Marcas indicador={3} />} />
            </Routes>
              </div>
            </main>

           <Footer></Footer>
        </div>


        </>
    );
}
