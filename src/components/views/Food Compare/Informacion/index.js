import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { getProducts } from "../../../../_actions/product";

class Informacion extends Component {
  /* constructor(props) {
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
 
  const; */
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      product: {},
      id,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      await this.props.getProducts();
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate() {
    if (!this.state.product.name && this.props.Products) {
      const detailProduct = this.props.Products.find(
        (x) => x._id.toString() === this.state.id.toString()
      );

      if (detailProduct) {
        this.setState({
          product: detailProduct,
          loading: false,
        });
      }
    }
  }
  render() {
    const product = this.state.product;
    const id = this.state.product.id;
    console.log(id);
    return (
      <div className="infoAlimentos">
        <p>Hola</p>
        <h1>{product.name}</h1>
      {/*   <p>{this.state.product.descripcion}</p>
        <h1>{this.state.product.ventaja}</h1>
        <p className="pro">{this.state.product.pro}</p> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Products: state.product.products,
});

export default connect(mapStateToProps, {
  getProducts,
})(Informacion);
