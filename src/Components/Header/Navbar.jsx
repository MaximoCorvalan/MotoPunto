import React, { use, useEffect } from "react";
import "./NavBar.css";
import logo from "../../assets/img/Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faRightToBracket ,faUser } from "@fortawesome/free-solid-svg-icons";

import DialogCont from "../DialogCont/DialogCont";
import { useState } from "react";
import InicioSesion from "../InicioSesion/InicioSesion";
import Autocomplete from "@mui/joy/Autocomplete";
import Input from "@mui/joy/Input";
import { useMotos } from '../../Context/ContextMoto';
import { m } from "framer-motion";
import CardMotoDescripcion from "../CardMotoDescripcion/CardMotoDescripcion";
function NavBar() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalAbiertoLogin, setModalAbiertoLogin] = useState(false);
 const {motos,tipoUsuario} = useMotos()

  const [motoSeleccionada, setMotoSeleccionada] = useState(null);

  const abrirModal = (moto) => {
    setMotoSeleccionada(moto);
    setModalAbierto(true);
 

  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setMotoSeleccionada(null);
    setModalAbierto(fals)

  };
  return (
    <>
      <nav>
        <img src={logo} className="logo" alt="Logo" />

           <Autocomplete
        placeholder="Busque su moto"
        className="inputNavbar"
          variant="plain"
          slotProps={{ listbox: { variant: "outlined" } }}
               options={motos.map((m)=>m.modelo)}
               onChange={(event, newValue) => {
               if (newValue) {
    const motoSelect = motos.find(mot => mot.modelo === newValue);
    abrirModal(motoSelect); 
  }
  }} />

        <ul>
          {tipoUsuario==="Admin" || tipoUsuario=="User"?(
               <FontAwesomeIcon
            icon={faUser}
            style={{ color: "white", fontSize: "18px" }}
          />

          ):(<>
                    <FontAwesomeIcon
            icon={faRightToBracket}
            style={{ color: "white", fontSize: "18px" }}
            />
          <li className="iniciarSesionLbl">
            {" "}
            <a onClick={() => setModalAbiertoLogin(true)}>Iniciar sesion</a>
          </li>
            </>

          )}

       
        </ul>
        {modalAbierto?  (
          <DialogCont
            isOpen={modalAbierto}
            onClose={() => setModalAbierto(false)}
            children={<CardMotoDescripcion onClose={cerrarModal} motoSeleccionada={motoSeleccionada}></CardMotoDescripcion>}
          />
        ):modalAbiertoLogin?(
           <DialogCont
            isOpen={modalAbiertoLogin}
            onClose={() => setModalAbiertoLogin(false)}
            children={<InicioSesion onClose={cerrarModal}></InicioSesion>}
          />
        ):null}
      </nav>
    </>
  );
}

export default NavBar;
