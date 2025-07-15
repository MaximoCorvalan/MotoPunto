import { createContext, useContext, useState, useEffect } from "react";
import data from "../Data/Moto.json";


const MotoContext = createContext();


export const useMotos = () => useContext(MotoContext);
export default function ContextMoto({ children }) {
  const [motos, setMotos] = useState(data.moto);
  // Cargar datos iniciales desde el JSON
  const [FiltroPrecio, setFiltroPrecio] = useState(null);
  const [FiltroCilindrada, SetFiltroCilindrada] = useState(null);
  const [FiltroMarca, SetFiltroMarca] = useState(null);
  const [tipoUsuario,SetTipoUsuario]=useState("")

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
        SetFiltroMarca,FiltroPrecio,FiltroMarca,FiltroCilindrada,tipoUsuario
      }}
    >
      {children}
    </MotoContext.Provider>
  );
}
