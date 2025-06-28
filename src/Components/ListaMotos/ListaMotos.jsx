import { useState } from 'react'

import CardMoto from '../CardMoto/CardMoto'
import CardMotoDescripcion from '../CardMotoDescripcion/CardMotoDescripcion';
import { dialog } from 'framer-motion/m';
import DialogCont from '../DialogCont/DialogCont';

function ListaMotos() {
  
    const [modalAbierto, setModalAbierto] = useState(false);
    const [motoSeleccionada, setMotoSeleccionada] = useState(null);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  return (
    <>
      
   
         {[...Array(40)].map((_, i) => (
        <CardMoto key={i} onclick={abrirModal} />
      ))}
      {modalAbierto&&(
        <DialogCont  isOpen={modalAbierto} onClose={()=>setModalAbierto(false)} children={<CardMotoDescripcion></CardMotoDescripcion>}></DialogCont>
      
      )}
    
    </>
  )
}

export default ListaMotos
