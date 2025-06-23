import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../DialogCont/DialogCont.css'

export default function DialogCont({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
          <>
          <motion.div
          className="backDrop"
          
          onClick={onClose} // clic afuera cierra
          >
          <motion.div
          onClick={e => e.stopPropagation()}
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ x: "100vw" }}
          transition={{ type: "spring", stiffness: 50 }}
          className="modal"
          
          >
            {children}
          </motion.div>
       
        </motion.div>
              </>
      )}
    </AnimatePresence>
  );
}
