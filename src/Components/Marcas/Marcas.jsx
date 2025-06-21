import { useState } from 'react'

import CardMoto from '../CardMoto/CardMoto'
import CardMotoDescripcion from '../CardMotoDescripcion/CardMotoDescripcion';

function Marcas({indicador =0}) {
  
    const [modalAbierto, setModalAbierto] = useState(false);
  const [motoSeleccionada, setMotoSeleccionada] = useState(null);

  const abrirModal = () => {

    alert("ne")
    setModalAbierto(true);
  };

  return (
    <>
   
         {[...Array(30)].map((_, i) => (
        <CardMoto key={i} onclick={abrirModal} />
      ))}
      {modalAbierto&&(
       <CardMotoDescripcion isOpen={modalAbierto}></CardMotoDescripcion>
      )}
    
    </>
  )
}

export default Marcas
