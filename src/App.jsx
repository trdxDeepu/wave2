import AppLayout from './UI/AppLayout'
import { Routes, Route } from 'react-router-dom'
import HeroSection from './components/CONTENTS/HeroSection'
import '@stripe/stripe-js'

import RecuringInvoice from './pages/RecuringInvoice'
import ErrorPage from './pages/ErrorPage'
import Receipt from './components/RECEIPT/Receipt'
import LoginPage from './pages/loginPage/LoginPage'
import SignupPage from './pages/signup/SignupPage'
import OnBoarding from './pages/onboarding/OnBoarding'
import Checkout from './pages/checkouts/Checkout'
import PaymentSetup from './pages/paymentSetups/PaymentSetup'
import Success from './pages/checkouts/Success'
import Cancel from './pages/checkouts/Cancel'


const App = () => {
  // const stripePromise = loadStripe(
  //   'pk_test_51OSI21SH9Sbo3jwLuSVkSYuKeBmhGGNdeGI9V39GgM7bELVNe5Q8vJKH3ZGUVd5MqdeaFd6FP4c0vQl3CQy678g800qGAlBhZ8'
  // )
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}'
  // }

  return (
    // <Elements stripe={stripePromise} options={options}>
      <Routes>
        <Route path='/' element={<AppLayout content={<HeroSection />} />} />
        <Route
          path='/recurring-invoices'
          element={<AppLayout content={<RecuringInvoice />} />}
        />
        <Route path='/receipts' element={<AppLayout content={<Receipt />} />} />
        <Route
          path='/checkouts'
          element={<AppLayout content={<Checkout />} />}
        />
        <Route
          path='/payment-setup'
          element={<AppLayout content={<PaymentSetup />} />}
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/onboarding' element={<OnBoarding />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    // </Elements>
  )
}

export default App

// import { lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const AppLayout = lazy(() => import('./UI/AppLayout'));
// const HeroSection = lazy(() => import('./components/CONTENTS/HeroSection'));
// const RecurringInvoice = lazy(() => import('./pages/RecuringInvoice'));
// const ErrorPage = lazy(() => import('./pages/ErrorPage'));
// const Receipt = lazy(() => import('./components/RECEIPT/Receipt'));
// const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
// const SignupPage = lazy(() => import('./pages/signup/SignupPage'));

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<AppLayout content={<HeroSection />} />} />
//           <Route
//             path='/recurring-invoices'
//             element={<AppLayout content={<RecurringInvoice />} />}
//           />
//           <Route path='/receipts' element={<AppLayout content={<Receipt />} />} />
//           <Route path='/login' element={<LoginPage />} />
//           <Route path='/signup' element={<SignupPage />} />
//           <Route path='*' element={<ErrorPage />} />
//         </Routes>
//       </BrowserRouter>
//     </Suspense>
//   );
// };

// export default App;
