import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormProvider } from './hooks/FormContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <FormProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FormProvider>
  </AuthProvider>
  </BrowserRouter>
)
