import { useState } from 'react'

import { BrowserRouter } from "react-router-dom";
import './App.css'
import  Rutas  from './Router/Rutas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
    </>
  )
}

export default App
