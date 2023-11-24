import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { loginFunction } from '../../hooks/mutations/useLogin'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import { loginSchema } from '../../helpers/formikSchemas/loginSchema'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoadingOutlined } from '@ant-design/icons'

const LoginScreen = () => {
  const navigate = useNavigate()
  const notify = (message) =>
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'light'
    })
  const dispatch = useDispatch()

  const loginMutation = useMutation({
    mutationFn: loginFunction,
    onSuccess: (data) => {
      console.log(data)
      dispatch(login(data.payload))
      navigate('/')
    },
    onError: (error) => {
      console.log(error)
      notify(error.response.data.message)
    }
  })

  const handleLoginMutation = (values) => {
    loginMutation.mutate(values)
  }

  return (
    <div className="min-w-screen min-h-screen flex shadow-lg">
      <div className="bg-gray-100 text-gray-500  shadow-xl w-full overflow-hidden  relative">
        <div className="md:flex w-full ">
          <div
            className="hidden md:block w-1/2 py-10 px-10  min-h-screen blur-on-load"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dzxhdnqm4/image/upload/v1700194510/edificio_unicauca_pmgjxk.avif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="w-full md:w-1/2 py-10 px-10">
            <Formik
              initialValues={{
                email: 'julian@singlecode.com',
                password: '123456'
              }}
              validationSchema={loginSchema}
              onSubmit={handleLoginMutation}
            >
              {({ isSubmitting }) => (
                <Form className="mt-8 space-y-6">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900 ">
                      Inicio de Sesión
                    </h1>
                    <p>Bienvenido a la plataforma de gestión académica</p>
                  </div>
                  <div>
                    <div className="flex">
                      <div className="w-full mb-5">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold px-1"
                        >
                          Correo electrónico
                        </label>
                        <div className="flex flex-col">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="john@example.com"
                          />
                          <ErrorMessage
                            className="text-red-600 text-sm pl-2 py-1"
                            name="email"
                            component="div"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex ">
                      <div className="w-full mb-5">
                        <label
                          htmlFor="password"
                          className="text-xs font-semibold px-1"
                        >
                          Contraseña
                        </label>
                        <div className="flex flex-col">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                          </div>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Contraseña"
                          />
                          <ErrorMessage
                            className="text-red-600 text-sm pl-2 pt-1"
                            name="password"
                            component="div"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <button
                          type="submit"
                          disabled={loginMutation.isPending}
                          className={`block w-full max-w-xs mx-auto  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg py-2  font-semibold ${
                            loginMutation.isPending ? 'opacity-50' : ''
                          }`}
                        >
                          {loginMutation.isPending ? (
                            <p>
                              Iniciando sesión <LoadingOutlined />
                            </p>
                          ) : (
                            'Inciar sesión'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
