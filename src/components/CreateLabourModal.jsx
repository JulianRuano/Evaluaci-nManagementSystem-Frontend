import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Modal } from 'antd'
import { labourSchema } from '../helpers/formikSchemas/labourSchema'
import propTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

const CreateLabourModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  handleCreateLabourMutation,
  labourMutation,
  labourTypesLoading,
  labourTypesError
}) => {
  const labourTypeData = useSelector((state) => state.labours.labourTypes)

  if (labourTypesLoading) {
    return <div>Cargando</div>
  }
  if (labourTypesError) {
    return <div>Error al cargar los tipos de labores</div>
  }
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
          nameWork: '',
          labourType: {
            idLabourType: '',
            code: '',
            description: '',
            labourTypeUid: ''
          },
          assignedHours: '',
          isActive: ''
        }}
        validationSchema={labourSchema}
        onSubmit={handleCreateLabourMutation}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className=" space-y-6">
            <div className="text-center">
              <h1 className="font-bold text-3xl text-gray-900 ">Nueva labor</h1>
              <p>A continuacion ingrese los datos de la labor</p>
            </div>
            <div>
              <div className="flex flex-wrap -mx-3">
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-semibold px-1"
                  >
                    Nombre de la labor
                  </label>
                  <div className="flex flex-col">
                    <Field
                      type="text"
                      id="nameWork"
                      name="nameWork"
                      className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Labor"
                    />
                    <ErrorMessage
                      className="text-red-600 text-sm  py-1"
                      name="nameWork"
                      component="div"
                    />
                  </div>
                </div>
                <Field
                  type="hidden"
                  id="labourTypeUid"
                  name="labourType.labourTypeUid"
                />

                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="lastName" className="text-xs font-semibold">
                    Horas asignadas
                  </label>
                  <div className="flex flex-col">
                    <Field
                      type="text"
                      id="assignedHours"
                      name="assignedHours"
                      className="w-full pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="2-18"
                      onChange={(event) => {
                        const value = event.target.value
                        const intValue = parseInt(value, 10)
                        setFieldValue('assignedHours', intValue)
                      }}
                    />
                    <ErrorMessage
                      className="text-red-600 text-sm py-1 "
                      name="assignedHours"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="role" className="text-xs font-semibold px-1">
                    Descripción
                  </label>
                  <div className="flex flex-col">
                    <Field
                      as="select"
                      id="labour"
                      name="labourType.description"
                      className="w-full pl-3 pr-3 py-0.5 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(event) => {
                        const value = event.target.value
                        if (value === '') {
                          setFieldValue('labourType.description', '')
                          setFieldValue('labourType.code', '')
                          setFieldValue('labourType.labourTypeUid', '')
                          setFieldValue('labourType.idLabourType', '')
                        } else {
                          const selectedLabourType = labourTypeData.find(
                            (labourType) => labourType.description === value
                          )
                          setFieldValue(
                            'labourType.description',
                            selectedLabourType.description
                          )
                          setFieldValue(
                            'labourType.code',
                            selectedLabourType.code
                          )
                          setFieldValue(
                            'labourType.labourTypeUid',
                            selectedLabourType.uid
                          )
                          setFieldValue(
                            'labourType.idLabourType',
                            selectedLabourType.idLabourType
                          )
                        }
                      }}
                    >
                      <option value="">Elige una labor</option>
                      {labourTypeData.map((labourType) => (
                        <option
                          key={labourType.idlabor}
                          value={labourType.description}
                        >
                          {labourType.description}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      className="text-red-600 text-sm py-1"
                      name="labourType.description"
                      component="div"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="title" className="text-xs font-semibold px-1">
                    Código
                  </label>
                  <div className="flex flex-col">
                    <Field
                      type="text"
                      id="codigo"
                      name="labourType.code"
                      disabled
                      className="w-full pl-3 pr-3 py-0.5 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="id" className="text-xs font-semibold px-1">
                    ID
                  </label>
                  <div className="flex flex-col">
                    <Field
                      type="text"
                      id="idlabor"
                      name="labourType.idLabourType"
                      disabled
                      className="w-full pl-3 pr-3 py-0.5 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label
                    htmlFor="idType"
                    className="text-xs font-semibold px-1"
                  >
                    Activa
                  </label>
                  <div className="flex flex-col">
                    <Field
                      as="select"
                      id="isActive"
                      name="isActive"
                      className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      onChange={(event) => {
                        const value = event.target.value
                        const booleanValue = value === 'true'
                        setFieldValue('isActive', booleanValue)
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

              <div className="w-full mt-2">
                <button
                  type="submit"
                  disabled={labourMutation.isPending}
                  className={`block w-full max-w-xs mx-auto  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg py-2  font-semibold ${
                    labourMutation.isPending ? 'opacity-50' : ''
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
  )
}

export default CreateLabourModal
CreateLabourModal.propTypes = {
  isModalOpen: propTypes.bool.isRequired,
  handleOk: propTypes.func.isRequired,
  handleCancel: propTypes.func.isRequired,
  handleCreateLabourMutation: propTypes.func.isRequired,
  labourMutation: propTypes.object.isRequired,
  labourTypesLoading: propTypes.bool.isRequired,
  labourTypesError: propTypes.bool.isRequired
}
