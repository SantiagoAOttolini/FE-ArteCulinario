import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from "./products.json";
import "./style.css";

class Informacion extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
  }

  componentDidMount() {
    let product = Products.products.find((product) => {
      // me devuelve el primero que retorna true
      return product.id == this.props.match.params.id;
    });
    this.setState({ product: product });
  }

  const;
  render() {
    console.log(Products);
    return (
      <div className="infoAlimentos">
        <h1>{this.state.product.name}</h1>
        <p>{this.state.product.descripcion}</p>
        <h1>{this.state.product.ventaja}</h1>
        <p className="pro">{this.state.product.pro}</p>
      </div>
    );
  }
}
export default Informacion;
