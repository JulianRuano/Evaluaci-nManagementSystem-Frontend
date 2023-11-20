import React from 'react'
import { Outlet } from 'react-router-dom'
import propTypes from 'prop-types'
import NotFoundPage from '../components/NotFoundPage'
import DocentNav from '../components/DocentNav'

const DocentRoute = ({ role }) => {
  if (role !== 'Coordinador') {
    return <NotFoundPage />
  }
  return (
    <>
      <DocentNav />
      <Outlet />
    </>
  )
}

export default DocentRoute

DocentRoute.propTypes = {
  role: propTypes.string
}
