import React, { useState } from "react";
import { motion } from "framer-motion";
import "../ListaMarcas/ListaMarcas.css";

export default function ListaMarcas() {
  const tabs = ["HONDA", "KAWASAKI", "BAJAJ", "KYMCO", "SUSUKI", "HERO", "TODOS"];
  const [activeTab, setActiveTab] = useState("TODOS");

  return (
    <ul className="ConteinerMarcas">
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`marca-tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
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
