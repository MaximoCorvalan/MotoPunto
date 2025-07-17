import { Routes, Route,Navigate } from "react-router-dom";
import ListaMotos from '../Components/ListaMotos/ListaMotos'

import Filtros from "../Components/Filtros/Filtros";
import ListaMarcas from "../Components/ListaMarcas/ListaMarcas";
import NavBar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import '../Pages/viewMain.css'
import { useMotos } from '../Context/ContextMoto';
import FiltroUsuario from "../Components/FiltroUsuarios/Filtrousuario";
import Clientes from "../Components/Clientes/Clientes";








export default function ViewMain() {

     const { tipoUsuario } = useMotos();


    return (
   



        <div className="layout">

            <NavBar></NavBar>
           


              {tipoUsuario!=="Admin"?(
                <>
                <ListaMarcas></ListaMarcas>
                <Filtros></Filtros>
                </>
             
              ):(<FiltroUsuario></FiltroUsuario>)}

            <main>
            

              <div className={tipoUsuario ==="Admin"?"conteinerMainAdmin":"conteinerMain" }>
            
              <Routes>

                  <Route path="" element={<Navigate to="/MotoPunto"/>} />
                  <Route path="/MotoPunto" element={<ListaMotos />} />
                  <Route path="/Administradores/AtencionUsuarios" element={<Clientes></Clientes>} />
              </Routes>
         
              </div>
            </main>
               {tipoUsuario!=="Admin"?(            
                 <Footer></Footer>
                        
              ):null}

        </div>


   

    
    );
}
