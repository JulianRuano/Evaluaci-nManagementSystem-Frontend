import React from 'react'
import { Sidebar } from 'react-pro-sidebar'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const ProSidebar = ({ toggled, setToggled }) => {
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
            marginBottom: '1rem'
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
          <li className="mb-3">
            <NavLink
              exact
              to="/gestionar-autoevaluaciones"
              className="text-secondary text-sm"
            >
              <i className="fa-solid fa-book text-secondary pr-1"></i>
              Gestionar Autoevaluaciones
            </NavLink>
          </li>

          <hr className="border-t-1 border-secondary text-sm opacity-20" />
          <li className="mb-3 mt-3 text-sm">
            <a href="#" className=" text-secondary">
              <i className="fa-solid fa-chalkboard-user"></i> Gestionar labores
            </a>
          </li>
          <hr className="border-t-1 border-secondary text-sm opacity-20" />
          <li className="mb-3 mt-3">
            <a href="#" className=" text-secondary text-sm ">
              <i className="fa-solid fa-school"></i> Gestionar Periodo Académico
            </a>
          </li>
          <hr className="border-t-1 border-secondary text-sm opacity-20" />
          <li className="mb-3 mt-3">
            <a href="#" className=" text-secondary text-sm">
              <i className="fa-solid fa-users-line"></i> Gestionar docentes
            </a>
          </li>
          <hr className="border-t-1 border-secondary text-sm opacity-20" />
          <li className="mb-3 mt-3">
            <a href="#" className=" text-secondary text-sm">
              <i className="fa-solid fa-right-to-bracket"></i> Cerrar Sesión
            </a>
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
