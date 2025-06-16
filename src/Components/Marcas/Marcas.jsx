import { useState } from 'react'
import React from 'react'

function Marcas({indicador =0}) {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>marcas {indicador}</h1>
    
    </>
  )
}

export default Marcas
