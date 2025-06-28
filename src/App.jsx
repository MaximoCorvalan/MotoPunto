import { useState } from 'react'

import { BrowserRouter } from "react-router-dom";
import './App.css'

import ViewMain from './Pages/viewMain';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <ViewMain />
    </BrowserRouter>
    </>
  )
}

export default App
