import React from "react";
import "../Register/Register.css";
import Swal from "sweetalert2"; // <-- Agregá esto
export default function Register({ onClose }) {

    function registrar() {
    //AACA PREGUNTAR SI TIENE ESTA REGISTRADO Y DEMAS

    Swal.fire({
      title: "Se ha registrado correctamente",
    
      icon: "success",
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
    }).then((result)=>
      {
        if(result.isConfirmed)
          {
            onClose()
          }
      });
  }
  return (
    <>
      <div className="conteinerRegister">
        <h3>Ingrese los siguientes datos</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registrar();
            console.log("Formulario enviado");
          }}
        >
          <div className="contItem">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" type="text" placeholder="Ingrese su nombre" required />

            <label htmlFor="apellido">Apellido</label>
            <input id="apellido" type="text" placeholder="Ingrese su apellido" required />
          </div>

   

          <div className="contItem">
            <label htmlFor="telefono">Teléfono</label>
            <input id="telefono" type="tel" placeholder="Ej: +54 11 1234 5678" required />
            <label htmlFor="direccion">Dirección</label>
            <input id="direccion" type="text" placeholder="Ingrese su dirección" required />
          </div>

          

          <div className="contItem">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Ingrese su correo electrónico" required />
         

       
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" placeholder="Ingrese una contraseña" required />
          </div>

          <button className="btn">
            Registrarse

          </button>

         
        </form>
      </div>
    </>
  );
}
