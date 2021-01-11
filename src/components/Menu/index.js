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
              <Nav.Link href="#foodCompare">Comparar alimentos</Nav.Link>
              <Nav.Link href="#weightControl">Control de peso</Nav.Link>
              <Nav.Link href="#metabolicAnalyzer">Analizador metabolico</Nav.Link>
              <Nav.Link href="#benefit">Beneficios</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#register">
                Registro
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
