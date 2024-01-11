/* eslint-disable react/prop-types */

import { useAuthContext } from '../hooks/contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {

    const {Component} = props
    const {isAuthenticated} = useAuthContext()

  return (
    <>
      { isAuthenticated ? 
        <Component/>
    : <Navigate to='/login'/>
    }
    </>
  )
}

export default ProtectedRoute