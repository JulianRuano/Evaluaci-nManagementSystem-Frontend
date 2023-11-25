import Modal from 'antd/es/modal/Modal'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import React from 'react'
import propTypes from 'prop-types'
import { autoEvaluationSchema } from '../helpers/formikSchemas/autoEvaluationSchema'
import { LoadingOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd'
import SelectLabourAutoEval from './SelectLabourAutoEval'

const AssignAutoEvaluationModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  handleAssignAutoEval,
  assignAutoEvalMutation,
  docentLabours
}) => {
  const uidAndLabourName = docentLabours[0].map((labor) => ({
    uid: labor.uid,
    nameWork: labor.nameWork
  }))

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
          period: {
            name: '',
            year: '',
            semester: '',
            startDate: '',
            endDate: ''
          },
          evaluated: '',
          act: '',
          labour: ''
        }}
        validationSchema={autoEvaluationSchema}
        onSubmit={handleAssignAutoEval}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className=" space-y-6">
            <div className="text-center">
              <h1 className="font-bold text-2xl text-stone-700 ">
                Asignar Autoevaluación
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
                    Nombre labor
                  </label>
                  <div className="flex flex-col">
                    <SelectLabourAutoEval
                      data={uidAndLabourName}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="title" className="text-xs font-semibold px-1">
                    Fecha de inicio
                  </label>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <DatePicker />
                      <ErrorMessage
                        className="text-red-600 text-sm  pt-1"
                        name="startDate"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="title" className="text-xs font-semibold px-1">
                    Fecha de fin
                  </label>

                  <div className="flex flex-col">
                    <DatePicker
                      onChange={(date, dateString) => {
                        setFieldValue('endDate', date.toDate())
                      }}
                    />
                    <ErrorMessage
                      className="text-red-600 text-sm  pt-1"
                      name="endDate"
                      component="div"
                    />
                  </div>
                </div>

                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label
                    htmlFor="period.year"
                    className="text-xs font-semibold px-1"
                  >
                    Año
                  </label>
                  <div className="flex flex-col">
                    <Field
                      type="text"
                      id="period.year"
                      name="period.year"
                      onChange={(event) => {
                        const value = event.target.value
                        if (value === '') {
                          setFieldValue('period.year', null)
                        } else {
                          const intValue = parseInt(value, 10)
                          if (!isNaN(intValue)) {
                            setFieldValue('period.year', intValue)
                          }
                        }
                      }}
                      className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="2023"
                    />
                    <ErrorMessage
                      className="text-red-600 text-sm  pt-1"
                      name="period.year"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="id" className="text-xs font-semibold px-1">
                    Acto
                  </label>
                  <div className="flex flex-col">
                    <Field
                      as="select"
                      id="act"
                      name="act"
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
                      name="act"
                      component="div"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 w-full px-3 mb-2">
                  <label htmlFor="id" className="text-xs font-semibold px-1">
                    Semestre
                  </label>
                  <div className="flex flex-col">
                    <Field
                      as="select"
                      id="period.semester"
                      name="period.semester"
                      className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    >
                      <option value="">Elige un semestre</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Field>
                    <ErrorMessage
                      className="text-red-600 text-sm py-1"
                      name="period.semester"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3"></div>
              <div className="w-full mt-2">
                <button
                  type="submit"
                  disabled={assignAutoEvalMutation.isPending}
                  className={`block w-full max-w-xs mx-auto  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg py-2  font-semibold ${
                    assignAutoEvalMutation.isPending ? 'opacity-50' : ''
                  }`}
                >
                  {assignAutoEvalMutation.isPending ? (
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
  )
}
export default AssignAutoEvaluationModal
AssignAutoEvaluationModal.propTypes = {
  isModalOpen: propTypes.bool.isRequired,
  handleOk: propTypes.func.isRequired,
  handleCancel: propTypes.func.isRequired,
  handleAssignAutoEval: propTypes.func.isRequired,
  assignAutoEvalMutation: propTypes.object.isRequired,
  docentLabours: propTypes.array.isRequired
}
