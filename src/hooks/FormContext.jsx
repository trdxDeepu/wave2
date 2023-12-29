/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState,useCallback} from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth'
import { setDoc, doc, getDoc, } from 'firebase/firestore'
import { auth, db } from '../Firebase'
import { message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useNavigate } from 'react-router-dom'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


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
  const createUserAndAddToFirestore = async (userCredential, e) => {
    try {
      const userLogin = {
        name: userCredential.displayName || '', // Handle the possibility of displayName being null
        email: userCredential.email || '',
        uid: userCredential.uid
      }

      await setDoc(doc(db, 'users', userCredential.uid), userLogin)
      navigate('/')
      message.success('Sign in successful.')
    } catch (error) {
      alert(error)
    }
  }

  /* getUSerData */

  const getUserData = async (userId) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        setUserDataDB(userData);
        console.log(userData);
      } else {
        console.log('User document does not exist.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

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
  }, []); // Empty dependency array for a one-time effect

  // ... (other functions and return statement)






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
      await handleSubmit(userCredential)

      navigate('/')
    } catch (error) {
      console.error('Error during document addition:', error)

      message.error('Something went wrong. Please try again.')
    }
  }

  /* Email annd password */
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

  /* Sign out */
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

  /* Google Sign in */
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

  /*  */
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  /* handle submit form and storage of images in firebase */

async function handleSubmit (e, userCredential) {
  e.preventDefault()
  try {
    const userId = auth.currentUser?.uid

    // Check if auth.currentUser or userId is undefined
    if (!userId) {
      console.error('User ID is undefined.')
      return
    }

    const userLogin = {
      name: auth.currentUser?.displayName || '',
      email: auth.currentUser?.email || ''
    }

    const fileInput = document.getElementById('input-file')

   
    // Check if the file input element exists
    if (fileInput) {
      const imageFile = fileInput.files[0]


      if (imageFile) {
        const storage = getStorage()
        const storageRef = ref(
          storage,
          `user_images/${userId}/${imageFile.name}`
        )
        await uploadBytes(storageRef, imageFile)
        const imageUrl = await getDownloadURL(storageRef)
        userLogin.imageURL = imageUrl
      }
    }


    const userDocRef = doc(db, 'users', userId)
    const data = { ...userLogin, ...formData }

    await setDoc(userDocRef, data)
    setFormData('')

    console.log('User data stored in Firestore successfully!')
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
        form,
        onSignin,
        onSignout,
        onGoogleSignIn,
        userDataDB,
        setUserDataDB,
        handleSubmit,
        handleChange
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => useContext(FormContext)

export { FormProvider, useFormContext }
