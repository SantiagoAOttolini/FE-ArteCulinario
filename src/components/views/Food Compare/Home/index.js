import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Compare from "../Compare/index";
import ProductList from "../ProductList/index";
import * as productActions from "../../../../_actions/product";
import { connect } from "react-redux";
import "./style.css";

function serchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
    this.serchHandler = this.serchHandler.bind(this);
  }

  serchHandler(event) {
    this.setState({ term: event.target.value });
  }

  componentWillMount() {
    this.props.actions.getProducts();
  }

  render() {
    const { products, actions } = this.props;
    const compareProducts = products.filter((product) => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Comparar productos</h2>
            <form>
              <input
                className="nombreAlimento"
                type="text"
                placeholder="Buscar alimento"
                onChange={this.serchHandler}
                value={this.state.term}
              />
            </form>
            <div className="categorias">
              
              <select className="categoriaFrutas">
              <option selected value="0"> Frutas </option>
                <option value="2"></option>
                <option value="3">Windows XP</option>
                <option value="10">Fedora</option>
                <option value="11">Debian</option>
                <option value="12">Suse</option>
              </select>
              
              <select className="categoriaVerduras">
              <option selected value="0"> Verduras </option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
                <option value="10">Fedora</option>
                <option value="11">Debian</option>
                <option value="12">Suse</option>
              </select>
              
              <select className="categoriaCarnes">
              <option selected value="0"> Carnes </option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
                <option value="10">Fedora</option>
                <option value="11">Debian</option>
                <option value="12">Suse</option>
              </select>
              
              <select className="categoriaLacteos">
              <option selected value="0"> Lacteos </option>
                <option value="2">Windows 7</option>
                <option value="3">Windows XP</option>
                <option value="10">Fedora</option>
                <option value="11">Debian</option>
                <option value="12">Suse</option>
              </select>
            </div>
          </div>
        </div>
        <ProductList
          products={products.filter(serchingFor(this.state.term))}
          compare={actions.compare}
        />
        {compareProducts.length >= 2 && <Compare products={compareProducts} />}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    products: state.product.products,
  }),
  (dispatch) => ({
    actions: bindActionCreators(productActions, dispatch),
  })
)(Home);

/*<select name="OS">
<option value="1"  onChange={this.serchHandler}>{products.id = "1"}</option>
<option value="2">Windows 7</option>
<option value="3">Windows XP</option>
<option value="10">Fedora</option>
<option value="11">Debian</option>
<option value="12">Suse</option>
</select>*/
