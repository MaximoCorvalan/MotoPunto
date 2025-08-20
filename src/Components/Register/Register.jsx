import React from "react";
import "../Register/Register.css";
import Swal from "sweetalert2"; // <-- Agregá esto
export default function Register({ onClose }) {
  async function registrar(e) {
    const form = e.target;
    const Nombre = form.nombre.value;
    const Apellido = form.apellido.value;
    const contrasena = form.password.value;
    const direccion = form.direccion.value;
    const telefono = form.telefono.value;
    const email = form.email.value;

    const usuario = {
      idRol :2,
      nombre: Nombre,
      apellido: Apellido,
      numero: telefono,
      email: email,
      contrasena: contrasena,
      estado: 0,
      direccion: direccion,
    };

    const response = await fetch(
      "https://localhost:7117/api/Usuario/subirUsuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      }
    );

    if(response.ok)
      {

        
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
        }).then((result) => {
          if (result.isConfirmed) {
            onClose();
          }
        });
      }else
        {
             Swal.fire({
          title: "Error al intentar registrar usuario , intentelo más tarde",
          
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
      }
      return (
    <>
      <div className="conteinerRegister">
        <h3>Ingrese los siguientes datos</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registrar(e);
            console.log("Formulario enviado");
          }}
        >
          <div className="contItem">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Ingrese su nombre"
              required
            />

            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              type="text"
              placeholder="Ingrese su apellido"
              required
            />
          </div>

          <div className="contItem">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              type="tel"
              placeholder="Ej: +54 11 1234 5678"
              required
            />
            <label htmlFor="direccion">Dirección</label>
            <input
              id="direccion"
              type="text"
              placeholder="Ingrese su dirección"
              required
            />
          </div>

          <div className="contItem">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Ingrese su correo electrónico"
              required
            />

            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Ingrese una contraseña"
              required
            />
          </div>

          <button className="btn">Registrarse</button>
        </form>
      </div>
    </>
  );
}
