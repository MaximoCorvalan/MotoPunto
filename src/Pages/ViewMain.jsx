import { Routes, Route, NavLink,Navigate } from "react-router-dom";
import ListaMotos from '../Components/ListaMotos/ListaMotos'

import Filtros from "../Components/Filtros/Filtros";
import ListaMarcas from "../Components/ListaMarcas/ListaMarcas";
import NavBar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import '../Pages/viewMain.css'
import { useMotos } from '../Context/ContextMoto';








export default function ViewMain() {

const { tipoUsuario } = useMotos();
alert(tipoUsuario);



    return (
   



        <div className="layout">

            <NavBar></NavBar>
           

              <ListaMarcas></ListaMarcas>

              {tipoUsuario===""?(
              
                <Filtros></Filtros>
             
              ):null}

            <main>
            

              <div className="conteinerMain">
                {tipoUsuario===""?(
              <Routes>

                  <Route path="" element={<Navigate to="/MotoPunto"  />} />
                  <Route path="/MotoPunto" element={<ListaMotos />} />
                  
               
           
        
              </Routes>
                ):(<h1>LISTA CON LOS USUARIO POR ATENDER</h1>)}
              </div>
            </main>

           <Footer></Footer>
        </div>


   

    
    );
}
