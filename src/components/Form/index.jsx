import { useState } from "react";
import { post } from "../../services";

export default function Form() {
  const [inputData, setInputData] = useState({
    nombre: "",
    email: "",
    password: "",
    term: false,
  });

  const handleInputData = (event) => {
    const { name, type, checked, value } = event.target;
    setInputData({
      ...inputData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [showValidation, setShowValidation] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowValidation("was-validated");
    // let isValidated = Object.values(inputData).every((dato) => dato);
    const data = await post(inputData);
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1>Formulario</h1>
          <form
            className={`needs-validation ${showValidation}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div>
              <input
                required
                className="form-control mt-3"
                type="text"
                name="nombre"
                value={inputData.nombre}
                onChange={handleInputData}
                placeholder="Escribe tu nombre"
              />
            </div>
            <div>
              <input
                required
                className="form-control mt-3"
                type="email"
                name="email"
                value={inputData.email}
                placeholder="Escribe tu correo"
                onChange={handleInputData}
              />
            </div>
            <div>
              <input
                required
                className="form-control mt-3 "
                type="password"
                name="password"
                value={inputData.password}
                placeholder="Escribe tu contraseña"
                onChange={handleInputData}
              />
            </div>
            <div className="mt-3">
              <input
                id="invalidCheck"
                required
                checked={inputData.term}
                value={inputData.term}
                onChange={handleInputData}
                className="form-check-input"
                type="checkbox"
                name="term"
              />{" "}
              <label className="form-check-label" htmlFor="invalidCheck">
                Acepta los términos y condiciones
              </label>
            </div>
            <div>
              <button className="btn btn-primary mt-3" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
