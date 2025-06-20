import "../Filtros/Filtros.css";
import React from "react";
import { use } from "react";
import { useState } from "react";
export default function Filtros() {
  const [open, setOpen] = useState(false);
  const [openTipoMoto,setOpenTipoMoto]=useState(false);
  const [seleccion, setSeleccion] = useState(" ");
const [seleccionMoto, setSeleccionMoto] = useState(" ");
  const opcionesCilindrada = [
    "125cc",
    "150cc",
    "200cc",
    "250cc",
    "300cc",
    "400cc",
    "500cc",
  ];
  const opcinesTipoMoto = ["Enduro", "Naked", "Scooters"];

  const toggleDropdown = () => setOpen(!open);
  const toggleDropdownMoto = () => setOpen(!openTipoMoto);
  const seleccionarOpcionMoto = (opcion) => {
    setSeleccionMoto(opcion);
    setOpen(false);
  };
  const seleccionarOpcion = (opcion) => {
    setSeleccion(opcion);
    setOpen(false);
  };

  return (
    <>
      <div className="Filtro">
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
                    {opcion}
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

            {open && (
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
          <p >Precio Maximo</p>
          <input
            placeholder="100000.00"
            className="input-style"
            type="text"
          />
        </div>

        <div>
          mas de 1000 clientes satifechos uwu
        </div>
      </div>
    </>
  );
}
