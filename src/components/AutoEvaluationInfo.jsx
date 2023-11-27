import React, { useState } from 'react'
import { Descriptions, Skeleton } from 'antd'
import { useGetAutoEvaluationById } from '../hooks/queries/useGetAllAutoEvaluations'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import RecordTag from './shared/RecordTag'
import AutoEvalInfoModal from './AutoEvalInfoModal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { startHandleLogout } from './actions/auth'
import { updateAutoEvalFunction } from '../hooks/mutations/useUpdateAutoEval'
const AutoEvaluationInfo = () => {
  const { id } = useParams()
  const {
    data: autoEvaluation,
    isLoading,
    isError,
    error
  } = useGetAutoEvaluationById(id)
  console.log(autoEvaluation)
  const notifySuccess = (message) =>
    toast.success(message, {
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: false
    })
  const notifyError = (message) =>
    toast.error(message, {
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: false
    })
  const [isEditAutoEvalModalOpen, setIsEditAutoEvalModalOpen] = useState(false)
  const showModal = () => {
    setIsEditAutoEvalModalOpen(true)
  }
  const handleOk = () => {
    setIsEditAutoEvalModalOpen(false)
  }

  const handleCancel = () => {
    setIsEditAutoEvalModalOpen(false)
  }
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const AutoEvalUpdateMutation = useMutation({
    mutationFn: updateAutoEvalFunction,
    onSuccess: (data) => {
      queryClient.invalidateQueries('autoEvaluation')
      // dispatch(addEducators(data.payload))
      notifySuccess('Autoevaluación actualizada con éxito')
      setIsEditAutoEvalModalOpen(false)
    },
    onError: async (error) => {
      if (error?.response?.status === 401) {
        await dispatch(startHandleLogout())
        return
      }
      console.log(error)
      notifyError('Ha ocurrido un error al actualizar la autoevaluación')
    }
  })

  const handleUpdateAutoEvalMutation = (values) => {
    AutoEvalUpdateMutation.mutate({ values, id })
  }
  if (isLoading) {
    return (
      <div className="m-5">
        <Skeleton active={true} />
        <br />
        <Skeleton active={true} />
        <br />
        <Skeleton active={true} />
      </div>
    )
  }
  if (isError) {
    console.log(error)
    return <div>Ha ocurrido un error</div>
  }
  const items = [
    {
      key: '1',
      label: 'Nombre',
      children: `${autoEvaluation.evaluated.firstName} ${autoEvaluation.evaluated.lastName}`
    },
    {
      key: '2',
      label: 'Periodo',
      children: `${autoEvaluation.period.name}`
    },
    {
      key: '3',
      label: 'Labor',
      children: `${autoEvaluation.labour.nameWork}`
    },
    {
      key: '4',
      label: 'Acto',
      children: `${autoEvaluation.act ? 'Si' : 'No'}`
    },
    {
      key: '5',
      label: 'Sugerencias',
      children: `${
        autoEvaluation.suggestions ? autoEvaluation.suggestions : 'N/A'
      }`
    },
    {
      key: '6',
      label: 'Estado de la autoevaluación',
      children: <RecordTag record={autoEvaluation} />
    },
    {
      key: '7',
      label: 'Resultados',
      children: `${autoEvaluation.results ? autoEvaluation.results : 'N/A'}`
    },
    {
      key: '8',
      label: 'Observación',
      children: `${
        autoEvaluation.observation ? autoEvaluation.observation : 'N/A'
      }`
    },
    {
      key: '9',
      label: 'Observación',
      children: `${
        autoEvaluation.puntuation ? autoEvaluation.puntuation : 'N/A'
      }`
    },
    {
      key: '10',
      label: 'Evidencias',
      children: `${
        autoEvaluation.evidencesLink ? autoEvaluation.evidencesLink : 'N/A'
      }`
    }
  ]

  return (
    <div className="m-5">
      <div className="flex justify-between mb-5">
        <h1 className="mb-3 text-2xl text-stone-700 font-semibold">
          Información de la autoevaluación
        </h1>
        <button
          className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-1 mr-5 font-semibold text-sm"
          onClick={showModal}
        >
          Editar estado
        </button>
      </div>
      {isEditAutoEvalModalOpen && (
        <AutoEvalInfoModal
          isModalOpen={isEditAutoEvalModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          autoEvaluation={autoEvaluation}
          AutoEvalUpdateMutation={AutoEvalUpdateMutation}
          handleUpdateAutoEvalMutation={handleUpdateAutoEvalMutation}
        />
      )}
      <Descriptions layout="vertical" items={items} />
    </div>
  )
}

export default AutoEvaluationInfo
