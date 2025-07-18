import React, { useState } from "react";
import { useMotos } from '../../Context/ContextMoto';
import "../../Components/FiltroUsuarios/filtrousuario.css"

export default function FiltroUsuario() {
  const { SetFechaDesde, SetFechaHasta } = useMotos();
  const {SetNombreFiltro}=useMotos()

  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");

   const manejarInput=(e)=>
    {  const valor = e.target.value;
        if (!valor.includes(" "))
        SetNombreFiltro(e.target.value)
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
    
        <button className="btnMoto">Agregar Motocicleta</button>
        </div>
  );
}
