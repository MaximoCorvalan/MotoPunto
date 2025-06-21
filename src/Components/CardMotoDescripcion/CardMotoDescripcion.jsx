import react from "react";
import { motion, AnimatePresence, scale } from 'framer-motion';

export default function CardMotoDescripcion({isOpen})
{
    return(
        <>
        <AnimatePresence>
            {alert("se abru")}
            
            {isOpen &&(
                <>
        
                <motion.div
                className="backDrop"
                
                >
                    <motion.div
                    className="modal"
                  
                    >
                        putitaplinda
                        
                    </motion.div>

                </motion.div>

                </>
            )}

        </AnimatePresence>
        
        
        </>
    )
}