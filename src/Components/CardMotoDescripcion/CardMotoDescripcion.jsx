import React from "react";

import "../CardMotoDescripcion/CardMotoDescripcion.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function CardMotoDescripcion({onClose}) {

  const[enviado,setEnviado] =useState(false)
  function recibirAsesoramiento()
  {
    setEnviado(true)

  }

  
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

      {!enviado?(
        
        <button className="btnContacto" onClick={recibirAsesoramiento}>Recibir asesoramiento</button>
      ):(
        <>
           <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4  },
            }}
            className="conteinerAnimation"
         
            >
     
            <p  className="llamada">En breve recibirás una llamada al siguiente número 112342</p>
        </motion.div>

          </>
      )
    }

 </div>
  );
}
