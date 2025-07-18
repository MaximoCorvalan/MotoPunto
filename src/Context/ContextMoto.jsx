import { createContext, useContext, useState, useEffect } from "react";
import data from "../Data/Moto.json";
import UsuariosInteresados from "../Data/UsuariosInteresados.json"


const MotoContext = createContext();


export const useMotos = () => useContext(MotoContext);
export default function ContextMoto({ children }) {
  const [motos, setMotos] = useState(data.moto);
  // Cargar datos iniciales desde el JSON
  const [FiltroPrecio, setFiltroPrecio] = useState(null);
  const [FiltroCilindrada, SetFiltroCilindrada] = useState(null);
  const [FiltroMarca, SetFiltroMarca] = useState(null);
  const [tipoUsuario,SetTipoUsuario]=useState("")
  const [usuarios,SetUsuarios]=useState(UsuariosInteresados.UsuariosInteresados)

  const [fechaDesde,SetFechaDesde]=useState(null)
  const [fechaHasta,SetFechaHasta]=useState(null);
  const [nombreF,SetNombreFiltro] = useState(" ")
  useEffect(() => {
    let motosF = data.moto;

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

    if (motosF.length == 0 || FiltroMarca == "TODOS") {
      setMotos(data.moto);

      SetFiltroCilindrada(null);
      SetFiltroMarca(null);

    } else {
      setMotos(motosF);
    }
  }, [FiltroCilindrada, FiltroPrecio, FiltroMarca]);



  return (
    <MotoContext.Provider
      value={{
        motos,
        setFiltroPrecio,
        SetFiltroCilindrada,
        SetFiltroMarca,SetTipoUsuario,SetUsuarios,FiltroPrecio,FiltroMarca,FiltroCilindrada,tipoUsuario,usuarios
      }}
    >
      {children}
    </MotoContext.Provider>
  );
}
