import React, { Children } from "react";
import logo from "../../assets/img/Logoo.png";
import "../InicioSesion/InicioSesion.css";
import DialogCont from "../DialogCont/DialogCont";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMotos } from "../../Context/ContextMoto";

import Register from "../Register/Register";
export default function InicioSesion({ onClose }) {
  const [registrarse,setRegister] = useState(false);
  const navigate = useNavigate();
  const {SetTipoUsuario,tipoUsuario} = useMotos()
  function esAdmin(e)
  {  
     e.preventDefault();
       const form = e.target;
       const usuario = form.usuario.value;
       const contrasena = form.contraseña.value;

       if(usuario==="admin" && contrasena==="admin")
        {
          SetTipoUsuario("Admin")
          alert(tipoUsuario)
          navigate("/Administradores/AtencionUsuarios")

        }
     
     
     onClose();
  }

  return (
    <>
      <form
        onSubmit={esAdmin}
      >
        <div className="ConteinerLogin">
          <img className="LogoLogin" src={logo} alt="Logo MotoPunto" />

          <div className="insert">
            <label htmlFor="usuario">Usuario</label>
            <input id="usuario" type="text" required />
          </div>

          <div className="insert">
            <label htmlFor="contraseña">Contraseña</label>
            <input id="contraseña" type="password" required />
          </div>

          <button type="submit" className="btnInciarSesion">
            Iniciar Sesión
          </button>

          <a
            className="register"
            onClick={(e) => {
              e.preventDefault();

              setRegister(true)
         
            }}
          >
            Registrarse
          </a>
        </div>
      </form>

    {registrarse && (
        <DialogCont //NO ME TERMINA DE GUSTAR QUE SE HABRA DENTRO DEL MISMO COMP TAL VEZ USAR REACT ROUTER EN ESTA PARTE (?)
          isOpen={registrarse}
          onClose={() => setRegister(false)}
        >
          <Register />
        </DialogCont>
      )}
    </>
  );
}
