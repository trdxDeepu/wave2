/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const FormContext = createContext()

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tableData: []
  })

  const [user, setUser] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form Submit', formData)
    alert('Form Submitted')
    setFormData('')
  }

  function handleSignup (e) {
    e.preventDefault()
    console.log('working')
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleSubmit,
        handleSignup,
        user,
        setUser
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => useContext(FormContext)

export { FormProvider, useFormContext }
