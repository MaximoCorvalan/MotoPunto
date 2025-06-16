import { Routes, Route, NavLink } from "react-router-dom";
import Marcas from '../Components/Marcas/Marcas'
import './Rutas.css'

import ListaMarcas from "../Components/ListaMarcas/ListaMarcas";
import NavBar from "../Components/NavBar/Navbar";



export default function Rutas() {
    return (
        <>
        <div className="layout">

            <NavBar></NavBar>
           

         <ListaMarcas></ListaMarcas>
         
            <main>

                <section className="Filtros">
                    <h1>FILTROS</h1>
                    <ul>
                        <li>
                            sfsa
                        </li>
                          <li>
                            sfsa
                        </li>
            
                    </ul>

                </section>


             
         
   
              <Routes>
                <Route path="/" element={<Marcas indicador={1} />} />
                <Route path="/contacto" element={<Marcas indicador={2} />} />
                <Route path="/articulos" element={<Marcas indicador={3} />} />
            </Routes>
            </main>

            <footer>
                footer 
            </footer>

        </div>


        </>
    );
}
