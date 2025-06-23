import React from "react"
import './NavBar.css'
import logo from '../../img/Logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import DialogCont from "../DialogCont/DialogCont";
import { useState } from "react";
import InicioSesion from "../InicioSesion/InicioSesion";
function NavBar() {
  
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
          <nav>

                <img src={logo} className="logo" alt="Logo" />

                <input  className ="inutNavbar" type="text" name="" id="" placeholder="Motos" />
             <ul>

             <FontAwesomeIcon icon={faRightToBracket} style={{ color: 'white', fontSize: '18px' }} />


                <li > <a onClick={()=>setModalAbierto(true)}>Iniciar sesion</a></li>
                <li><NavLink to="/">Contacto</NavLink></li>
         
            </ul>
            {modalAbierto&&(
            <DialogCont isOpen={modalAbierto} onClose={()=>setModalAbierto(false)} children={<InicioSesion/>}/>
            )}
           
            

           </nav>
    </>
  )
}

export default NavBar
