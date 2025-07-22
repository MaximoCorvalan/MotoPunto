
import { motion } from 'framer-motion';
import '../CardMoto/CardMoto.css'



export default function CardMoto({onclick, moto})
{ 


  
  return (
    <>
    <motion.div
      initial={{ x: -100, opacity: 0 }}         // al inicio
      animate={{ x: 0, opacity: 1 }}            // al montarse
      whileHover={{ scale: 1.05 }}               // al hacer hover
      transition={{ duration: 0.8 }}   
      className='conteinercardMoto'  
      onClick={onclick}       // duración de animación
 
    >
      <img src={moto.image[0]} className="imgMoto" alt="" />
      <div className='caracteristicasConteiner'>
      <p>{moto.marca}</p>
      <p> {moto.modelo} </p>
      <p>${moto.precio}</p>
      </div>

   
    </motion.div>
     
    </>
  );
}