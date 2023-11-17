import React from 'react'

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex flex-col sm:flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="text-2xl leading-tight">Dashboard del Coordinador</h2>
        </div>
        <div className="my-2 flex flex-wrap sm:flex-nowrap">
          <div className="w-full sm:w-1/2 p-2">
            <div className="p-4 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-semibold">
                Resumen de Autoevaluaciones
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{' '}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <div className="p-4 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-semibold">Resumen de Docentes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{' '}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <div className="p-4 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-semibold">Resumen de Labores</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{' '}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <div className="p-4 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-semibold">
                Resumen de Periodos Académicos
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
