import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { loginFunction } from '../../hooks/mutations/useLogin'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import { loginSchema } from '../../helpers/schemas/loginSchema'
import { useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar'

const LoginScreen = () => {
  const [open, setOpen] = useState(false)
  const [messageSnackbar, setMessageSnackbar] = useState('second')
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const navigate = useNavigate()
  const loginMutation = useMutation({
    mutationFn: loginFunction,
    onSuccess: (data) => {
      console.log(data)
      setOpen(true)
      navigate('/')
    },
    onError: (error) => {
      console.log(error)
      setMessageSnackbar(error.message)
      setOpen(true)
    }
  })

  const handleLoginMutation = (values) => {
    loginMutation.mutate(values)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
        </div>
        <Formik
          initialValues={{ email: 'test@example.com', password: '123456' }}
          validationSchema={loginSchema}
          onSubmit={handleLoginMutation}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Correo electrónico
                  </label>
                  <Field
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Correo electrónico"
                  />
                  <ErrorMessage
                    className="text-red-600 text-sm pl-2 py-1"
                    name="email"
                    component="div"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                  />
                  <ErrorMessage
                    className="text-red-600 text-sm pl-2 pt-1"
                    name="password"
                    component="div"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Recordarme
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loginMutation.isPending}
                  className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    loginMutation.isPending ? 'opacity-50' : ''
                  }`}
                >
                  Iniciar sesión
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={1700}
        onClose={handleClose}
        message={messageSnackbar}
      />
    </div>
  )
}

export default LoginScreen
