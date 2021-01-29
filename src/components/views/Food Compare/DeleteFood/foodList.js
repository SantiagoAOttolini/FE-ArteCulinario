import React, { Component } from 'react'
import Food from './food'
import { connect } from 'react-redux'
import { getProducts } from '../../../../_actions/product'

class foodList extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <>
        <div className='container py-5'>
          <div>
            {this.props.products &&
              this.props.products.map(product => (
                <Food key={product._id} product={product} />
              ))}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product.products
})

export default connect(mapStateToProps, {
    getProducts
})(foodList)