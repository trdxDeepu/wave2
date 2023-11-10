import AppLayout from './UI/AppLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/CONTENTS/HeroSection'

import RecuringInvoice from './pages/RecuringInvoice'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout content={<HeroSection />} />} />
        <Route
          path='/page'
          element={<AppLayout content={<RecuringInvoice />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
