import '@stripe/stripe-js'
import AppLayout from './UI/AppLayout'
import { Routes, Route } from 'react-router-dom'
import HeroSection from './components/CONTENTS/HeroSection'

import RecuringInvoice from './pages/RecuringInvoice'
import ErrorPage from './pages/ErrorPage'
import Receipt from './components/RECEIPT/Receipt'
import LoginPage from './pages/loginPage/LoginPage'
import SignupPage from './pages/signup/SignupPage'
import OnBoarding from './pages/onboarding/OnBoarding'
import Checkout from './pages/checkouts/Checkout'
import PaymentSetup from './pages/paymentSetups/PaymentSetup'
import Success from './pages/paymentSetups/Success'
import Cancel from './pages/paymentSetups/Cancel'
import ProtectedRoute from './routes/ProtectedRoute'
import CustomerStateMent from './pages/coustomerstatements/CustomerStateMent'
import ProfileEdit from './pages/profileEditor/ProfileEdit'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout content={<HeroSection />} />} />
      <Route
        path='/recurring-invoices'
        element={<AppLayout content={<RecuringInvoice />} />}
      />
      <Route path='/receipts' element={<AppLayout content={<Receipt />} />} />
      <Route path='/checkouts' element={<AppLayout content={<Checkout />} />} />
      <Route
        path='/payment-setup'
        element={<AppLayout content={<PaymentSetup />} />}
      />
      <Route
        path='/customer-statements'
        element={<AppLayout content={<CustomerStateMent />} />}
      />
      <Route
        path='/profile-edit'
        element={<AppLayout content={<ProfileEdit />} />}
      />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/onboarding' element={<OnBoarding />} />
      <Route path='/success' element={<Success />} />
      <Route path='/cancel' element={<Cancel />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App

// import '@stripe/stripe-js'
// import AppLayout from './UI/AppLayout'
// import { Routes, Route } from 'react-router-dom'
// import HeroSection from './components/CONTENTS/HeroSection'

// import RecuringInvoice from './pages/RecuringInvoice'
// import ErrorPage from './pages/ErrorPage'
// import Receipt from './components/RECEIPT/Receipt'
// import LoginPage from './pages/loginPage/LoginPage'
// import SignupPage from './pages/signup/SignupPage'
// import OnBoarding from './pages/onboarding/OnBoarding'
// import Checkout from './pages/checkouts/Checkout'
// import PaymentSetup from './pages/paymentSetups/PaymentSetup'
// import Success from './pages/paymentSetups/Success'
// import Cancel from './pages/paymentSetups/Cancel'
// import ProtectedRoute from './routes/ProtectedRoute'
// import CustomerStateMent from './pages/coustomerstatements/CustomerStateMent'

// const App = () => {

//   return (

//     <Routes>
//       <Route
//         path='/'
//         element={
//           <ProtectedRoute
//             Component={() => <AppLayout content={<HeroSection />} />}
//           />
//         }
//       />
//       <Route
//         path='/recurring-invoices'
//         element={
//           <ProtectedRoute
//             Component={() => <AppLayout content={<RecuringInvoice />} />}
//           />
//         }
//       />
//       <Route
//         path='/receipts'
//         element={
//           <ProtectedRoute
//             Component={() => <AppLayout content={<Receipt />} />}
//           />
//         }
//       />
//       <Route
//         path='/checkouts'
//         element={
//           <ProtectedRoute
//             Component={() => <AppLayout content={<Checkout />} />}
//           />
//         }
//       />
//       <Route
//         path='/payment-setup'
//         element={
//           <ProtectedRoute
//             Component={() => <AppLayout content={<PaymentSetup />} />}
//           />
//         }
//       />
//       <Route
//         path='/customer-statements'
//         element={
//          <ProtectedRoute Component={() => <AppLayout content={<CustomerStateMent />} />} />

//         }
//       />
//       <Route path='/login' element={<LoginPage />} />
//       <Route path='/signup' element={<SignupPage />} />
//       <Route path='/onboarding' element={<OnBoarding />} />
//       <Route path='/success' element={<Success />} />
//       <Route path='/cancel' element={<Cancel />} />
//       <Route path='*' element={<ErrorPage />} />
//     </Routes>

//   )
// }

// export default App
