import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"

function Auditory() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getUsersAuditory")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("data fuera del axios", Data);

  const renderCards = Data.map((user, index) => {
    return (
      <tr className="userData" key={index}>
        <td className="text-center">{user.user_id}</td>
        <td>
          <div className="d-flex justify-content-center">{user.username}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{user.loginDate}</div>
        </td>
        <td>
          <div className="d-flex justify-content-center">{user.logoutDate}</div>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <div>
          <div className="mt-3 d-flex justify-content-center">
            <h1>|Auditoria de pagos|</h1>
          </div>
          <div className="d-flex justify-content-center">
            <a
              href="https://dashboard.stripe.com/test/dashboard"
              target="_blank"
            >
              <button className="btn btn-info  text-white rounded h5">
                Ver auditoria
              </button>
            </a>
          </div>
          <div className="container mt-5 d-flex justify-content-center">
            <h5>
              Al darle click al boton <strong>"Ver auditoria"</strong> los
              redirigira a la pagina{" "}
              <strong className="text-info">https://stripe.com/es-us</strong>{" "}
              para poder visualizar la auditoria.
            </h5>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center">
            <h1>|Auditoria login|</h1>
          </div>
        <div className="d-flex justify-content-center">
        <table className="tableAuditory ml-5 mr-5">
          <thead>
            <tr className="trAuditory">
              <th className="thAuditory"><h4 className="text-info text-center">ID</h4></th>
              <th className="thAuditory"><h4 className="text-info text-center">Usuario</h4></th>
              <th className="thAuditory"><h4 className="text-info text-center">Fecha login</h4></th>
              <th className="thAuditory"><h4 className="text-info text-center">Fecha logout</h4></th>
            </tr>
          </thead>
          <tbody>{renderCards}</tbody>
        </table>
        </div>
        
      </div>
    </div>
  );
}
export default Auditory;
