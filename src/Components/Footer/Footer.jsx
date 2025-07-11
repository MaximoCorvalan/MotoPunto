import React from "react";
import "../Footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook ,faInstagram} from '@fortawesome/free-brands-svg-icons' // <-- cambiar aquí
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-bottom">
          © 2025 MotoPunto. Todos los derechos reservados.
        </div>
        <div className="conteinFooterSeccions">
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>📍 Av. Rivadavia 747</p>
            <p>📞 +54 11 1234-5678</p>
           <p>
 <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /> ventas@motopunto.com
</p>
          </div>
          <div className="footer-section">
            <h4>Redes</h4>
            <a><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
            <a><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>

            <a>Financiación</a>
            <a>Recursos Humanos</a>
          </div>
        </div>
      </footer>
    </>
  );
}
