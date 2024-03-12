import { useEffect, useState } from "react";
import { getF } from "../../services/services";
import Swal from "sweetalert2";
export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const getUsuarios = async () => {
    const data = await getF();
    if (!data) {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });

      return;
    }

    setUsuarios(data);
  };

  useEffect(() => {
    getUsuarios();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="table-responsive">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Avatar</th>
                <th>Password</th>
                <th>Term</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.length > 0 &&
                usuarios.map((usuario) => (
                  <tr>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.correo}</td>
                    <td>
                      {" "}
                      <img
                        className="rounded-circle"
                        width={40}
                        src={usuario.avatar}
                        alt=""
                      />
                    </td>
                    <td>{usuario.contrasena}</td>
                    <td>{usuario.termino ? "🆗" : "❎"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
