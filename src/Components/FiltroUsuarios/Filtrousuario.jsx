import React, { useState } from "react";
import { useMotos } from '../../Context/ContextMoto';
import "../../Components/FiltroUsuarios/filtrousuario.css"
import AgregarMoto from "../AgregarMoto/AgregarMoto";
import { faL, faSleigh, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import DialogCont from "../DialogCont/DialogCont";

export default function FiltroUsuario() {
  const { SetFechaDesde, SetFechaHasta } = useMotos();
  const {SetNombreFiltro}=useMotos()

  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [agregarMoto,SetAgregarMoto]=useState(false)

  const manejarCambio =()=>
    {
        alert("ffsadf")
       SetAgregarMoto(true)
    }

    const cerrar =()=>
        {
                   SetAgregarMoto(false)
        }
   const manejarInput=(e)=>
    {  const valor = e.target.value;


        SetNombreFiltro(valor)
    }

  const manejarDesde = (e) => {
    setDesde(e.target.value);
    SetFechaDesde(e.target.value);
  };

  const manejarHasta = (e) => {
    setHasta(e.target.value);
    SetFechaHasta(e.target.value);
  };

    return (
        <>
        <div className="contFiltroAdmin">
            <div className="contFiltro">
            <label htmlFor="desde">Del</label>
        <input
          id="desde"
          type="date"
          value={desde}
          onChange={manejarDesde}
          />
            <label htmlFor="hasta">Hasta:</label>
        <input
          id="hasta"
          type="date"
          value={hasta}
          onChange={manejarHasta}
          />
            </div>

        <div className="contFiltro">
            <label>Buscar por Nombre</label>
        <input className="inputNombre" onChange={manejarInput} type="text" />
        </div>
    
        <button className="btnMoto" onClick={manejarCambio}>Agregar Motocicleta</button>
       
        </div>

          {agregarMoto && <DialogCont isOpen={agregarMoto} onClose={cerrar} children={<AgregarMoto></AgregarMoto>} ></DialogCont>
        
          }

      
          </>
        
  );
}
