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
  const [registrarse, setRegister] = useState(false);
  const navigate = useNavigate();
  const { SetUsuario, usuario } = useMotos();
  async function IniciarSesion(e) {
    e.preventDefault();
    const form = e.target;
    const usuario = form.usuario.value;
    const contrasena = form.contraseña.value;

    const response = await fetch("https://localhost:7117/api/Usuario/EXISTE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Usuario: usuario, contrasena: contrasena }),
    });

    if (!response.ok) 
    {
       Swal.fire({
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

    }else
      {
        const data = await response.json();
      
        if (data.idrol==1) {
          SetUsuario(data);
  
          navigate("/Administradores/AtencionUsuarios");
        } else  {
          
          SetUsuario(data);
        } 
        onClose();


      }
    
  }

  return (
    <>
      <form onSubmit={IniciarSesion}>
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

              setRegister(true);
            }}
          >
            Registrarse
          </a>
        </div>
      </form>

      {registrarse && (
        <DialogCont 
          isOpen={registrarse}
          onClose={() => setRegister(false)}
        >
          <Register />
        </DialogCont>
      )}
    </>
  );
}
