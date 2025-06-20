
import { motion } from 'framer-motion';


export default function CardMoto()
{ return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}         // al inicio
      animate={{ x: 0, opacity: 1 }}            // al montarse
      whileHover={{ scale: 1.05 }}               // al hacer hover
      transition={{ duration: 0.5 }}            // duración de animación
      style={{
      
        width: 270,
        height: 350,
        backgroundColor: "#3498db",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "20px",
        cursor: "pointer",
        marginTop:"30px"
       
           }}
    >
      Hover acá
    </motion.div>
  );
    
}