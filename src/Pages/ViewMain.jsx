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

     const { usuario } = useMotos();


    return (
   



        <div className="layout">

       
           


              { usuario==null ||usuario.idrol!==1?(
                <>
                <div className="contMenu">
                    <NavBar></NavBar>
                <ListaMarcas></ListaMarcas>
                <Filtros></Filtros>
                </div>
                </>
             
              ):
              (
                <>     <NavBar></NavBar>
              <FiltroUsuario></FiltroUsuario>
                </>
              )}

            <main>
            

            <div className={usuario !== null && usuario.idrol === 1 ? "conteinerMainAdmin" : "conteinerMain"}>

            
              <Routes>

                  <Route path="" element={<Navigate to="/MotoPunto"/>} />
                  <Route path="/MotoPunto" element={<ListaMotos />} />
                  <Route path="/Administradores/AtencionUsuarios" element={<Clientes></Clientes>} />
              </Routes>
         
              </div>
            </main>
               {usuario==null ||usuario.idrol!==1?(            
                 <Footer></Footer>
                        
              ):null}

        </div>


   

    
    );
}
