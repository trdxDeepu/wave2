import { loadStripe } from '@stripe/stripe-js'

export default function PaymentSetup () {

  

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
    <div>
      <button onClick={redirectToCheckout}>Check outs</button>
    </div>
  )
}
