import { useState } from 'react';
import data from '../../Data/Moto.json';
import CardMoto from '../CardMoto/CardMoto';
import CardMotoDescripcion from '../CardMotoDescripcion/CardMotoDescripcion';
import DialogCont from '../DialogCont/DialogCont';
import { useMotos } from '../../Context/ContextMoto';

function ListaMotos() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [motoSeleccionada, setMotoSeleccionada] = useState(null);
const { motos,FiltroMarca,FiltroCilindrada } = useMotos();
if (!motos) return <p>Cargando motos...</p>;

  const abrirModal = (moto) => {
    setMotoSeleccionada(moto);
    setModalAbierto(true);
 

  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setMotoSeleccionada(null);

  };

  return (
    <>
      {motos.map((moto, index) => (
       
        <CardMoto
            key={`${index}-${FiltroMarca}`}
          moto={moto}
          onclick={() => abrirModal(moto)}
        />
      ))}

      {modalAbierto && (
        <DialogCont
          isOpen={modalAbierto}
          onClose={cerrarModal}
          children={<CardMotoDescripcion motoSeleccionada={motoSeleccionada} />}
        />
      )}
    </>
  );
}

export default ListaMotos;
