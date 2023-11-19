import React from 'react'
import { Outlet } from 'react-router-dom'
import propTypes from 'prop-types'
import NotFoundPage from '../components/NotFoundPage'

const DocentRoute = ({ role }) => {
  if (role !== 'Coordinador') {
    return <NotFoundPage />
  }
  return <Outlet />
}

export default DocentRoute

DocentRoute.propTypes = {
  role: propTypes.string
}
