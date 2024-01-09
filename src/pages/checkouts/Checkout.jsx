import './checkout.css'
import { loadStripe } from '@stripe/stripe-js'

import { FaExternalLinkAlt } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import Title from '../../UI/Title'
import ButtonRounded from '../../UI/Button/ButtonRounded'

const Checkout = () => {

  let stripePromise

function getStripe () {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51OWCUBSI8uIfEVFxQeK1CgOJxLAlwCPjzgzXKD5i4wHyiGuUiO82vw1BFXxESXKhMLn62FZlY78DySQWxaoT7Aw300kbFXmdZ7'
    )
  }
  return stripePromise
}

const item = {
  price: 'price_1OWCVySI8uIfEVFx1JA2F0b1',
  quantity: 1
}

const checkoutOptions = {
  lineItems: [item],
  mode: 'payment',
  // payment_method_types: ['card', 'google_pay'],
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cancel`
}

const redirectToCheckout = async () => {
  console.log('redirecttoCheckout')
  const stripe = await getStripe()
  const { error } = await stripe.redirectToCheckout(checkoutOptions)
  console.log('stripe checkout error', error)
}

  return (
    <article className='checkout_page'>
      <img
        src='/checkout.png'
        alt='checkout_image'
        height={340}
        width={340}
        className='checkout_image'
      />

      <div className='checkout_right'>
        <Title>CheckOut</Title>
        <div className='checkout_header'>
          <h1 className='header_title'>
            Accept payments directly from your website.
          </h1>
          <p className='header_para'>Get paid without lifting a finger.</p>
          <p className='subtitle'>
            <strong>2.9% + $0.60</strong> per transaction:{' '}
            <strong>Visa, Mastercard, Discover</strong>
          </p>
          <p className='subtitle2'>
            <strong>3.4% + $0.60</strong> per transaction:{' '}
            <strong>American Express</strong>
          </p>
          <p className='subtitle3'>
            <strong>1% </strong> per transaction:{' '}
            <strong>Bank payments (ACH)</strong>
          </p>
          <div className='payment_icons'>
            <div className='visa'></div>
            <div className='visa'></div>
            <div className='visa'></div>
            <div className='visa'></div>
          </div>
        </div>
        <div className='checkout_button'>
          {/* <Link to='/payment-setup'> */}
          <ButtonRounded type='primary'  onClick={redirectToCheckout}>
            Set up online Payment
          </ButtonRounded>
          {/* </Link> */}
          <p className='footer_line'>
            By continuing, you are agreeing to the Wave Payments
            <span className='footer_line_subtitle'>
              {' '}
              Terms and services{' '}
              <FaExternalLinkAlt size={10} className='footer_link' />
            </span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default Checkout
