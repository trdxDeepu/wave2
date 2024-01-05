import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormProvider } from './hooks/FormContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


const stripePromise = loadStripe(
  'pk_test_51OSI21SH9Sbo3jwLuSVkSYuKeBmhGGNdeGI9V39GgM7bELVNe5Q8vJKH3ZGUVd5MqdeaFd6FP4c0vQl3CQy678g800qGAlBhZ8'
)
const options = {
  // passing the client secret obtained from the server
  clientSecret: 'sk_test_51OSI21SH9Sbo3jwLawScKIFGP4nWeC542xtbbnV0LcE2djlxyKEFzEZMxPKobVZcHvgx5s6AE2G24wC4jGPDPZVY00FOevczSh'
}

console.log(stripePromise, options)
console.log("window", window)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FormProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FormProvider>
  </BrowserRouter>
)
