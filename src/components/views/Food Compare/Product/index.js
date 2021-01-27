import React from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../../../../_actions/product'
import './styles.css'

const Product = ({ product, compare }) => (
  <div key={product.id} className='col-sm-6 col-md-3'>
    <div className={'product ' + (product.compare ? 'compare' : '')}>
      <img src={`http://localhost:5000/${product.photo}`} alt={product.name} />
      <div className='image_overlay' />
      <div className='view_details' onClick={() => compare(product)}>
        {product.compare ? 'Eliminar' : 'Comparar'}
      </div>
      <div className='stats'>
        <div className='stats-container'>
          <span className='product_name'>{product.name}</span>
        </div>
      </div>
    </div>
    <button
      className='btn btn-danger btn-xs'
      onClick={() => this.deleteProduct(product._id)}
    >
      Eliminar Alimento
    </button>
  </div>
)

const mapStateToProps = state => ({
  products: state.product.products
})

export default connect(mapStateToProps, {
  deleteProduct
})(Product)
