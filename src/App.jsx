import AppLayout from './UI/AppLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/CONTENTS/HeroSection'

import RecuringInvoice from './pages/RecuringInvoice'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/invoice' element={<AppLayout content={<HeroSection />} />} />
        <Route
          path='/recurring-invoices'
          element={<AppLayout content={<RecuringInvoice />} />}
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
