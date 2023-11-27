import { Modal, Select } from 'antd'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import propTypes from 'prop-types'
import { LoadingOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'

const AutoEvalInfoModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  autoEvaluation,
  AutoEvalUpdateMutation,
  handleUpdateAutoEvalMutation
}) => {
  return (
    <div>
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
        width={600}
        centered={true}
      >
        <Formik
          initialValues={{
            state: autoEvaluation.state,
            observation: ''
          }}
          onSubmit={handleUpdateAutoEvalMutation}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className=" space-y-6">
              <div className="text-center">
                <h1 className="font-bold text-2xl text-stone-700">
                  Actualizar estado
                </h1>
                <p>Aquí puede actualizar el estado de la autoevaluación</p>
              </div>
              <div className=" ">
                <div
                  className="flex flex-wrap   "
                  style={{ maxWidth: '600px', margin: '0 auto' }}
                >
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label htmlFor="id" className="text-xs font-semibold px-1">
                      Observación (opcional)
                    </label>
                    <div className="flex flex-col">
                      <TextArea
                        value={values.observation}
                        onChange={(e) =>
                          setFieldValue('observation', e.target.value)
                        }
                        placeholder="Escribe una observación"
                        autoSize={{
                          minRows: 1,
                          maxRows: 3
                        }}
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="idType"
                      className="text-xs font-semibold px-1"
                    >
                      Estado
                    </label>
                    <div className="flex flex-col">
                      <Select
                        defaultValue={values.state}
                        style={{
                          width: 220
                        }}
                        onChange={(value) => setFieldValue('state', value)}
                        options={[
                          {
                            value: 'En ejecución',
                            label: 'En ejecución'
                          },
                          {
                            value: 'Terminado',
                            label: 'Terminado'
                          },
                          {
                            value: 'Suspendido',
                            label: 'Suspendido'
                          }
                        ]}
                      />

                      <ErrorMessage
                        className="text-red-600 text-sm pt-1"
                        name="isActive"
                        component="div"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-60 mx-auto gap-3 mt-2 flex">
                  <button
                    type="reset"
                    className={`block w-1/2 mx-auto  bg-red-400 hover:bg-red-500 text-white rounded-lg py-2  font-semibold `}
                    onClick={() => handleCancel()}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={AutoEvalUpdateMutation.isPending}
                    className={`block w-1/2 mx-auto  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg py-2  font-semibold ${
                      AutoEvalUpdateMutation.isPending ? 'opacity-50' : ''
                    }`}
                  >
                    {AutoEvalUpdateMutation.isPending ? (
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
    </div>
  )
}

export default AutoEvalInfoModal
AutoEvalInfoModal.propTypes = {
  isModalOpen: propTypes.bool,
  handleOk: propTypes.func,
  handleCancel: propTypes.func,
  autoEvaluation: propTypes.object,
  AutoEvalUpdateMutation: propTypes.object,
  handleUpdateAutoEvalMutation: propTypes.func
}
