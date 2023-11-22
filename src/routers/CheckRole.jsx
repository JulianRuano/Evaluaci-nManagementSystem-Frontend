import React from 'react'
import { PropTypes } from 'prop-types'
import NotFoundPage from '../components/NotFoundPage'

const CheckRole = ({ role, expectedRoles, element }) => {
  return expectedRoles.includes(role) ? element : <NotFoundPage />
}

export default CheckRole
CheckRole.propTypes = {
  role: PropTypes.string.isRequired,
  expectedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  element: PropTypes.element.isRequired
}
