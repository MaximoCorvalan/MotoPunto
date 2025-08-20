import { useEffect } from "react";

import { useMotos } from "../../Context/ContextMoto";

import "../Clientes/clientes.css";

export default function Clientes() {

  const {clientes, SetClientes} = useMotos()


  async function obtenerClientes() {
      try {
        const response = await fetch("https://localhost:7117/api/Consulta");
        if (response.ok) {
          const clientes = await response.json();

         
          SetClientes(clientes);
        } else {
        }
      } catch (error) {
        alert("Error en fetch: " + error.message);
      }
    }
  async function cambiarEstado(cliente) {
    try {
     
      var idConsulta = cliente.idconsulta;
    const response = await   fetch(`https://localhost:7117/api/Consulta/CambiarEstado`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({idConsulta:idConsulta , estado:1})
      });

      if(!response.ok)
        {
           alert("ERROR AL INTENTAR CAMBIAR EL ESTADO"); 
        }
         obtenerClientes();


   
    } catch (error)
     {
      alert(error);
    }
  }

  useEffect(() => {

    
    

    obtenerClientes();
  }, []);

  return (
    <>
      <table className="contTabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Fecha</th>
            <th>Email</th>
            <th>Moto</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente, index) => {
            const esActivo = cliente.estado === "0";

            return (
              <tr key={cliente.idconsulta || index}>
                <td>{cliente.nombreUsuario}</td>
                <td>{cliente.numeroTelefono}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.fecha}</td>
                <td>{cliente.email}</td>
                <td>{cliente.nombreMoto}</td>
                <td>
                  {esActivo ? (
                    <button className="btnAtender" onClick={()=>cambiarEstado(cliente)}>CONTACTAR</button>
                  ) : (
                    cliente.fechaContacto
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
