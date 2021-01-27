import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Auditory extends Component {
  render() {
    return (
      <div>
        <div className="mt-3 d-flex justify-content-center">
          <h1>|Auditoria de pagos|</h1>
        </div>
        <div className="d-flex justify-content-center">
          <a href="https://dashboard.stripe.com/test/dashboard" target="_blank">
            <button className="btn btn-info  text-white rounded h5">
              Ver auditoria
            </button>
          </a>
        </div>
        <div className="container mt-5 d-flex justify-content-center">
          <h5>
            Al darle click al boton <strong>"Ver auditoria"</strong> los
            redirigira a la pagina <strong className="text-info">https://stripe.com/es-us</strong> para poder
            visualizar la auditoria.
          </h5>
        </div>
      </div>
    );
  }
}
