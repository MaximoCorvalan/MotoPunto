import React from "react";
import data from "../../Data/UsuariosInteresados.json";

import "../Clientes/clientes.css"
export default function Clientes() {
  const dataClientes = data.UsuariosInteresados;

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
          {dataClientes.map((cliente, index) => {
            const esActivo = cliente.Estado === "Activo";

            return (
              <tr key={cliente.email || index}>
                <td>{cliente.nombre}</td>
                <td>{cliente.Número}</td>
                <td>{cliente.Dirección}</td>
                <td>{cliente.FechaConsulta}</td>
                <td>{cliente.email}</td>
                <td>{cliente.MotoInteresada}</td>
                <td>
                  {esActivo ? <button className="btnAtender">ATENDER</button> : "ATENDIDO EL 12/7/2025"}
                </td>
             
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
