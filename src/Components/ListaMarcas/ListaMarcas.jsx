import React, { useState } from "react";
import { motion } from "framer-motion";
import "../ListaMarcas/ListaMarcas.css";
import { useMotos } from "../../Context/ContextMoto";


export default function ListaMarcas() {
  const tabs = ["HONDA", "KAWASAKI", "BAJAJ", "KYMCO", "SUZUKI", "HERO", "TODOS"];
  const [activeTab, setActiveTab] = useState("TODOS");
  const {SetFiltroMarca} =useMotos()

  function establecerMarca(tab)
  {
    setActiveTab(tab);
    SetFiltroMarca(tab)


  }

  return (
    <ul className="ConteinerMarcas">
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`marca-tab ${activeTab === tab ? "active" : ""}`}
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
