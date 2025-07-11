import { useState } from 'react'

import { BrowserRouter } from "react-router-dom";
import './App.css'

import ViewMain from './Pages/ViewMain';

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
