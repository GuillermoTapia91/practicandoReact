import { useState } from "react";
import { postF } from "../../services/services";
import Swal from "sweetalert2";

export default function Form2() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
    termino: false,
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
    console.log(datos);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    const data = await postF(datos);
    //swal.fire

    if (!data) {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });

      return;
    }

    Swal.fire({
      title: "Todo Bien",
      text: "Usuario creado Correctamente",
      icon: "success",
      confirmButtonText: "Continuar",
    });

    console.log(data);
  };
  return (
    <>
      <div className="container mt-3 mb-5">
        <div className="card">
          <div className="card-body">
            <h2>Formulario</h2>
            <form action="" onSubmit={handleForm}>
              <div>
                <input
                  className="form-control mt-3"
                  type="text"
                  name="nombre"
                  value={datos.nombre}
                  onChange={handleInputChange}
                  placeholder="Escribte tu nombre completo"
                  required
                />
              </div>
              <div>
                <input
                  className="form-control mt-3"
                  type="email"
                  value={datos.correo}
                  onChange={handleInputChange}
                  name="correo"
                  placeholder="Escribte tu correo electrónico"
                  required
                />
              </div>
              <div>
                <input
                  className="form-control mt-3"
                  type="password"
                  value={datos.contrasena}
                  onChange={handleInputChange}
                  name="contrasena"
                  placeholder="Escribte tu contraseña"
                  required
                />
              </div>
              <div>
                <input
                  className="mt-3"
                  type="checkbox"
                  name="termino"
                  checked={datos.termino}
                  onChange={handleInputChange}
                  required
                />{" "}
                Acepta términos y condiciones
              </div>
              <div className="text-center">
                <button className="btn btn-warning mt-3 " type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
