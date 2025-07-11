import "../Filtros/Filtros.css";

import { useState } from "react";
import Contador from "../ContadorAnimado/Contador"

import { useMotos } from "../../Context/ContextMoto";
import { parse } from "@fortawesome/fontawesome-svg-core";

export default function Filtros() {
const { setFiltroPrecio,SetFiltroCilindrada, setFiltroMarca } = useMotos();

  const [open, setOpen] = useState(false);
  const [openTipoMoto,setOpenTipoMoto]=useState(false);

  const [seleccion, setSeleccion] = useState(" ");
const [seleccionMoto, setSeleccionMoto] = useState(" ");
  const opcionesCilindrada = [
    "125",
    "150",
    "200",
    "250",
    "300",
    "400",
    "500",
  ];
  const opcinesTipoMoto = ["Enduro", "Naked", "Scooters"];

  const toggleDropdown = () => setOpen(!open);
  const toggleDropdownMoto = () => setOpenTipoMoto(!openTipoMoto);
  const seleccionarOpcionMoto = (opcion) => {
    setSeleccionMoto(opcion);
    setOpenTipoMoto(false);


  };
  const seleccionarOpcion = (opcion) => {
    setSeleccion(opcion);
    setOpen(false);

    SetFiltroCilindrada( opcion);

  };

  
  return (

    
    <>
      <div className="Filtro">
        <div className="conteinerFiltros-f">

        
        <div className="conteinerFiltro">
          <label htmlFor=""> Cilindrada:</label>
          <div className="select">
            <div className="selected" onClick={toggleDropdown}>
              <span>{seleccion}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="arrow"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            {open && (
              <div className="options">
                {opcionesCilindrada.map((opcion, i) => (
                  <div
                    key={i}
                    onClick={() => seleccionarOpcion(opcion)}
                    className="option-item"
                  >
                    {opcion}cc
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="conteinerFiltro">
          <label htmlFor=""> Tipo de moto</label>
          <div className="select">
            <div className="selected" onClick={toggleDropdownMoto}>
              <span>{seleccionMoto}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="arrow"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            {openTipoMoto && (
              <div className="options">
                {opcinesTipoMoto.map((opcion, i) => (
                  <div
                    key={i}
                    onClick={() => seleccionarOpcionMoto(opcion)}
                    className="option-item"
                  >
                    {opcion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="conteinerFiltroPrecio">
          <p  className="decoLabel">Precio Maximo</p>
          <input
            placeholder="100000.00"
            className="InputPrecio"
           
            type="text"
          />
        </div>
        </div>
     

    


          <Contador></Contador>
     
   

      </div>
    </>
  );
}
