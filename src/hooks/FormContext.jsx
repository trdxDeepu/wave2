/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../Firebase'
import { message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useNavigate } from 'react-router-dom'


const FormContext = createContext()

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    tableData: []
  })

  const [form] = useForm()
  const [user, setUser] = useState([])
  const [userDataDB, setUserDataDB] = useState({})

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordValidationStatus, setPasswordValidationStatus] = useState('')
  const navigate = useNavigate()

  /* Function to store the data in data base */
  const createUserAndAddToFirestore = async (
    userCredential,
    additionalData = {}
  ) => {
    try {
      const userData = {
        name: userCredential.displayName || '', // Handle the possibility of displayName being null
        email: userCredential.email || '',
        uid: userCredential.uid,
        ...additionalData
      }

      await setDoc(doc(db, 'users', userCredential.uid), userData)
      navigate('/')
      message.success('Sign in successful.')
    } catch (error) {
      alert(error)
    }
  }

  /* getUSerData */

  const getUserData = async userId => {
    try {
      const userDocRef = doc(db, 'users', userId)
      const userDocSnapshot = await getDoc(userDocRef)

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data()
        /* Storing data to state to access to all over state as props */
        setUserDataDB(userData)
      } else {
        console.log('User document does not exist.')
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
      throw error
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await getUserData(user.uid);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        // User is signed out
        setUserDataDB({});
      }
    });
  
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);
  



  const onFinish = async values => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      form.resetFields(['email', 'password'])
      const userCredential = result.user
      await createUserAndAddToFirestore(userCredential)
      
      navigate('/')
    } catch (error) {
      console.error('Error during document addition:', error)

      message.error('Something went wrong. Please try again.')
    }
  }

  const onSignin = async values => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
      if (userCredential.user) {
        message.success('Sign in successful.')
        navigate('/')
      }
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

  const onGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const response = await signInWithPopup(auth, provider)

      // Ensure that response.user exists and has a uid property
      if (response.user && response.user.uid) {
        await createUserAndAddToFirestore(response.user)
       // Use response.user.uid instead of response.uid
      } else {
        console.error('Google sign-in failed. User data not available.')
        message.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error(error)
      message.error('Something went wrong. Please try again.')
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
        form,
        onSignin,
        onSignout,
        onGoogleSignIn,
        userDataDB,
        setUserDataDB
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => useContext(FormContext)

export { FormProvider, useFormContext }
