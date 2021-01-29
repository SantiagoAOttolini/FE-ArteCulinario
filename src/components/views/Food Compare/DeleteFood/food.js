import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct, getProducts } from "../../../../_actions/product";

class food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      chek2: false,
    };
  }

  render() {
    const food = this.props.product;
    const foodItem = (
      <div  key={food._id}>
        <div className="d-flex justify-content-center mb-5 mt-5">
          <img
            className="mr-2"
            width="248"
            height="180"
            src={`http://localhost:5000/${food.photo}`}
          ></img>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-danger btn-xs"
            onClick={() => this.props.deleteProduct(food._id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    );

    return <div>{foodItem}</div>;
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, {
  deleteProduct,
  getProducts,
})(food);
