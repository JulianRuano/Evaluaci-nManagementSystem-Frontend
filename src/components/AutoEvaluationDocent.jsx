import React, { useState } from 'react'
import AutoEvaluationTable from './tables/AutoEvaluationTable'
import { useGetMyAutoEvaluations } from '../hooks/queries/useGetMyAutoEvaluations'
import ModalUpdateAutoEvalDocent from './ModalUpdateAutoEvalDocent'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateAutoEvalFunction } from '../hooks/mutations/useUpdateAutoEval'
import { Skeleton } from 'antd'
import { toast } from 'react-toastify'
import { startHandleLogout } from './actions/auth'
import { useParams } from 'react-router-dom'

const AutoEvaluationDocent = () => {
  const { data, isLoading, isError, error } = useGetMyAutoEvaluations()
  const [editModalOpen, setIsEditModalOpen] = useState(false)
  const docentType = useSelector((state) => state.auth.user.docentType)
  const { id } = useParams()

  const dispatch = useDispatch()
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
  const showModal = () => {
    setIsEditModalOpen(true)
  }
  const handleOk = () => {
    setIsEditModalOpen(false)
  }

  const handleCancel = () => {
    setIsEditModalOpen(false)
  }
  const queryClient = useQueryClient()
  const AutoEvalUpdateMutation = useMutation({
    mutationFn: updateAutoEvalFunction,
    onSuccess: (data) => {
      queryClient.invalidateQueries('autoEvaluation')
      // dispatch(addEducators(data.payload))
      notifySuccess('Autoevaluación actualizada con éxito')
      setIsEditModalOpen(false)
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
  const totalHoras = data?.reduce((total, autoevaluacion) => {
    return total + autoevaluacion.labour.assignedHours
  }, 0)
  console.log(data)
  console.log(totalHoras)
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
  return (
    <div className="m-5 ">
      <div className="flex justify-between px-2 mb-2  md:pl-12">
        <h1 className="font-semibold pt-1 text-2xl text-stone-700">
          Mis autoevaluaciones
        </h1>
      </div>
      <p className="pl-6">Total de horas: {totalHoras}</p>
      {/* <ModalUpdateAutoEvalDocent
        isModalOpen={editModalOpen}
        docentType={docentType}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleUpdateAutoEvalMutation={handleUpdateAutoEvalMutation}
      /> */}
      <AutoEvaluationTable
        autoEvaluations={data}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </div>
  )
}

export default AutoEvaluationDocent
