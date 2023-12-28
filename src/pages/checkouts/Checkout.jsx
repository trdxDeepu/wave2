import './checkout.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Checkout = () => {
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
        <p className='checkout_pretitle'>checkouts</p>
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
      </div>
      <div className='checkout_button'>
        <button className='btn_round'>Set up online Payment</button>
        <p className='footer_line'>
          By continuing, you are agreeing to the Wave Payments
          <span className='footer_line_subtitle'> Terms and services </span>
          <FaExternalLinkAlt size={10} className='footer_link'/>
        </p>
      </div>
    </article>
  )
}

export default Checkout
