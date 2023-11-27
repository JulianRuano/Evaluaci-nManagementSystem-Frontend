import { Modal, Select, Upload, Button } from 'antd'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import propTypes from 'prop-types'
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'

const ModalUpdateAutoEvalDocent = ({
  isModalOpen,
  handleOk,
  handleCancel,
  autoEvaluation,
  AutoEvalUpdateMutation,
  handleUpdateAutoEvalMutation,
  docentType // Asegúrate de pasar el tipo de docente como prop
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
            results: '',
            puntuation: ''
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
                    <label
                      htmlFor="activities"
                      className="text-xs font-semibold px-1"
                    >
                      Actividades realizadas
                    </label>
                    <div className="flex flex-col">
                      <TextArea
                        value={values.results}
                        onChange={(e) =>
                          setFieldValue('results', e.target.value)
                        }
                        placeholder="Describe las actividades realizadas"
                        autoSize={{
                          minRows: 1,
                          maxRows: 3
                        }}
                      />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full px-3 mb-2">
                    <label
                      htmlFor="evaluation"
                      className="text-xs font-semibold px-1"
                    >
                      Puntuación
                    </label>
                    <div className="flex flex-col">
                      <Field
                        type="number"
                        min="0"
                        max="100"
                        name="puntuation"
                        placeholder="Ingresa un valor entre 0 y 100"
                        className="w-full  pl-3 pr-3 py-0.5  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  {docentType === 'TC' || docentType === 'Planta' ? (
                    <div className="sm:w-1/2 w-full px-3 mb-2">
                      <label
                        htmlFor="file"
                        className="text-xs font-semibold px-1"
                      >
                        Cargar informe
                      </label>
                      <div className="flex flex-col">
                        <Upload
                          name="file"
                          beforeUpload={(file) => {
                            setFieldValue('file', file)
                            return false
                          }}
                          maxCount={1}
                        >
                          <Button icon={<UploadOutlined />}>
                            Click para cargar
                          </Button>
                        </Upload>
                      </div>
                    </div>
                  ) : null}
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

export default ModalUpdateAutoEvalDocent
ModalUpdateAutoEvalDocent.propTypes = {
  isModalOpen: propTypes.bool,
  handleOk: propTypes.func,
  handleCancel: propTypes.func,
  autoEvaluation: propTypes.object,
  AutoEvalUpdateMutation: propTypes.object,
  handleUpdateAutoEvalMutation: propTypes.func,
  docentType: propTypes.string // Asegúrate de agregar el tipo de docente a las propTypes
}
