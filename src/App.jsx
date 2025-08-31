import { useState } from 'react'

import { BrowserRouter } from "react-router-dom";
import './App.css'

import ViewMain from './Pages/ViewMain';
import ContextMoto from "../src/Context/ContextMoto";

function App() {


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
