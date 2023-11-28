import Modal from 'antd/es/modal/Modal'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import React, { useRef } from 'react'
import propTypes from 'prop-types'
import { autoEvaluationSchema } from '../helpers/formikSchemas/autoEvaluationSchema'
import { LoadingOutlined } from '@ant-design/icons'
import { DatePicker, Skeleton } from 'antd'
import SelectLabourAutoEval from './SelectLabourAutoEval'
import { useGetPeriods } from '../hooks/queries/useGetPeriod'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SelectPeriodAutoEval from './SelectPeriodAutoEval'
import { toast } from 'react-toastify'

const AssignAutoEvaluationModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  handleAssignAutoEval,
  assignAutoEvalMutation,
  docentLabours,
  setIsAssignAutoEvalModalOpen
}) => {
  const { data: periods, isLoading, isError } = useGetPeriods()
  const uidAndLabourName = docentLabours.map((labor) => ({
    uid: labor.uid,
    nameWork: labor.nameWork
  }))
  const idAndPeriodName = periods?.map((period) => ({
    id: period.id,
    name: period.name
  }))
  const params = useParams()

  const { id: docentId } = params
  if (isError) {
    setIsAssignAutoEvalModalOpen(false)
    toast.error('Ha ocurrido un error', {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false
    })
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
      {isLoading ? (
        <div className="px-5 py-5">
          <Skeleton active />
          <br />
          <Skeleton active />
          <br />
          <Skeleton active />
        </div>
      ) : (
        <Formik
          initialValues={{
            evaluated: docentId,
            periodId: '',
            periodName: '',
            labourName: '',
            act: null,
            labour: '',
            startDate: null,
            endDate: null,
            semester: null,
            year: null
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
                <p>A continuacion ingrese los datos de la autoevaluación</p>
              </div>
              <div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold px-1"
                    >
                      Labor
                    </label>
                    <div className="flex flex-col">
                      <SelectLabourAutoEval
                        data={uidAndLabourName}
                        setFieldValue={setFieldValue}
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm pt-1"
                        name="labourName"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold px-1"
                    >
                      Periodo
                    </label>
                    <div className="flex flex-col">
                      <SelectPeriodAutoEval
                        data={idAndPeriodName}
                        setFieldValue={setFieldValue}
                        periods={periods}
                      />
                      <ErrorMessage
                        className="text-red-600 text-sm pt-1"
                        name="periodName"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label htmlFor="id" className="text-xs font-semibold px-1">
                      Fecha de inicio
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="startDate"
                        name="startDate"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label htmlFor="id" className="text-xs font-semibold px-1">
                      Fecha de fin
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="endDate"
                        name="endDate"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label htmlFor="id" className="text-xs font-semibold px-1">
                      Semestre
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="semester"
                        name="semester"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label htmlFor="id" className="text-xs font-semibold px-1">
                      Año
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="text"
                        id="year"
                        name="year"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        disabled
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
                          setFieldValue('act', booleanValue)
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
                </div>
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
      )}
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
  docentLabours: propTypes.array.isRequired,
  setIsAssignAutoEvalModalOpen: propTypes.func.isRequired
}
