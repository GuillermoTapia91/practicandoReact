import { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer";

export default function Init() {
  const [nombre, setNombre] = useState("");
  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };
  return (
    <>
      <h1>{nombre}</h1>
      <input type="text" onChange={handleInputChange} />
      <Header nombre="Guillermo" apellido="Tapia" dni="8888" />
      <Header nombre="Sandra" apellido="Rojas" dni="9999" />
      <Footer direccion="av. mi casa" color="rojo" equipo="sc" />
    </>
  );
}
