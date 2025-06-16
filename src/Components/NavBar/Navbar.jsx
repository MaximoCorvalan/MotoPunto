import React from "react"
import './NavBar.css'
import logo from '../../img/Logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
function NavBar() {
 
  return (
    <>
          <nav>

                <img src={logo} className="logo" alt="Logo" />

                <input  className ="inutNavbar" type="text" name="" id="" placeholder="Motos" />
             <ul>

             <FontAwesomeIcon icon={faRightToBracket} style={{ color: 'white', fontSize: '18px' }} />


                <li><NavLink to="/">Iniciar sesion</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
         
            </ul>
           
            

           </nav>
    </>
  )
}

export default NavBar
