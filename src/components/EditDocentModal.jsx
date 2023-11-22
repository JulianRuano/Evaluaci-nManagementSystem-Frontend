import React from 'react'
import { docentUpdateSchema } from '../helpers/formikSchemas/docentUpdateSchema'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Modal } from 'antd'
import propTypes from 'prop-types'
import { LoadingOutlined } from '@ant-design/icons'

const EditDocentModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  educator,
  handleUpdateDocentMutation,
  docentUpdateMutation
}) => {
  return (
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
          firstName: educator.firstName,
          lastName: educator.lastName,
          role: educator.role,
          title: educator.title,
          identification: educator.identification,
          idType: educator.idType,
          email: educator.email,
          docentType: educator.docentType,
          isActive: educator.isActive
        }}
        validationSchema={docentUpdateSchema}
        onSubmit={handleUpdateDocentMutation}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className=" space-y-6">
            <div className="text-center">
              <h1 className="font-bold text-3xl text-gray-900 ">
                Editar docente
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
                  <label htmlFor="role" className="text-xs font-semibold px-1">
                    Rol
                  </label>
                  <div className="flex flex-col">
                    <Field
                      as="select"
                      type="text"
                      id="role"
                      name="role"
                      className="w-full pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    >
                      <option value="">Elige un rol</option>
                      <option value="Docente">Docente</option>
                      <option value="Coordinador">Coordinador</option>
                      <option value="Decano">Decano</option>
                    </Field>
                    <ErrorMessage
                      className="text-red-600 text-sm py-1"
                      name="role"
                      component="div"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="title" className="text-xs font-semibold px-1">
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
                  <label htmlFor="email" className="text-xs font-semibold px-1">
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
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Activo
                  </label>
                  <div className="flex flex-col">
                    <Field
                      as="select"
                      id="isActive"
                      name="isActive"
                      className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="jdoe@gmail.com"
                      onChange={(event) => {
                        const value = event.target.value
                        if (value === '') {
                          setFieldValue('isActive', '') // Cambia null a "" o undefined
                        } else {
                          const booleanValue = value === 'true'
                          setFieldValue('isActive', booleanValue)
                        }
                      }}
                    >
                      <option value="">Elige una opción</option>
                      <option value="true">Si</option>
                      <option value="false">No</option>
                    </Field>
                    <ErrorMessage
                      className="text-red-600 text-sm pt-1"
                      name="isActive"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label
                    htmlFor="docentType"
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
                    </Field>
                    <ErrorMessage
                      className="text-red-600 text-sm pt-1"
                      name="docentType"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full gap-3 mt-2 flex">
                <button
                  type="reset"
                  className={`block w-1/2 mx-auto  bg-red-400 hover:bg-red-500 text-white rounded-lg py-2  font-semibold `}
                  onClick={() => handleCancel()}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={docentUpdateMutation.isPending}
                  className={`block w-1/2 mx-auto  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg py-2  font-semibold ${
                    docentUpdateMutation.isPending ? 'opacity-50' : ''
                  }`}
                >
                  {docentUpdateMutation.isPending ? (
                    <p>
                      Guardando <LoadingOutlined />
                    </p>
                  ) : (
                    'Guardar'
                  )}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default EditDocentModal

EditDocentModal.propTypes = {
  isModalOpen: propTypes.bool.isRequired,
  handleOk: propTypes.func.isRequired,
  handleCancel: propTypes.func.isRequired,
  educator: propTypes.object.isRequired,
  handleUpdateDocentMutation: propTypes.func.isRequired,
  docentUpdateMutation: propTypes.object.isRequired
}
