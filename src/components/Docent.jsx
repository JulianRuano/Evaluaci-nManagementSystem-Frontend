import React, { useEffect, useState } from 'react'
import { Modal, Skeleton } from 'antd'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import { docentSchema } from '../helpers/formikSchemas/docentSchema'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createDocentFunction } from '../hooks/mutations/useCreateDocent'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DocentTable from './tables/DocentTable'
import { useGetEducators } from '../hooks/queries/useGetEducators'
import { setEducators } from '../redux/slices/educatorSlice'
import { useDispatch, useSelector } from 'react-redux'
import { startHandleLogout } from './actions/auth'
import 'react-datepicker/dist/react-datepicker.css'
import { LoadingOutlined } from '@ant-design/icons'

const Docent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [values, setValues] = useState(new Date())
  const role = useSelector((state) => state.auth.user.role)

  useEffect(() => {
    console.log(values)
  }, [values, setValues])

  const dispatch = useDispatch()
  const { data, isLoading, isError } = useGetEducators('docente')

  useEffect(() => {
    dispatch(setEducators(data))
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

  const docentMutation = useMutation({
    mutationFn: createDocentFunction,
    onSuccess: (data) => {
      queryClient.invalidateQueries('docents')
      setIsModalOpen(false)
      notifySuccess('Docente creado con éxito')
    },
    onError: async (error) => {
      if (error?.response?.status === 401) {
        await dispatch(startHandleLogout())
        return
      }

      notifyError(error.response.data.message)
    }
  })

  const handleCreateDocentMutation = (values, actions) => {
    const actionsRef = actions

    docentMutation.mutate(values, {
      onSuccess: () => {
        actionsRef.resetForm({
          firstName: '',
          lastName: '',
          role: '',
          title: '',
          identification: '',
          idType: '',
          email: '',
          password: '',
          docentType: '',
          labour: ''
        })
      }
    })
  }

  if (isLoading)
    return (
      <div className="px-5 py-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>
            <Skeleton active />
            <br />
          </div>
        ))}
      </div>
    )

  if (isError) return <p>Ha ocurrido un error</p>

  return (
    <div className="pt-6  text-center">
      <div className="flex justify-between px-2 mb-2  md:pl-12">
        <h1 className="font-semibold pt-1 text-2xl text-stone-700">Docentes</h1>
        {role === 'Coordinador' ? (
          <div>
            <button
              className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-2 mr-5 font-semibold text-sm"
              onClick={showModal}
            >
              Crear nuevo
            </button>
          </div>
        ) : null}
      </div>

      <DocentTable educators={data} />
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
            firstName: '',
            lastName: '',
            title: '',
            identification: '',
            idType: '',
            email: '',
            password: '',
            docentType: ''
          }}
          validationSchema={docentSchema}
          onSubmit={handleCreateDocentMutation}
        >
          {({ isSubmitting }) => (
            <Form className=" space-y-6">
              <div className="text-center">
                <h1 className="font-bold text-2xl text-stone-700 ">
                  Nuevo docente
                </h1>
                <p>A continuacion ingrese los datos del docente</p>
              </div>
              <div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold px-1"
                    >
                      Nombres
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Juan Luis"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm  py-1"
                        name="firstName"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label htmlFor="lastName" className="text-xs font-semibold">
                      Apellidos
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Gonzales"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm py-1 "
                        name="lastName"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="role"
                      className="text-xs font-semibold px-1"
                    >
                      Tipo docente
                    </label>
                    <div className="flex flex-col">
                      <Field
                        as="select"
                        id="docentType"
                        name="docentType"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="jdoe@gmail.com"
                      >
                        <option value="">Elige un tipo</option>
                        <option value="Tiempo Completo">Tiempo completo</option>
                        <option value="Planta">Planta</option>
                        <option value="Cátedra">Cátedra</option>
                        <option value="Cátedra">Otro</option>
                      </Field>
                      <ErrorMessage
                        className="text-red-600 text-sm py-1"
                        name="docentType"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="title"
                      className="text-xs font-semibold px-1"
                    >
                      Título
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="title"
                        name="title"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Magister"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm  pt-1"
                        name="title"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label htmlFor="id" className="text-xs font-semibold px-1">
                      Identificación
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="identification"
                        name="identification"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="100986587"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm  pt-1"
                        name="identification"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="idType"
                      className="text-xs font-semibold px-1"
                    >
                      Tipo de identificación
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="idType"
                        name="idType"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="CC"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm pt-1"
                        name="idType"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold px-1"
                    >
                      Email
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="jdoe@gmail.com"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm pt-1"
                        name="email"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold px-1"
                    >
                      Contraseña
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="password"
                        name="password"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="123456"
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm pt-1"
                        name="password"
                        component="div"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full mt-2">
                  <button
                    type="submit"
                    disabled={docentMutation.isPending}
                    className={`block w-full max-w-xs mx-auto  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg py-2  font-semibold ${
                      docentMutation.isPending ? 'opacity-50' : ''
                    }`}
                  >
                    {docentMutation.isPending ? (
                      <p>
                        Guardando <LoadingOutlined />
                      </p>
                    ) : (
                      'Agregar'
                    )}
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

export default Docent
