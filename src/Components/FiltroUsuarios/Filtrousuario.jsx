import  { useState } from "react";
import { useMotos } from '../../Context/ContextMoto';
import "../../Components/FiltroUsuarios/filtrousuario.css"
import AgregarMoto from "../AgregarMoto/AgregarMoto";

import DialogCont from "../DialogCont/DialogCont";

export default function FiltroUsuario() {
  const { SetFechaDesde, SetFechaHasta ,SetNombreFiltro,obtenerClientes} = useMotos();
  
  const [nombre,SetNombre] = useState("");
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [agregarMoto,SetAgregarMoto]=useState(false)

  const manejarCambio =()=>
    {
      
       SetAgregarMoto(true)
    }

    const cerrar =()=>
        {
                   SetAgregarMoto(false)
        }
   const manejarInput=(e)=>
    {  const valor = e.target.value;
        SetNombre(valor);
        SetNombreFiltro(valor)
    }

 const manejarDesde = (e) => {
  const value = e.target.value;
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    console.error("Fecha desde no válida");
    return; // No actualiza el estado si no es válida
  }
  setDesde(value);
  SetFechaDesde(value);
};

const manejarHasta = (e) => {
  const value = e.target.value;
  console.log("el valor del hasta es"+value)
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    console.error("Fecha hasta no válida");
    return; 
  }
  setHasta(value);
  SetFechaHasta(value);
};
    return (
        <>
        <div className="contFiltroAdmin">

        <button className="btnMoto" onClick={()=>
        {
            SetNombreFiltro("");
            setDesde("");
            setHasta("");
            SetNombre("");
            SetNombreFiltro("")
            SetFechaHasta(null)
            SetFechaDesde(null)
            obtenerClientes();


        }}>
          BORRAR FILTRO
        </button>


            <div className="contFiltro">
            <label htmlFor="desde">Del</label>
        <input
          id="desde"
          type="date"
          name="inputFechaDesde"
          value={desde}
          onChange={manejarDesde}
          />
            <label htmlFor="hasta">Hasta:</label>
        <input
          id="hasta"
          type="date"
          name="inputFechaHasta"
          value={hasta}
          onChange={manejarHasta}
          />
            </div>

        <div className="contFiltro">
            <label>Buscar por Nombre</label>
        <input className="inputNombre" name="inputName" value={nombre}  onChange={manejarInput} type="text" />
        </div>
    
        <button className="btnMoto" onClick={manejarCambio}>Agregar Motocicleta</button>
       
        </div>

          {agregarMoto && <DialogCont isOpen={agregarMoto} onClose={cerrar} children={<AgregarMoto></AgregarMoto>} ></DialogCont>
        
          }

      
          </>
        
  );
}
