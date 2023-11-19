/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from '../Firebase'
import { message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useNavigate } from 'react-router-dom'

const FormContext = createContext()

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tableData: []
  })

  const [form] = useForm()
  const [user, setUser] = useState({})
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordValidationStatus, setPasswordValidationStatus] = useState('')
  const navigate = useNavigate()

  const onFinish = async values => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
      const currentUser = userCredential.user
      console.log(currentUser)
      form.resetFields(['email', 'password'])
      await sendEmailVerification(currentUser)
      if (currentUser.emailVerified) {
        setUser({})
        setPasswordValidationStatus('')
        message.success(
          'Verification email has been sent. Please check your inbox.'
        )
        console.log('user', currentUser)
      } else {
        message.warning('Please verify your email before signing in.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSignin = async values => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
      const currentUser = userCredential.user
      console.log(currentUser)
      message.success('Sign in successful.')
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  const onSignout = async () => {
    signOut(auth)
      .then(() => {
        navigate('/login')
        message.success('Sign out successful.')
      })
      .catch(error => {
        console.log(error.message)
      })
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
        form,
        onSignin,
        onSignout
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => useContext(FormContext)

export { FormProvider, useFormContext }
