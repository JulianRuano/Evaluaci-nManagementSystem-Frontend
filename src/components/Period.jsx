import React, { useEffect, useState } from 'react'
import { Modal, Skeleton } from 'antd'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { startHandleLogout } from './actions/auth'
import { useGetPeriods } from '../hooks/queries/useGetPeriod'
import { setPeriods } from '../redux/slices/periodSlice'
import { createPeriodFunction } from '../hooks/mutations/useCreatePeriod'
import PeriodTable from './tables/PeriodTable'
import { periodSchema } from '../helpers/formikSchemas/periodSchema'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Period = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useGetPeriods()
  useEffect(() => {
    dispatch(setPeriods(data))
  }, [data])

  const queryClient = useQueryClient()
  const notifySuccess = (message) =>
    toast.success(message, {
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
  const periodMutation = useMutation({
    mutationFn: createPeriodFunction,
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries('periods')
      // dispatch(addEducators(data.payload))
      notifySuccess('Periodo creado con éxito')
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

  const handleCreatePeriodMutation = (values, actions) => {
    const actionsRef = actions

    periodMutation.mutate(values, {
      onSuccess: () => {
        actionsRef.resetForm({
          name: '',
          year: '',
          semester: '',
          startDate: '',
          endDate: ''
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
      <div className="flex justify-between px-10 container pb-5">
        <h1 className="font-semibold pt-1 md:pl-12 text-2xl text-stone-700">
          Periodos
        </h1>
        <button
          className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-2 font-semibold text-sm"
          onClick={showModal}
        >
          Crear nuevo
        </button>
      </div>
      <PeriodTable periods={data} />

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
          initialValues={{
            name: '',
            year: '',
            semester: '',
            startDate: new Date(),
            endDate: new Date()
          }}
          validationSchema={periodSchema}
          onSubmit={handleCreatePeriodMutation}
        >
          {({ values, setFieldValue }) => (
            <Form className=" space-y-6">
              <div className="text-center">
                <h1 className="font-bold text-2xl text-stone-700 ">
                  Nuevo periodo
                </h1>
                <p>A continuacion ingrese los datos del periodo</p>
              </div>
              <div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold px-1"
                    >
                      Nombre
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Periodo"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm  py-1"
                        name="name"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label htmlFor="lastName" className="text-xs font-semibold">
                      Año
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="year"
                        name="year"
                        className="w-full pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="2023"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm py-1 "
                        name="year"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="semester"
                      className="text-xs font-semibold px-1"
                    >
                      Semestre
                    </label>
                    <div className="flex flex-col">
                      <Field
                        as="select"
                        type="text"
                        id="semester"
                        name="semester"
                        onChange={(event) => {
                          const value = event.target.value
                          const intValue = parseInt(value, 10)
                          setFieldValue('semester', intValue)
                        }}
                        className="w-full pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      >
                        <option value="">Elige un semestre</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </Field>
                      <ErrorMessage
                        className="text-red-600 text-sm py-1"
                        name="semester"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="title"
                      className="text-xs font-semibold px-1"
                    >
                      Fecha de inicio
                    </label>
                    .startDate
                    <div className="flex flex-col">
                      <DatePicker
                        onChange={(value) =>
                          setFieldValue('startDate', new Date(value))
                        }
                        selected={values.startDate}
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm  pt-1"
                        name="startDate"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="endDate"
                      className="text-xs font-semibold px-1"
                    >
                      Fecha de fin
                    </label>
                    <div className="flex flex-col">
                      <DatePicker
                        onChange={(value) =>
                          setFieldValue('endDate', new Date(value))
                        }
                        selected={values.endDate}
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm  pt-1"
                        name="endDate"
                        component="div"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full mt-2">
                  <button
                    type="submit"
                    disabled={periodMutation.isPending}
                    className={`block w-full max-w-xs mx-auto  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg py-2  font-semibold ${
                      periodMutation.isPending ? 'opacity-50' : ''
                    }`}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

export default Period
