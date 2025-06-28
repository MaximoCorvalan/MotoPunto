import React, { use } from "react"
import './NavBar.css'
import logo from '../../assets/img/Logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import DialogCont from "../DialogCont/DialogCont";
import { useState } from "react";
import InicioSesion from "../InicioSesion/InicioSesion";
import Contacto from "../Contact/Contact";
function NavBar() {
  
  const [modalAbierto, setModalAbierto] = useState(false);
 
  const moto = {
  marca: "Yamaha",
  modelo: "MT-03",
  año: 2022
};

  return (
    <>
          <nav>

                <img src={logo} className="logo" alt="Logo" />

                <input  className ="inutNavbar" type="text" name="" id="" placeholder="Motos" />
             <ul>

             <FontAwesomeIcon icon={faRightToBracket} style={{ color: 'white', fontSize: '18px' }} />


                <li className="iniciarSesionLbl" > <a onClick={()=>setModalAbierto(true)}>Iniciar sesion</a></li>
            
            </ul>
            {modalAbierto&&(
            <DialogCont isOpen={modalAbierto} onClose={()=>setModalAbierto(false)} children={<InicioSesion/>}/>
            )}

      
           
            

           </nav>
    </>
  )
}

export default NavBar
