import { createContext, useContext, useState, useEffect } from "react";
import data from "../Data/Moto.json";
import UsuariosInteresados from "../Data/UsuariosInteresados.json"


const MotoContext = createContext();


export const useMotos = () => useContext(MotoContext);
export default function ContextMoto({ children }) {
  const [motos, setMotos] = useState(null);
  // Cargar datos iniciales desde el JSON
  const [FiltroPrecio, setFiltroPrecio] = useState(null);
  const [FiltroCilindrada, SetFiltroCilindrada] = useState(null);
  const [FiltroMarca, SetFiltroMarca] = useState(null);
    const [FiltoTipoMoto, SetFiltroTipoMoto] = useState(null);
  const [tipoUsuario,SetTipoUsuario]=useState("")
  const [usuarios,SetUsuarios]=useState(UsuariosInteresados.UsuariosInteresados)
  const [dataAux,SetDataAux]=useState(null)
  const [fechaDesde,SetFechaDesde]=useState(null)
  const [fechaHasta,SetFechaHasta]=useState(null);
  const [nombreF,SetNombreFiltro] = useState(" ")

  useEffect(() => {
  async function fetchData() {
    try {

      const resp = await fetch("https://localhost:7117/api/moto");
      if (!resp.ok) {
        const errorData = await resp.json();
        alert("ERROR: " + JSON.stringify(errorData));
        return;
      }
      const data = await resp.json();  

      SetDataAux(data)
      setMotos(data)
     
    } catch (error) {
      alert("Error en fetch: " + error.message);
    }
  }

  fetchData();
}, []);



  useEffect(() => {
      if(motos===null){return;}

    let motosF = dataAux;
    alert(JSON.stringify(motosF) + "sdasd")

    if (FiltroCilindrada) {
      motosF = motosF.filter((moto) =>
        moto.modelo.trim().includes(FiltroCilindrada.toString().trim())
      );
    }

    if (FiltroPrecio) {
      motosF = motosF.filter((moto) => {
        return parseFloat(moto.precio) <= FiltroPrecio;
      });
    }
    if (FiltroMarca) {
      motosF = motosF.filter((moto) => {
        return moto.marca
          .trim()
          .toUpperCase()
          .includes(FiltroMarca.toString().trim().toUpperCase());
      });
    }

    if(FiltoTipoMoto)
      {
      
          motosF = motosF.filter((moto) => {
        return moto.tipoMoto
          .trim()
          .toUpperCase()
          .includes(FiltoTipoMoto.toString().trim().toUpperCase());
      });


      }

    if (motosF.length == 0 || FiltroMarca == "TODOS") {
      setMotos(dataAux);

      SetFiltroCilindrada(null);
      SetFiltroMarca(null);
      SetFiltroTipoMoto(null);

    } else {
      setMotos(motosF);
    }
  }, [FiltroCilindrada, FiltroPrecio, FiltroMarca,FiltoTipoMoto]);

  function parseFecha(fechaStr) {
  const [dia, mes, anio] = fechaStr.split("/").map(Number);
  return `${anio}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
}


useEffect(() => {
  let usuariosInteresadosAux = UsuariosInteresados.UsuariosInteresados;


  if (nombreF.trim() !== "") {
    usuariosInteresadosAux = usuariosInteresadosAux.filter((usu) =>
      usu.nombre.toLowerCase().includes(nombreF.toLowerCase())
    );
  }


  if (fechaDesde && fechaHasta) {

    usuariosInteresadosAux = usuariosInteresadosAux.filter((usu) => {

      const fechaUsuario = parseFecha(usu.FechaConsulta);
 


      return fechaUsuario >= fechaDesde && fechaUsuario <= fechaHasta;
    });
  }

  // 👉 Actualizar lista final
  SetUsuarios(usuariosInteresadosAux);
}, [nombreF, fechaDesde, fechaHasta]);


  return (
    <MotoContext.Provider
      value={{
        motos,
        setFiltroPrecio,SetFiltroTipoMoto,
        SetFiltroCilindrada,
        SetFiltroMarca,SetTipoUsuario,SetUsuarios,SetNombreFiltro,SetFechaHasta,SetFechaDesde,FiltoTipoMoto,FiltroPrecio,FiltroMarca,FiltroCilindrada,tipoUsuario,usuarios
      }}
    >
      {children}
    </MotoContext.Provider>
  );
}
