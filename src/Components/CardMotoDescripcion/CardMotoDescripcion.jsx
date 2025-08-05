import React from "react";
import "../CardMotoDescripcion/CardMotoDescripcion.css";
import InnerImageZoom from 'react-inner-image-zoom';


import { useState ,useEffect} from "react";
import Swal from "sweetalert2"; 
import { useMotos } from "../../Context/ContextMoto";

export default function CardMotoDescripcion({ onClose,motoSeleccionada }) {

  const [enviado, setEnviado] = useState(false);
  const [urlImagen,setUrlImagen] = useState(motoSeleccionada.imagens[0].urlimagen)
  const {tipoUsuario} = useMotos()


  if (!motoSeleccionada) {
    return <div>Cargando información de la moto...</div>;
  }

function recibirAsesoramiento() {
  // Validar si el usuario está registrado
  const registrado = tipoUsuario.trim() !== "";

  let titulo = "";
  let texto = "";
  let icono = "";

  if (registrado) {
    setEnviado(true);
    titulo = "¡Gracias por tu interés!";
    texto = "En breve un asesor se comunicará con vos al siguiente número 113242213";
    icono = "success";
  } else {
    titulo = "Primero debe registrarse";
    texto = "Por favor, complete el registro para continuar.";
    icono = "error";
  }

  Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
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

  return (
    <div className="conteinerMotoParent">
      
      <div className="ConteinerMotoD">

        <div className="conteinerImgMoto">

        <img
          src={urlImagen}
          className="imgMotoDes"
          />

          <div className="contFotos">
            {
             motoSeleccionada.imagens?.map((motoUrl,index)=>
                {
                  return <div key={index} className="cuadro" onClick={()=>setUrlImagen(motoUrl.urlimagen)}><img  className="contImg" src={motoUrl.urlimagen} /> </div>;
                })
            }
              
          </div>
          
          </div>
    


        <div className="conteinerDescripcionMoto">
          <h2>Caracteristicas tecnicas</h2>

          <div className="divCaract">
            <div className="c1">
              <strong>Motor </strong> {motoSeleccionada.motor}
            </div>
            <div className="c1">
              <strong>Cilindrada </strong> {motoSeleccionada.cilindrada}cc
            </div>
          </div>

          <div className="divCaract">
            <div className="c1">
              <strong>Potencia </strong> {motoSeleccionada.potencia}
            </div>
            <div className="c1">
              <strong>Alimentación </strong> {motoSeleccionada.alimentacion}
            </div>
          </div>

          <div className="divCaract">
            <div className="c1">
              <strong>Refrigeracion</strong> {motoSeleccionada.refrigeracion}
            </div>
            <div className="c1">
              <strong>Encendido </strong> {motoSeleccionada.encendido}
            </div>
          </div>

          <div className="divCaract">
            <div className="c1">
              <strong>Transmición </strong> {motoSeleccionada.transmision}
            </div>
            <div className="c1">
              <strong>Caja de cambio </strong> {motoSeleccionada.cajacambio}
            </div>
          </div>

          <div className="divCaract">
            <div className="c1">
              <strong>Iluminación </strong> {motoSeleccionada.iluminacion}
            </div>
            <div className="c1">
              <strong>Capacidad de tanque </strong> {motoSeleccionada.tanquel}
            </div>
          </div>

          <div className="divCaract">
            <div className="c1">
              <strong>Neumático delantero </strong> {motoSeleccionada.neumaticod}
            </div>
            <div className="c1">
              <strong>Neumático trasero </strong> {motoSeleccionada.neumaticot}
            </div>
          </div>

          <div className="divCaract">
            <div className="c1">
              <strong>Combustible</strong> Nafta
            </div>
            <div className="c1">
              <strong>Aceite</strong> Mineral
            </div>
          </div>

          <div className="divCaract">
            <div className="c1">
              <strong>Suspensión Delantera</strong> {motoSeleccionada.suspenciond}
            
            </div>
            <div className="c1">
              <strong>Suspensión Trasera </strong>  {motoSeleccionada.suspenciont}
            </div>
          </div>
        </div>
      </div>

      {!enviado && (
        <button className="btnContacto" onClick={recibirAsesoramiento}>
          Recibir asesoramiento
        </button>
      ) }
    </div>
  );
}
