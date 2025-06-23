import react from "react"
import logo from '../../img/Logoo.png'
import "../InicioSesion/InicioSesion.css"
export default function InicioSesion()
{

    return(
        <>
        <div className="ConteinerLogin">
            <img  className="LogoLogin" src={logo} />
            <div className="insert">
                <label htmlFor="">Usuario</label>
                <input type="text" />

            </div>

               <div className="insert">
                <label htmlFor="">Contraseña</label>
                <input type="text" />

            </div>

            <button className="btnInciarSesion">
                Iniciar Sesion
            </button>
           

        </div>
     
        </>
    )
}