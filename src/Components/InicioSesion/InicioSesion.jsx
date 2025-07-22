import React, { Children } from "react";
import logo from "../../assets/img/Logoo.png";
import "../InicioSesion/InicioSesion.css";
import DialogCont from "../DialogCont/DialogCont";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMotos } from "../../Context/ContextMoto";
import Swal from "sweetalert2"; 
import Register from "../Register/Register";
export default function InicioSesion({ onClose }) {
  const [registrarse,setRegister] = useState(false);
  const navigate = useNavigate();
  const {SetTipoUsuario,tipoUsuario} = useMotos()
  function IniciarSesion(e)
  {  
     e.preventDefault();
       const form = e.target;
       const usuario = form.usuario.value;
       const contrasena = form.contraseña.value;

       if(usuario==="admin" && contrasena==="admin")
        {
          SetTipoUsuario("Admin")
       
          navigate("/Administradores/AtencionUsuarios")

        }else if (usuario==="prueba12" && contrasena==="pueba12")
          {
            SetTipoUsuario("User")
            
          }else
            {Swal.fire({
                title: "Usuario no encontrado",
                text: "Por favor revise las credenciales ingresadas",
                icon: "error",
                confirmButtonText: "Cerrar",
                customClass: {
                  popup: "mi-alerta-custom",
                  confirmButton: "mi-boton-rojo",
                },
                showClass: {
                  popup: "swal2-show swal2-animate__fadeInDown",
                },
                hideClass: {
                  popup: "swal2-hide swal2-animate__fadeOutUp",
                },
              }).then((result) => {
                if (result.isConfirmed) {
                  onClose();
                }
              });

            }
          
     
     
     onClose();
  }

  return (
    <>
      <form
        onSubmit={IniciarSesion}
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
