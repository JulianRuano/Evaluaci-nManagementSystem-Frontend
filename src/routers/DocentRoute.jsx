import React from 'react'
import { Outlet } from 'react-router-dom'
import propTypes from 'prop-types'

const DocentRoute = ({ role }) => {
  return (
    <div className="container">
      {/* <DocentNav /> */}
      <Outlet />
    </div>
  )
}

export default DocentRoute

DocentRoute.propTypes = {
  role: propTypes.string
}
