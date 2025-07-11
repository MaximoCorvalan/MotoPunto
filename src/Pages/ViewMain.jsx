import { Routes, Route, NavLink,Navigate } from "react-router-dom";
import ListaMotos from '../Components/ListaMotos/ListaMotos'

import Filtros from "../Components/Filtros/Filtros";
import ListaMarcas from "../Components/ListaMarcas/ListaMarcas";
import NavBar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import '../Pages/viewMain.css'
import ContextMoto from "../Context/ContextMoto";




export default function ViewMain() {
    return (
   

         <ContextMoto>

        <div className="layout">

            <NavBar></NavBar>
           

              <ListaMarcas></ListaMarcas>
         
                <Filtros></Filtros>
            <main>
            

              <div className="conteinerMain">
              <Routes>
           
                 <Route path="" element={<Navigate to="/MotoPunto"  />} />
                 <Route path="/MotoPunto" element={<ListaMotos />} />
        
              </Routes>
              </div>
            </main>

           <Footer></Footer>
        </div>


         </ContextMoto>

    
    );
}
