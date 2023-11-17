import React from 'react'
import { Sidebar } from 'react-pro-sidebar'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { startHandleLogout } from '../actions/auth'
import { useDispatch } from 'react-redux'

const ProSidebar = ({ toggled, setToggled }) => {
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(startHandleLogout())
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: 'calc(100vh - 68px)'
      }}
    >
      <Sidebar
        backgroundColor="#E6E6E6"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="md"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
            borderRadius: '10px'
          }}
        >
          <img
            src="https://res.cloudinary.com/dzxhdnqm4/image/upload/v1700164038/bandera_unicauca.png"
            style={{ width: '105px', height: '114px' }}
            alt="Bandera Unicauca"
            className={`hidden md:block`}
          />
        </div>

        <ul className="ml-4">
          <li className="my-3">
            <NavLink
              to="/gestionar-autoevaluaciones"
              className="text-secondary text-sm"
              onClick={() => setToggled(false)}
            >
              <i className="fa-solid fa-book text-secondary pr-1"></i>
              Gestionar Autoevaluaciones
            </NavLink>
          </li>

          <hr className="border-t-1 border-secondary text-sm opacity-20" />
          <li className="my-3">
            <NavLink
              to="/gestionar-labores"
              className="text-secondary text-sm"
              onClick={() => setToggled(false)}
            >
              <i className="fa-solid fa-chalkboard-user text-secondary pr-1"></i>
              Gestionar labores
            </NavLink>
          </li>
          <hr className="border-t-1 border-secondary text-sm opacity-20" />
          <li className="my-3">
            <NavLink
              to="/gestionar-periodos"
              className="text-secondary text-sm"
              onClick={() => setToggled(false)}
            >
              <i className="fa-solid fa-school text-secondary pr-1"></i>
              Gestionar Periodo Académico
            </NavLink>
          </li>
          <hr className="border-t-1 border-secondary text-sm opacity-20" />
          <li className="my-3">
            <NavLink
              to="/gestionar-docentes"
              className="text-secondary text-sm"
              onClick={() => setToggled(false)}
            >
              <i className="fa-solid fa-users-line text-secondary pr-1"></i>
              Gestionar docentes
            </NavLink>
          </li>
          <hr className="border-t-1 border-secondary text-sm opacity-20" />
          <li className="mb-3 mt-3 text-secondary text-sm">
            <p
              className="text-secondary text-sm cursor-pointer"
              onClick={handleSignOut}
            >
              <i className="fa-solid fa-right-to-bracket text-secondary pr-1"></i>
              Cerrar sesión
            </p>
          </li>
        </ul>
      </Sidebar>
    </div>
  )
}
export default ProSidebar
ProSidebar.propTypes = {
  toggled: propTypes.bool,
  setToggled: propTypes.func
}
