import React from 'react'

import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import "./style.css"

const PricingHome = props => {
  toast.configure()
  const user = useSelector(state => state.user)
  const [product] = React.useState({
    name: '|Arte Culinario Premium|',
    price: 14,
    description: 'LLeva la pasion por la cocina, a otro nivel.'
  })
  const body = {
    user
  }

  async function handleToken(token, addresses) {
    const response = await axios.post(
      'http://localhost:5000/api/checkout/cardPay',
      { token, product }
    )
    const { status } = response.data
    console.log('Response:', response.data)
    if (status === 'success') {
      toast('El pago fue realizado exitosamente', { type: 'success' })
      axios
        .post('http://localhost:5000/api/checkout/changeAccount', body)
        .then(() => {
          props.history.push('/')
        })
    } else {
      toast('Ocurrio un error durante la transaccion', { type: 'error' })
    }
  }

  return (
    <div className=''>
      <div className='d-flex justify-content-center productImg'>
        <h1>{product.name}</h1>
      </div>
      <div className='d-flex justify-content-center'>
        <h3>Oferta exclusiva: ${product.price}</h3>
      </div>
      <div className="container imgPrice">
      </div>

      <div className='d-flex justify-content-center container containerImg'></div>
      <div className='d-flex justify-content-center'>
        <StripeCheckout
          className='mt-4 w-25'
          label='Pagar con tarjeta'
          stripeKey='pk_test_51IB2toIHFmBhTQLtHrSppZKrAtzBBx2H5DMU1oPetaXulzyi5BJQrVq3YzANFrYOfp2FocnbP4LwA2uL1E3dHPvV00ERf1p4tQ'
          token={handleToken}
          amount={product.price * 100}
          name='|Arte Culinario Premium|'
          billingAddress
        />
      </div>

      <div className='d-flex justify-content-center'>
        <a className='mt-4 w-25 text-info' href='https://mpago.la/1kAMks2'>
          <button className='brnMercadoPago btn btn-info w-100'>
            Mercado pago
          </button>
        </a>
      </div>
      <br></br>
      <div className='d-flex justify-content-center'>
        <p>
          <div className='d-flex justify-content-center'>
            <p className='text-dark font-weight-bold h4'>Importante</p>
          </div>
          <div>
            <p className='text-dark h6'>
              Con el metodo de pago a través de "Mercado Pago" , una vez
              acreditada la compra se deberá enviar un email a:
              <div className='d-flex justify-content-center mt-3'>
                <h5>|soporte.ArteCulinario@gmail.com|</h5>
              </div>
              <div className='d-flex justify-content-center'>
                <p className='h4 mt-5 font-weight-bold text-dark'>
                  El mail debe contener
                </p>
              </div>
            </p>
          </div>
          <div className='d-flex justify-content-center'>
            <p className='text-dark h6'>
              Email de la cuenta de |Arte-Culinario| -- Nombre y apellido de la
              cuenta -- Foto adjunta del comprobante de pago{' '}
            </p>
          </div>

          <div>
            <p className='h6 text-dark font-weight-bold mt-4'>
              {' '}
              En el lapso de 24 hs , una vez verificada la solicitud , se
              notificara y brindara el servicio de cuenta premium.
            </p>
          </div>
        </p>
      </div>
    </div>
  )
}

export default PricingHome
