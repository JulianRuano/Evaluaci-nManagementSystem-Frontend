import React from 'react'

const Period = () => {

  return (
        <div className="min-w-screen min-h-screen flex mt-20 justify-center">
          <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl font-semibold leading-7 text-gray-900">Crear nuevo periodo</h2>
            <form> 
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                    Año
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="year"
                      id="year"
                      autoComplete="year"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 sm:col-start-1">
                  <label htmlFor="fechaInicio" className="block text-sm font-medium leading-6 text-gray-900">
                    fecha de inicio
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="fechaInicio"
                      id="fechaInicio"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    fecha de fin
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="fechaInicio"
                      id="fechaInicio"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="semester" className="block text-sm font-medium leading-6 text-gray-900">
                    Semestre
                  </label>
                  <div className="mt-2">
                    <select
                      id="semester"
                      name="semester"
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>
          
                <div className="mt-7 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Guardar
                  </button>
                </div>                        

              </div>
            </form>
            </div>
        </div>
  )
}

export default Period
