import { useState, useRef } from "react";
import "../AgregarMoto/AgregarMoto.css";
import Swal from "sweetalert2";

export default function AgregarMoto() {
  const [url, SetUrl] = useState("");
  const [ArrayUrl, setArrayUrl] = useState([]);
  const formRef = useRef(null); // ← Referencia al contenedor

  const tipoMoto = [{ id: "Naked" }, { id: "Enduro" }, { id: "Scooters" }];

  const marcas = [
    { id: 1, nombre: "KAWASAKI" },
    { id: 2, nombre: "HONDA" },
    { id: 3, nombre: "KYMCO" },
    { id: 4, nombre: "BAJAJ" },
    { id: 5, nombre: "SUSUKI" },
    { id: 6, nombre: "HERO" },
  ];

  function validarCampos(e) {
    // Validar si el usuario está registrado
    e.preventDefault();
    let camposIncompletos = false;

    const inputs = formRef.current.querySelectorAll("input");
    let titulo = "";
    let texto = "";
    let icono = "error";
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        camposIncompletos = true;
      }
    });
    if (camposIncompletos && ArrayUrl.length > 0) {
      camposIncompletos = false;
    }

    if (camposIncompletos) {
      titulo = "Debe completar todos los campos";
    } else if (ArrayUrl.length == 0) {
      camposIncompletos = true;
      titulo = "Debe ingresar por lo menos una imágen";
    } else 
      {
      const form = formRef.current;
      const formData = new FormData(form);
      alert(JSON.stringify(formData))
      const moto = {
        Motor: formData.get("motor"),
        Cilindrada: parseFloat(formData.get("cilindrada")),
        Potencia: formData.get("potencia"),
        Alimentacion: formData.get("alimentacion"),
        Refrigeracion: formData.get("refrigeracion"),
        Encendido: formData.get("encendido"),
        Transmision: formData.get("transmision"),
        Cajacambio: formData.get("cajaDeCambio"),
        Iluminacion: formData.get("iluminacion"),
        Tanquel: parseFloat(formData.get("capacidadTanque")),
        Neumaticod: formData.get("neumaticoDelantero"),
        Neumaticot: formData.get("neumaticoTrasero"),
        Combustible: formData.get("combustible"),
        aceite: formData.get("aceite"),
        Suspenciond: formData.get("suspensionDelantera"),
        Suspenciont: formData.get("suspensionTrasera"),
        Tipomoto: formData.get("tipomoto"),
        Nombre: formData.get("nombre"),
        Precio: parseFloat(formData.get("precio")),
        IdMarca: parseInt(formData.get("marca")),

        imagenes: ArrayUrl.map((URLIMAGEN) => ({ URLIMAGEN })), // esto depende de tu DTO
      };
      alert("apunto de hacer el post");

      fetch("https://localhost:7117/api/moto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(moto),
      })
        .then(async (response) => {
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error("Error: " + errorText);
          }

          const data = await response.json(); // 👈 leés y usás el resultado directamente acá
          console.log("Moto creada:", data);
          alert("Moto creada correctamente");
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert("Error al crear la moto: " + error.message);
        });
      Swal.fire({
        title: "Agregado correctamente",

        icon: "success",
        confirmButtonText: "Cerrar",
        customClass: {
          popup: "mi-alerta-custom",
          confirmButton: "mi-boton-rojo",
        },
        showClass: {
          popup: "swal2-show swal2-animate__fadeInDown",
        },
        hideClass: {
          popup: "swal2-hide swal2-animate__fadeOutUp",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          onClose();
        }
      });
    }

    if (camposIncompletos) {
      Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        confirmButtonText: "Cerrar",
        customClass: {
          popup: "mi-alerta-custom",
          confirmButton: "mi-boton-rojo",
        },
        showClass: {
          popup: "swal2-show swal2-animate__fadeInDown",
        },
        hideClass: {
          popup: "swal2-hide swal2-animate__fadeOutUp",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          onClose();
        }
      });
    }
  }

  return (
    <>
      <form onSubmit={validarCampos} ref={formRef}>
        <div className="contAgregarMoto">
          <div className="ContImg">
            <img src={url} alt="" className="img" />

            <input
              type="text"
              onChange={(e) => SetUrl(e.target.value)}
              placeholder="URL IMAGEN"
              value={url}
            />

            <button
              type="button" // <- agregá esto
              className="btnAgregar"
              onClick={() => {
                alert("entro");
                if (url.trim() !== "") {
                  setArrayUrl((prev) => {
                    const nuevoArray = [...prev, url];
                    alert(nuevoArray);
                    return nuevoArray;
                  });
                  SetUrl("");
                }
              }}
            >
              Agregar
            </button>
          </div>

          <div className="ContCaracTeristicas">
            <h3>Caracteristica técnicas</h3>
            <div className="divCaract">
              <div className="c1">
                <strong>Motor </strong>
                <input name="motor" placeholder="Motor" />
              </div>
              <div className="c1">
                <strong>Cilindrada </strong>
                <input name="cilindrada" placeholder="Cilindrada" />
              </div>
            </div>

            <div className="divCaract">
              <div className="c1">
                <strong>Potencia </strong>
                <input name="potencia" placeholder="Potencia" />
              </div>
              <div className="c1">
                <strong>Alimentación </strong>
                <input name="alimentacion" placeholder="Alimentación" />
              </div>
            </div>

            <div className="divCaract">
              <div className="c1">
                <strong>Refrigeración </strong>
                <input name="refrigeracion" placeholder="Refrigeración" />
              </div>
              <div className="c1">
                <strong>Encendido </strong>
                <input name="encendido" placeholder="Encendido" />
              </div>
            </div>

            <div className="divCaract">
              <div className="c1">
                <strong>Transmisión </strong>
                <input name="transmision" placeholder="Transmisión" />
              </div>
              <div className="c1">
                <strong>Caja de cambio </strong>
                <input name="cajaDeCambio" placeholder="Caja de cambio" />
              </div>
            </div>

            <div className="divCaract">
              <div className="c1">
                <strong>Iluminación </strong>
                <input name="iluminacion" placeholder="Iluminación" />
              </div>
              <div className="c1">
                <strong>Capacidad de tanque </strong>
                <input
                  name="capacidadTanque"
                  placeholder="Capacidad de tanque"
                />
              </div>
            </div>

            <div className="divCaract">
              <div className="c1">
                <strong>Neumático delantero </strong>
                <input
                  name="neumaticoDelantero"
                  placeholder="Neumático delantero"
                />
              </div>
              <div className="c1">
                <strong>Neumático trasero </strong>
                <input
                  name="neumaticoTrasero"
                  placeholder="Neumático trasero"
                />
              </div>
            </div>

            <div className="divCaract">
              <div className="c1">
                <strong>Combustible </strong>
                <input name="combustible" placeholder="Combustible" />
              </div>
              <div className="c1">
                <strong>Aceite </strong>
                <input name="aceite" placeholder="Aceite" />
              </div>
            </div>

            <div className="divCaract">
              <div className="c1">
                <strong>Suspensión Delantera </strong>
                <input
                  name="suspensionDelantera"
                  placeholder="Suspensión delantera"
                />
              </div>
              <div className="c1">
                <strong>Suspensión Trasera </strong>
                <input
                  name="suspensionTrasera"
                  placeholder="Suspensión trasera"
                />
              </div>
            </div>
            <div className="divCaract">
              <div className="c1">
                <strong>Marca </strong>
                <select name="marca" defaultValue="">
                  <option value="" disabled>
                    Seleccione una marca
                  </option>
                  {marcas.map((marca) => (
                    <option key={marca.id} value={marca.id}>
                      {marca.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="c1">
                <strong>Tipo de moto </strong>
                <select name="tipomoto" defaultValue="">
                  <option value="" disabled>
                    Seleccione un tipo de moto
                  </option>
                  {tipoMoto.map((Moto) => (
                    <option key={Moto.id} value={Moto.id}>
                      {Moto.id}
                    </option>
                  ))}
                </select>
              </div>
            </div>

              <div className="divCaract">
              <div className="c1">
                <strong>Nombre </strong>
                <input name="nombre">
                </input>
               
              </div>

              <div className="c1">
                 <strong>Precio </strong>
               <input name="precio">
                </input>
              </div>
            </div>
            <button className="btnAgregarMoto">Agregar moto</button>
          </div>
        </div>
      </form>
    </>
  );
}
