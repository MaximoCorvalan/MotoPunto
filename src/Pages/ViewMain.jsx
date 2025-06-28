import { Routes, Route, NavLink } from "react-router-dom";
import ListaMotos from '../Components/ListaMotos/ListaMotos'

import Filtros from "../Components/Filtros/Filtros";
import ListaMarcas from "../Components/ListaMarcas/ListaMarcas";
import NavBar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import '../Pages/viewMain.css'




export default function ViewMain() {
    return (
        <>
      
        <div className="layout">

            <NavBar></NavBar>
           

              <ListaMarcas></ListaMarcas>
         
                <Filtros></Filtros>
            <main>
            

              <div className="conteinerMain">
              <Routes>
           
                <Route path="" element={<ListaMotos />} />
        
              </Routes>
              </div>
            </main>

           <Footer></Footer>
        </div>



        </>
    );
}
