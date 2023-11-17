import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { loginFunction } from '../../hooks/mutations/useLogin'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import { loginSchema } from '../../helpers/schemas/loginSchema'
import { useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlice'

const LoginScreen = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const [messageSnackbar, setMessageSnackbar] = useState('second')
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const loginMutation = useMutation({
    mutationFn: loginFunction,
    onSuccess: (data) => {
      console.log(data)
      dispatch(login(data.payload))
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
    // <div classNameNameName="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    //   <div classNameNameName="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 classNameNameName="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //         Iniciar sesión
    //       </h2>
    //     </div>
    //     <Formik
    //       initialValues={{ email: 'george@email.com', password: 'password123' }}
    //       validationSchema={loginSchema}
    //       onSubmit={handleLoginMutation}
    //     >
    //       {({ isSubmitting }) => (
    //         <Form classNameNameName="mt-8 space-y-6">
    //           <div classNameNameName="rounded-md shadow-sm -space-y-px">
    //             <div>
    //               <label htmlFor="email" classNameNameName="sr-only">
    //                 Correo electrónico
    //               </label>
    //               <Field
    //                 id="email"
    //                 name="email"
    //                 autoComplete="email"
    //                 classNameNameName="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //                 placeholder="Correo electrónico"
    //               />
    //               <ErrorMessage
    //                 classNameNameName="text-red-600 text-sm pl-2 py-1"
    //                 name="email"
    //                 component="div"
    //               />
    //             </div>
    //             <div>
    //               <label htmlFor="password" classNameNameName="sr-only">
    //                 Contraseña
    //               </label>
    //               <Field
    //                 id="password"
    //                 name="password"
    //                 type="password"
    //                 autoComplete="current-password"
    //                 classNameNameName="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //                 placeholder="Contraseña"
    //               />
    //               <ErrorMessage
    //                 classNameNameName="text-red-600 text-sm pl-2 pt-1"
    //                 name="password"
    //                 component="div"
    //               />
    //             </div>
    //           </div>
    //           <div classNameNameName="flex items-center justify-between">
    //             <div classNameNameName="flex items-center">
    //               <Field
    //                 id="remember_me"
    //                 name="remember_me"
    //                 type="checkbox"
    //                 classNameNameName="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    //               />
    //               <label
    //                 htmlFor="remember_me"
    //                 classNameNameName="ml-2 block text-sm text-gray-900"
    //               >
    //                 Recordarme
    //               </label>
    //             </div>
    //             <div classNameNameName="text-sm">
    //               <a
    //                 href="#"
    //                 classNameNameName="font-medium text-indigo-600 hover:text-indigo-500"
    //               >
    //                 ¿Olvidaste tu contraseña?
    //               </a>
    //             </div>
    //           </div>
    //           <div>
    //             <button
    //               type="submit"
    //               disabled={loginMutation.isPending}
    //               classNameNameName={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
    //                 loginMutation.isPending ? 'opacity-50' : ''
    //               }`}
    //             >
    //               Iniciar sesión
    //             </button>
    //           </div>
    //         </Form>
    //       )}
    //     </Formik>
    //   </div>
    //   <Snackbar
    //     open={open}
    //     autoHideDuration={1700}
    //     onClose={handleClose}
    //     message={messageSnackbar}
    //   />
    // </div>
    <div
      className="min-w-screen min-h-screen flex flex-col justify-center items-center shadow-lg px-5 py-5 "
      style={{ display: 'none' }}
    >
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden mx-auto relative"
        style={{ maxWidth: '1000px' }}
      >
        <div className="md:flex w-full">
          <div
            className="hidden md:block w-1/2 py-10 px-10 blur-on-load"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dzxhdnqm4/image/upload/v1700194510/edificio_unicauca_pmgjxk.avif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <form action="#" method="post">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 ">
                  Iniciar Sesión
                </h1>
                <p>Bienvenido a la plataforma de gestión académica</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Contraseña
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
