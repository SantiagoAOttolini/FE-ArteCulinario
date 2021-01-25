import React from 'react'
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
  </div>
)

export default Product
