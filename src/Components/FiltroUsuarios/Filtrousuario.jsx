import React, { useState } from "react";
import { useMotos } from '../../Context/ContextMoto';
import "../../Components/FiltroUsuarios/filtrousuario.css"


export default function FiltroUsuario()
{

    const {usuarios}=useMotos();
    const {SetUsuarios} = useMotos()


    

    return (
        <>
          
        <div className="contFiltroAdmin">
            <div className="contFiltro">

            <label htmlFor="desde">Del</label>


           <input  id="desde" type="date" />
            <label htmlFor="hasta">Hasta:</label>
             <input  id="hasta" type="date" />

            </div>

        <div className="contFiltro">
            <label>Buscar por Nombre</label>
            <input className="inputNombre" type="text" />
        </div>
    
        <button className="btnMoto">Agregar Motocicleta</button>
   
        </div>



        </>
    )

}