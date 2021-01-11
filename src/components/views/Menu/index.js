import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import "./style.css"

class Menu extends Component {
    
  render() {
    return (
      <div className="containerMenu">
          
          {/* <div className="d-flex justify-content-center"><h1 className="title">Bienvenidos</h1></div> */}
        <Navbar fixed="top"collapseOnSelect expand="lg" bg="light" >
          <Navbar.Brand href="#home">Arte Culinario</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="text-dark mr-3" to="/foodCompare">Comparar alimentos</Link>
              <Link className="text-dark mr-3" to="/weightControl">Control de peso</Link>
              <Link className="text-dark mr-3" to="/metabolicAnalyzer">Analizador metabolico</Link>
              <Link className="text-dark" to="/benefit">Beneficios</Link>

            </Nav>
            <Nav>
              <Link className="text-dark mr-3" to="/login">Login</Link>
              <Link className="text-dark" eventKey={2} to="/register">
                Registro
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
