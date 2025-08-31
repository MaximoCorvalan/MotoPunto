
import { motion } from 'framer-motion';
import '../CardMoto/CardMoto.css'



export default function CardMoto({onclick, moto})
{ 





  
  return (
    <>
    <motion.div
      initial={{ x: -100, opacity: 0 }}         // al inicio
      animate={{ x: 0, opacity: 1 }}            // al montarse
      whileHover={{ scale: 1.05 }}      
        transition={{ duration: 1}}
      className='conteinercardMoto'  
      onClick={onclick}       // duración de animación
 
    >
      <img src={moto.imagens[0].urlimagen} className="imgMoto" alt="" />
      <div className='caracteristicasConteiner'>
      <p>{moto.marcaDescripcion}</p>
      <p> {moto.nombre} </p>
      <p>${moto.precio}</p>
      </div>

   
    </motion.div>
     
    </>
  );
}