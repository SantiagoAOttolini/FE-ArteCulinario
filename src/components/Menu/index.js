import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Menu extends Component {
  render() {
    return (
      <div className="containerMenu">
        <div className="header">
          <div className="title">
            <h1 className="text1">Arte Culinario</h1>
            <h1 className="text2">Bienvenidos</h1>
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link className="login" to="/Login">
                  Login
                </Link>
              </li>
              <li>
                {" "}
                <Link className="foodCompare" to="/compare">
                  Comparar alimentos
                </Link>
              </li>
              <li>
                {" "}
                <Link className="beneficios" to="/beneficios">
                  Beneficios
                </Link>
              </li>
              <li>
                {" "}
                <Link className="register" to="/registro">
                  Registro
                </Link>
              </li>
              <li>
                {" "}
                <Link className="controlpeso" to="/controlpeso">
                  Control de peso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <div className="section">
            <h2>Introduccion</h2>
            <p>
              Arte Culinario es un sitio web relacionado con la aplicación móvil
              para sistemas operativo android Cocin-Arte. Las personas podrán
              utilizar el sitio para comparar entre dos alimentos y acceder a la
              información nutricional de los mismos para validar sus diferencias
              y ver que beneficios tiene cada una para llevar una vida
              saludable. Además permitirá a los usuarios que ya dispongan de una
              la versión premium de la aplicación móvil u otros que quieran
              acceder a la versión premium a través del sitio web , acceso a
              códigos promocionales de descuentos en locales de gastronomía de
              su localidad fomentando al consumo.
            </p>
            <p>
              Arte Culinario es un sitio web relacionado con la aplicación móvil
              para sistemas operativo android Cocin-Arte. Las personas podrán
              utilizar el sitio para comparar entre dos alimentos y acceder a la
              información nutricional de los mismos para validar sus diferencias
              y ver que beneficios tiene cada una para llevar una vida
              saludable. Además permitirá a los usuarios que ya dispongan de una
              la versión premium de la aplicación móvil u otros que quieran
              acceder a la versión premium a través del sitio web , acceso a
              códigos promocionales de descuentos en locales de gastronomía de
              su localidad fomentando al consumo.
            </p>
            <p>
              Arte Culinario es un sitio web relacionado con la aplicación móvil
              para sistemas operativo android Cocin-Arte. Las personas podrán
              utilizar el sitio para comparar entre dos alimentos y acceder a la
              información nutricional de los mismos para validar sus diferencias
              y ver que beneficios tiene cada una para llevar una vida
              saludable. Además permitirá a los usuarios que ya dispongan de una
              la versión premium de la aplicación móvil u otros que quieran
              acceder a la versión premium a través del sitio web , acceso a
              códigos promocionales de descuentos en locales de gastronomía de
              su localidad fomentando al consumo.
            </p>
            <p>
              Arte Culinario es un sitio web relacionado con la aplicación móvil
              para sistemas operativo android Cocin-Arte. Las personas podrán
              utilizar el sitio para comparar entre dos alimentos y acceder a la
              información nutricional de los mismos para validar sus diferencias
              y ver que beneficios tiene cada una para llevar una vida
              saludable. Además permitirá a los usuarios que ya dispongan de una
              la versión premium de la aplicación móvil u otros que quieran
              acceder a la versión premium a través del sitio web , acceso a
              códigos promocionales de descuentos en locales de gastronomía de
              su localidad fomentando al consumo.
            </p>
            <p>
              Arte Culinario es un sitio web relacionado con la aplicación móvil
              para sistemas operativo android Cocin-Arte. Las personas podrán
              utilizar el sitio para comparar entre dos alimentos y acceder a la
              información nutricional de los mismos para validar sus diferencias
              y ver que beneficios tiene cada una para llevar una vida
              saludable. Además permitirá a los usuarios que ya dispongan de una
              la versión premium de la aplicación móvil u otros que quieran
              acceder a la versión premium a través del sitio web , acceso a
              códigos promocionales de descuentos en locales de gastronomía de
              su localidad fomentando al consumo.
            </p>
            <p>Colaboracion con Cocin-Arte</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
