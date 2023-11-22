import React, { useEffect } from 'react'
import { useGetLabours } from '../hooks/queries/useGetLabours'
import { useDispatch } from 'react-redux'
import { setLabours } from '../redux/slices/labourSlice'

import { Modal } from 'antd'
import { Form, Formik } from 'formik'
import propTypes from 'prop-types'
import SelectLaboursInput from './SelectLaboursInput'
import { LoadingOutlined } from '@ant-design/icons'
import getValidLaboursDocentType from '../helpers/getValidLaboursDocentType'

const AssignLabourModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  handleAssignLabours,
  labourAssignMutation,
  educator: { uid, labours, docentType }
}) => {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useGetLabours()

  useEffect(() => {
    if (data) {
      dispatch(setLabours(labours))
    }
  }, [data])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  const validLaboursForDocentType = getValidLaboursDocentType(data, docentType)
  const uidAndLabourName = validLaboursForDocentType.map((labor) => ({
    uid: labor.uid,
    nameWork: labor.nameWork
  }))
  const labourIds = labours.map((labour) => labour.uid)
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
      width={450}
    >
      <Formik
        initialValues={{
          uid,
          labours
        }}
        // validationSchema={labourSchema}
        onSubmit={handleAssignLabours}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className=" space-y-6">
            <div className="text-center">
              <h1 className="font-bold text-3xl text-gray-900 ">
                Asignar labores
              </h1>
              <p className="pt-3">
                A continuacion eliga las labores que se asignarán al docente
                <p className="text-zinc-400">
                  (sólo se mostrarán las que cumplen con el tipo de docente)
                </p>
              </p>
            </div>
            <div>
              <div className="flex flex-wrap -mx-3 pb-5">
                <div className=" w-full px-3 mb-2">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-semibold px-1"
                  >
                    Nombres de las labores
                  </label>
                  <div className="flex flex-col">
                    <SelectLaboursInput
                      data={uidAndLabourName}
                      setFieldValue={setFieldValue}
                      initialSelectedItems={labourIds}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mt-2">
                <button
                  type="submit"
                  disabled={labourAssignMutation.isPending}
                  className={`block w-full max-w-xs mx-auto  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg py-2  font-semibold ${
                    labourAssignMutation.isPending ? 'opacity-50' : ''
                  }`}
                >
                  {labourAssignMutation.isPending ? (
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

export default AssignLabourModal

AssignLabourModal.propTypes = {
  isModalOpen: propTypes.bool.isRequired,
  handleOk: propTypes.func.isRequired,
  handleCancel: propTypes.func.isRequired,
  handleAssignLabours: propTypes.func.isRequired,
  labourAssignMutation: propTypes.object.isRequired,
  educator: propTypes.object.isRequired
}
