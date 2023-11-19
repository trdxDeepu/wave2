import AppLayout from './UI/AppLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/CONTENTS/HeroSection'

import RecuringInvoice from './pages/RecuringInvoice'
import ErrorPage from './pages/ErrorPage'
import Receipt from './components/RECEIPT/Receipt'
import LoginPage from './pages/loginPage/LoginPage'
import SignupPage from './pages/signup/SignupPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout content={<HeroSection />} />} />
      <Route
        path='/recurring-invoices'
        element={<AppLayout content={<RecuringInvoice />} />}
      />
      <Route path='/receipts' element={<AppLayout content={<Receipt />} />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
