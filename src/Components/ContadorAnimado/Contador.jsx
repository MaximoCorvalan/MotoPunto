import "../ContadorAnimado/Contador.css"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"

import { useEffect } from "react"

export default function HTMLContent() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 9000, { duration: 3 })
        return () => controls.stop()
    }, [])

    return(
        
<>
<div className="ConteinerVendidas">

     <p>+</p> <motion.pre className="Text">{rounded}</motion.pre> <p>MOTOS VENDIDAS</p>
</div>
        
</>
    )
}

/**
 * ==============   Styles   ================
 */

