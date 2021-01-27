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
        <div className="mt-5 d-flex justify-content-center">
          <h1 className="titleName text-center rounded">{product.name}</h1>
        </div>
        <div className="textDescription d-flex justify-content-center">
          <h5>{product.description}</h5>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <h4 className="titleAdventages text-center rounded">Ventajas</h4>
        </div>
        <div className="d-flex justify-content-center">
          <h5 className="textAdventages">{product.adventages}</h5>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <h4 className="titleCategory text-center rounded">Categoria</h4>
        </div>
        <div className="d-flex justify-content-center">
          <h5>{product.Category}</h5>
        </div>
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
