import Modal from 'antd/es/modal/Modal'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import React from 'react'

const CreateAutoEvaluationModal = () => {
  return (
    <Modal>
      <Formik>
        {({ isSubmitting, setFieldValue }) => (
          <Form className=" space-y-6">
            <div className="text-center">
              <h1 className="font-bold text-2xl text-stone-700">
                Nueva Autoevaluacion
              </h1>
              <p>A continuacion ingrese los datos de la autoevaluacion</p>
            </div>
            <div>
              <div className="sm:w-1/2 w-full px-3 mb-2">
                <label htmlFor="state" className="text-xs font-semibold px-1">
                  Estado
                </label>
                <div className="flex flex-col">
                  <Field
                    as="select"
                    id="state"
                    name="state"
                    className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    onChange={(event) => {
                      const value = event.target.value
                      setFieldValue('state', value)
                    }}
                  >
                    <option value="">Elige una opción</option>
                    <option value="En ejecución">Si</option>
                    <option value="Terminado">No</option>
                    <option value="Suspendido">No</option>
                  </Field>

                  <ErrorMessage
                    className="text-red-600 text-sm pt-1"
                    name="state"
                    component="div"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label
                    htmlFor="puntuationName"
                    className="text-xs font-semibold px-1"
                  >
                    Puntuación
                  </label>
                  <div className="flex flex-col">
                    <Field
                      type="text"
                      id="puntuation"
                      name="puntuation"
                      className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(event) => {
                        const value = event.target.value
                        const intValue = parseInt(value, 10)
                        setFieldValue('puntuation', intValue)
                      }}
                    />
                    <ErrorMessage
                      className="text-red-600 text-sm  py-1"
                      name="puntuation"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="autoEvaluationName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Periodo
                  </label>
                  <div className="mt-2">
                    <select
                      id="name"
                      name="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="yearName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Año
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="year"
                      id="first-name"
                      autoComplete="year"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="semestreName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Semestre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="semester"
                      id="semester"
                      autoComplete="year"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="startDateName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Inicio
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="smartDate"
                      id="smartDate"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="end
                    DateName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Fin
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="endDate"
                      id="endDate"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
