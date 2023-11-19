import React, { useState } from 'react'
import { Modal, Skeleton } from 'antd'
import { useDispatch } from 'react-redux'
import { createLabourFunction } from '../hooks/mutations/useCreateLabour'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import { labourSchema } from '../helpers/formikSchemas/labourSchema'
import LabourTable from './tables/LabourTable'

import { useGetLabours } from '../hooks/queries/useGetLabours'
import { startHandleLogout } from './actions/auth'

const Labour = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useGetLabours()

  const queryClient = useQueryClient()
  const notifySuccess = (message) =>
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false
    })
  const notifyError = (message) =>
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false
    })
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const labourMutation = useMutation({
    mutationFn: createLabourFunction,
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries('docents')
      // dispatch(addLabours(data.payload))
      notifySuccess('Labor creado con éxito')
    },
    onError: async (error) => {
      if (error?.response?.status === 401) {
        await dispatch(startHandleLogout())
        return
      }
      console.log(error)
      notifyError(error.response.data.message)
    }
  })
  const handleCreateLabourMutation = (values, actions) => {
    const actionsRef = actions
    labourMutation.mutate(values, {
      onSuccess: () => {
        actionsRef.resetForm({
          nameWork: '',
          LabourType: '',
          code: '',
          description: '',
          assignedHours: '',
          isActive: ''
        })
      }
    })
  }
  if (isLoading)
    return (
      <div className="px-5 py-5">
        <Skeleton active />
        <br />
        <Skeleton active />
        <br />
        <Skeleton active />
      </div>
    )
  if (isError) return <p>Ha ocurrido un error</p>
  return (
    <div className="pt-4 text-center">
      <div className="flex justify-between px-10 container">
        <h1 className="font-semibold pt-1 text-xl">Docentes</h1>
        <button
          className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-2 font-semibold"
          onClick={showModal}
        >
          Crear nuevo
        </button>
      </div>
      <LabourTable labours={data} />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          hidden: true
        }}
        cancelButtonProps={{
          hidden: true
        }}
        width={800}
        centered={true}
      >
        <Formik
          initialValues={{}}
          validationSchema={labourSchema}
          onSubmit={handleCreateLabourMutation}
        >
          {({ isSubmitting }) => (
            <Form className=" space-y-6">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 ">
                  Nueva Labor
                </h1>
                <p>A continuacion ingrese los datos de la Labor</p>
              </div>

              <div className="space-y-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="namework"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nombre Labor
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="nameWork"
                        id="nameWork"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm pl-2 py-1"
                        name="nameWork"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="LabourType"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ID Labor
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        type="text"
                        id="idLabourType"
                        name="idLabourType"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>1</option>
                        <option>2</option>
                      </Field>
                      <ErrorMessage
                        className="text-red-600 text-sm pl-2 py-1"
                        name="idLabourType"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lblCode"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Codigo Labor
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="code"
                        id="code"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm pl-2 pt-1"
                        name="code"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Horas Asignadas
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="assignedHours"
                        id="assignedHours"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm pl-2 pt-1"
                        name="assignedHours"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="isActive"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Activo
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        id="isActive"
                        name="isActive"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>Activar</option>
                        <option>Desactivar</option>
                      </Field>
                      <ErrorMessage
                        className="text-red-600 text-sm pl-2 pt-1"
                        name="isActive"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="Descripción"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Descripción
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button
                        type="submit"
                        disabled={labourMutation.isPending}
                        className={`block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-3 py-3 font-semibold ${
                          labourMutation.isPending ? 'opacity-50' : ''
                        }`}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

export default Labour
