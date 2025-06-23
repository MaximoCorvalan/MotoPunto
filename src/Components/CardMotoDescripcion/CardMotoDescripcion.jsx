import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CardMotoDescripcion/CardMotoDescripcion.css";
import DialogCont from "../DialogCont/DialogCont";

export default function CardMotoDescripcion() {
  return (

    <div className="ConteinerMotoDescripcion">
        <div>
        <img src="https://static.eldiario.es/clip/a5255f69-2560-4030-b42f-b301f981b1e3_16-9-discover-aspect-ratio_default_0.jpg" className="imgMotoDes" />

        </div>
        <div>
            descripcion
        </div>

    </div>
   
     
       
    
 
  );
}
