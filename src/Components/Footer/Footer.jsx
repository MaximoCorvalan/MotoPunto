import React from "react";
import "../Footer/Footer.css"

export default function Footer()
{

    return (
        <>
     <footer className="footer">
         <div className="footer-bottom">
            © 2025 MotoPunto. Todos los derechos reservados.
          </div>
        <div className="conteinFooterSeccions">
            <div className="footer-section">
    <h4>Contacto</h4>
    <p>📍 Av. Siempreviva 123</p>
    <p>📞 +54 11 1234-5678</p>
    <p>📧 ventas@motopunto.com</p>
  </div>
  <div className="footer-section">
    <h4>Redes</h4>
    <a >Instagram</a>
    <a >Facebook</a>
  </div>
  <div className="footer-section">
    <h4>Enlaces</h4>

    <a>Financiación</a>
    <a>Recursos Humanos</a>
  </div>

        </div>
  

</footer>

        
        </>
    )
 
}