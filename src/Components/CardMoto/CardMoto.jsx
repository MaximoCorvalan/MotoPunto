
import { motion } from 'framer-motion';
import '../CardMoto/CardMoto.css'



export default function CardMoto({onclick})
{ 

  
  
  return (
    <>
    <motion.div
      initial={{ x: -100, opacity: 0 }}         // al inicio
      animate={{ x: 0, opacity: 1 }}            // al montarse
      whileHover={{ scale: 1.05 }}               // al hacer hover
      transition={{ duration: 0.5 }}   
      className='conteinercardMoto'  
      onClick={onclick}       // duración de animación
 
    >
      <img src="https://static.eldiario.es/clip/a5255f69-2560-4030-b42f-b301f981b1e3_16-9-discover-aspect-ratio_default_0.jpg" className="imgMoto" alt="" />
      <div className='caracteristicasConteiner'>
      <p>KAWASAKI</p>
      <p> H2R </p>
      <p>1$</p>
      </div>

   
    </motion.div>
     
    </>
  );
}