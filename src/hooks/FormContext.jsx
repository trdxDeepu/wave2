/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../Firebase'
import { message } from 'antd'
import { useForm } from 'antd/es/form/Form'

const FormContext = createContext()

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tableData: []
  })

  const [form] = useForm()
  const [user, setUser] = useState({})
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordValidationStatus, setPasswordValidationStatus] = useState('')

  const onFinish = async values => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      const currentUser = userCredential.user
      console.log(currentUser)

      // Reset specific fields
      form.resetFields(['email', 'password'])

      // Send email verification
      await sendEmailVerification(currentUser)

      if (currentUser.emailVerified) {
        // User email is verified, sign them in

        // Set user state or perform any other necessary actions
        setUser({})
        setPasswordValidationStatus('')
        message.success('Account created and verified. You are now signed in!')
        console.log('user', currentUser)
      } else {
        message.warning('Please verify your email before signing in.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        user,
        setUser,
        setPasswordVisible,
        setPasswordValidationStatus,
        onFinish,
        passwordVisible,
        passwordValidationStatus,
        form
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => useContext(FormContext)

export { FormProvider, useFormContext }
