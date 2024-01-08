import { loadStripe } from '@stripe/stripe-js'

let stripePromise

export default function PaymentSetup () {
  function getStripe () {
    if (!stripePromise) {
      const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
    }
    return stripePromise
  }

  const Checkout = () => {
    const item = {
      priceID: 'price_1OWBq9SH9Sbo3jwLjQ4Ou3qo',
      quantity: 1
    }
    const checkoutOptions = {
      lineItems: [item],
      mode: 'payment',
      successUrl:  ``,
      cancelUrl: 'http://localhost:3000/cancel'
    }
  }
  return (
    <div>
      <button>Check outs</button>
    </div>
  )
}
