import { createContext, useContext, useState, useEffect } from "react";


const MotoContext = createContext();


export const useMotos = () => useContext(MotoContext);
export default function ContextMoto({ children }) {
  const [motos, setMotos] = useState(null);
  // Cargar datos iniciales desde el JSON
  const [FiltroPrecio, setFiltroPrecio] = useState(null);
  const [FiltroCilindrada, SetFiltroCilindrada] = useState(null);
  const [FiltroMarca, SetFiltroMarca] = useState(null);
    const [FiltoTipoMoto, SetFiltroTipoMoto] = useState(null);
  const [usuario,SetUsuario]=useState(null)
  const [clientes,SetClientes]=useState([])
  const [dataAux,SetDataAux]=useState(null)
  const [fechaDesde,SetFechaDesde]=useState(null)
  const [fechaHasta,SetFechaHasta]=useState(null);
  const [nombreF,SetNombreFiltro] = useState("")

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


//FILTROS DE MOTO
  useEffect(() => {
      if(motos===null){return;}

    let motosF = dataAux;
  
  if (FiltroCilindrada) {
  const filtroNum = Number(FiltroCilindrada);
  motosF = motosF.filter((moto) =>
    Math.abs(moto.cilindrada - filtroNum) <= 10
  );
}


    if (FiltroPrecio) {
      motosF = motosF.filter((moto) => {
        return parseFloat(moto.precio) <= FiltroPrecio;
      });
    }
    if (FiltroMarca) {
      motosF = motosF.filter((moto) => {
        return moto.marcaDescripcion
        .trim()
        .toUpperCase()
        .includes(FiltroMarca.toString().trim().toUpperCase());
      });
      alert(JSON.stringify(motosF))
    }

    if(FiltoTipoMoto)
      {
      
          motosF = motosF.filter((moto) => {
        return moto.tipomoto
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

    function parseFechaDDMMYYYY(fechaStr) {
  if (!fechaStr) return null;
  const [dia, mes, anio] = fechaStr.trim().split("/");
  return new Date(`${anio}-${mes}-${dia}`);
}
//FILTROS DE CLIENTES
useEffect(() => {
  let usuariosInteresadosAux = clientes;
 


  if (nombreF.trim() !== "") {
    usuariosInteresadosAux = usuariosInteresadosAux.filter((usu) =>
      usu.nombreUsuario.toLowerCase().includes(nombreF.toLowerCase())
    );
  }



  console.log("la fecha antes de entrar es "+ fechaDesde)
  console.log("la fecha antes de entrar es "+ fechaHasta)
if (fechaDesde && fechaHasta) {
  console.log("entro a la fx")
  const fechaDesdeAux = new Date(fechaDesde);
  const fechaHastaAux = new Date(fechaHasta);


  // Validar que las fechas sean válidas
  if (isNaN(fechaDesdeAux.getTime()))console.log("Fecha desde no válida");
  if (isNaN(fechaHastaAux.getTime())) console.log("Fecha hasta no válida");

  usuariosInteresadosAux = usuariosInteresadosAux.filter((usu) => {
  const fechaUsuario = parseFechaDDMMYYYY(usu.fecha);

  console.log("FECHA DESDE:", fechaDesdeAux.toISOString().split("T")[0]);
  console.log("FECHA HASTA:", fechaHastaAux.toISOString().split("T")[0]);
  console.log("FECHA USUARIO:", fechaUsuario?.toISOString().split("T")[0]);

  return (
    
    fechaUsuario >= fechaDesdeAux &&
    fechaUsuario <= fechaHastaAux
  );
});
}
  

  console.log(JSON.stringify(usuariosInteresadosAux))
  console.log(nombreF)
if (!usuariosInteresadosAux?.length ) {
  obtenerClientes();
}

  // 👉 Actualizar lista final
  SetClientes(usuariosInteresadosAux);
}, [nombreF, fechaDesde, fechaHasta]);


  return (
    <MotoContext.Provider
      value={{
        motos,
        setFiltroPrecio,SetFiltroTipoMoto,
        SetFiltroCilindrada,
        SetFiltroMarca,SetUsuario,SetClientes,SetNombreFiltro,SetFechaHasta,SetFechaDesde,FiltoTipoMoto,FiltroPrecio,FiltroMarca,FiltroCilindrada,usuario,clientes,obtenerClientes
      }}
    >
      {children}
    </MotoContext.Provider>
  );
}
