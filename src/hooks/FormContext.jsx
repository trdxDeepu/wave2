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

  const onFinish = values => {
    console.log('Received values of form: ', values)
  }
  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleSubmit,
        onFinish,
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
