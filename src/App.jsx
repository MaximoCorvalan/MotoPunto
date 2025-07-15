import { useState } from 'react'

import { BrowserRouter } from "react-router-dom";
import './App.css'

import ViewMain from './Pages/ViewMain';
import ContextMoto from "../src/Context/ContextMoto";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContextMoto>

    <BrowserRouter>
      <ViewMain />
    </BrowserRouter>
    </ContextMoto>
    </>
  )
}

export default App
