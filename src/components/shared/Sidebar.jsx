import React from 'react'
import propTypes from 'prop-types'

const Sidebar = ({ isSidebarVisible }) => {
  return (
    <aside
      className={`bg-primary text-white w-72 min-h-screen p-6
              ${
                isSidebarVisible
                  ? 'transition-transform transform translate-x-0'
                  : 'transition-transform transform -translate-x-full'
              }
              lg:block`}
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
        />
      </div>

      <hr className="border-t-1 border-secondary text-sm opacity-20" />

      <ul>
        <li className="mb-3 mt-3 text-sm">
          <a href="#" className=" text-secondary">
            <i className="fa-solid fa-book"></i> Gestionar Autoevaluaciones
          </a>
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
      <hr className="border-t-1 border-secondary text-sm opacity-20" />
    </aside>
  )
}

export default Sidebar

Sidebar.propTypes = {
  toggleSidebar: propTypes.func,
  isSidebarVisible: propTypes.bool
}
