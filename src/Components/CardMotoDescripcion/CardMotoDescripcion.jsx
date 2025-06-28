import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CardMotoDescripcion/CardMotoDescripcion.css";
import DialogCont from "../DialogCont/DialogCont";

export default function CardMotoDescripcion() {
  return (
    <div className="conteinerMotoParent">

    
    <div className="ConteinerMotoD">

        <img
          src="https://static.eldiario.es/clip/a5255f69-2560-4030-b42f-b301f981b1e3_16-9-discover-aspect-ratio_default_0.jpg"
          className="imgMotoDes"
        />

            
       


      <div className="conteinerDescripcionMoto">

        <h2>Caracteristicas tecnicas</h2>


        <div className="divCaract">
          <div className="c1">
            <strong>Motor </strong> 5T
          </div>
          <div className="c1">
            <strong>Cilindrada </strong> 250cc
          </div>
        </div>

         <div className="divCaract">
          <div className="c1">
            <strong>Potencia </strong> 26.5cv
          </div>
          <div className="c1">
            <strong>Alimentación </strong> Inyeccion electronica
          </div>
        </div>


         <div className="divCaract">
          <div className="c1">
            <strong>Refrigeracion</strong> Liquida
          </div>
          <div className="c1">
            <strong>Encendido </strong> Digital
          </div>
        </div>

       

         <div className="divCaract">
          <div className="c1">
            <strong>Transmición </strong> Cadena
          </div>
          <div className="c1">
            <strong>Caja de cambio </strong> 6v
          </div>
        </div>


         <div className="divCaract">
          <div className="c1">
            <strong>Iluminación </strong> LED
          </div>
          <div className="c1">
            <strong>Capacidad de tanque </strong> 13l 
          </div>
        </div>

          <div className="divCaract">
          <div className="c1">
            <strong>Neumático delantero </strong> 100/80/17 
          </div>
          <div className="c1">
            <strong>Neumático trasero </strong> 130/60/17
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
            <strong>Suspensión Delantera</strong> Horquilla telescópica anti fricción
          </div>
          <div className="c1">
            <strong>Suspensión Trasera </strong> Monoamortiguador Nitrox
          </div>
        </div>

       

      </div>
       
      </div>
       <button className="btnContacto">Contacto</button>
 </div>
  );
}
