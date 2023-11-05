import React from 'react'
import { Navigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const PrivateRoute = ({ isAuthenticated, element }) => {
  return isAuthenticated ? element : <Navigate to="/auth/login" />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.element.isRequired
}
