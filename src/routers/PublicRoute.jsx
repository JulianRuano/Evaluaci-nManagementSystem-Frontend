import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/" replace={true} /> : element
}

export default PublicRoute

PublicRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
