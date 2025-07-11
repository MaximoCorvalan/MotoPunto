import { createContext, useContext, useState, useEffect } from "react";
import data from '../Data/Moto.json'


// 🚨 CREA el contexto afuera del componente (una sola vez)
const MotoContext = createContext();

// 🪝 Hook para usar el contexto fácilmente
export const useMotos = () => useContext(MotoContext);
export default function ContextMoto({children})
{
const [motos, setMotos] = useState(data.moto);
 // Cargar datos iniciales desde el JSON
const [FiltroPrecio,setFiltroPrecio] =useState(null)
const [FiltroCilindrada,SetFiltroCilindrada] =useState(null)
const [FiltroMarca,SetFiltroMarca] = useState(null)

useEffect(()=>{
     setMotos(data.moto)
    let motosF = motos

  if (FiltroCilindrada) {
  const filtro = FiltroCilindrada.toString().toLowerCase().trim();
  motosF = motosF.filter(m => m.modelo.toString().toLowerCase().trim().includes(filtro));
}



         if (FiltroPrecio)
            {

            }if(FiltroMarca)
                    {

                    }

                    if(motosF.length==0)
                      {
                           setMotos(data.moto)
                      }else
                      {
                        setMotos(motosF)
                      }


  



},[FiltroCilindrada, FiltroPrecio, FiltroMarca])

return(
   <MotoContext.Provider
      value={{
        motos,
        setFiltroPrecio,
        SetFiltroCilindrada,
        SetFiltroMarca
      }}
    >
      {children}
    </MotoContext.Provider>
)

}