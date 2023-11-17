import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormProvider } from './hooks/FormContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FormProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FormProvider>
    ,
  </>
)
