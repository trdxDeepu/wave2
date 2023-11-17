/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const FormContext = createContext()

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tableData: []
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form Submit', formData)
    alert('Form Submitted')
    setFormData('')
  }

  return (
    <FormContext.Provider value={{ formData, setFormData, handleSubmit }}>
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => useContext(FormContext)

export { FormProvider, useFormContext }
