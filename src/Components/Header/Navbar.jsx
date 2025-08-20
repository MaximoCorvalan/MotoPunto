
import "./NavBar.css";
import logo from "../../assets/img/Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faRightToBracket ,faUser } from "@fortawesome/free-solid-svg-icons";

import DialogCont from "../DialogCont/DialogCont";
import { useState } from "react";
import InicioSesion from "../InicioSesion/InicioSesion";
import Autocomplete from "@mui/joy/Autocomplete";

import { useMotos } from '../../Context/ContextMoto';

import CardMotoDescripcion from "../CardMotoDescripcion/CardMotoDescripcion";
function NavBar() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalAbiertoLogin, setModalAbiertoLogin] = useState(false);
  const {motos,usuario} = useMotos()

  const [motoSeleccionada, setMotoSeleccionada] = useState(null);

  const abrirModal = (moto) => {
    setMotoSeleccionada(moto);
    setModalAbierto(true);
 

  };
if (!motos) return <p>Cargando motos...</p>;
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
  name="inputMoto"
  variant="plain"
  slotProps={{ listbox: { variant: "outlined" } }}
  options={motos.map((m) => ({
    label: m.nombre, 
    id: m.idmoto
  }))}
  getOptionLabel={(option) => option.label}
  onChange={(event, newValue) => {
    if (newValue) {
      abrirModal(motos.find(mot => mot.idmoto === newValue.id));
    }
  }}
/>

        <ul>
          {usuario !==null?(
               <FontAwesomeIcon
            icon={faUser}
            style={{ color: "white", fontSize: "25px" }}
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
