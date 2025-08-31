import  { useState } from "react";
import { motion } from "framer-motion";
import "../ListaMarcas/ListaMarcas.css";
import { useMotos } from "../../Context/ContextMoto";
import { useEffect } from "react";


 function ListaMarcas() {
  const tabs = ["HONDA", "KAWASAKI", "BAJAJ", "KYMCO", "SUZUKI", "HERO", "TODOS"];
  const [activeTab, setActiveTab] = useState("TODOS");
  const {SetFiltroMarca,FiltroMarca,setFiltroPrecio} =useMotos()

function establecerMarca(tab) {
  if(tab==="TODOS") {
    setFiltroPrecio(null);
    
  }
  setActiveTab(tab);
  SetFiltroMarca(tab);
}

  useEffect(()=>{
    if(FiltroMarca===null)
      {
     
        setActiveTab("TODOS");
      }

  },[FiltroMarca])

  return (
    <ul className="ConteinerMarcas">
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`marca-tab`}
          onClick={() => establecerMarca(tab)}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="highlight"
              className="highlight"
              transition={{ type: "tween", stiffness: 500, damping: 70 }}
            />
          )}
          <span className="marca-label">{tab}</span>
        </li>
      ))}
    </ul>
  );
}
export default ListaMarcas;