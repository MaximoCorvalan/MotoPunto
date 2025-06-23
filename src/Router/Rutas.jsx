import { Routes, Route, NavLink } from "react-router-dom";
import Marcas from '../Components/ListaMotos/ListaMotos'
import './Rutas.css'
import Filtros from "../Components/Filtros/Filtros";
import ListaMarcas from "../Components/ListaMarcas/ListaMarcas";
import NavBar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import CardMotoDescripcion from "../Components/CardMotoDescripcion/CardMotoDescripcion";



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
           
                <Route path="" element={<Marcas />} />
        
              </Routes>
              </div>
            </main>

           <Footer></Footer>
        </div>



        </>
    );
}
