import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useGetPeriods } from '../hooks/queries/useGetPeriod'
import { useDispatch } from 'react-redux'
import {
  addPeriods,
  setAutoevaluations
} from '../redux/slices/AutoEvaluationSlice'
import { useGetAutoEvaluations } from '../hooks/queries/useGetAutoEvaluation.js'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import CreateAutoEvaluationModal from './CreateAutoEvaluationModal'
import { createAutoEvaluationFunction } from '../hooks/mutations/useCreateAutoEvaluation'
import { startHandleLogout } from './actions/auth'

const ManageAutoevaluation = () => {
  const [isCreateAutoEvaluationModalOpen, setIsCreateModalOpen] =
    useState(false)
  const [isEditAutoEvaluationModalOpen, setIsEditModalOpen] = useState(false)

  const dispatch = useDispatch()
  const {
    data: autoEvaluationData,
    isLoading: autoEvaluationLoading,
    isError: autoEvaluationError
  } = useGetAutoEvaluations()
  useEffect(() => {
    if (autoEvaluationData) {
      dispatch(setAutoevaluations(autoEvaluationData))
    }
  }, [autoEvaluationData])

  const {
    data: periodData,
    isLoading: periodLoading,
    isError: periodError
  } = useGetPeriods()

  useEffect(() => {
    if (periodData) {
      dispatch(addPeriods(periodData))
    }
  }, [periodData])

  const queryClient = useQueryClient()

  const notifySuccess = (message) =>
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false
    })
  const notifyError = (message) =>
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false
    })
  const showCreateAutoEvaluationModal = () => {
    setIsCreateModalOpen(true)
  }
  const handleOkCreateAutoEvaluation = () => {
    setIsCreateModalOpen(false)
  }
  const handleCancelCreateAutoEvaluation = () => {
    setIsCreateModalOpen(false)
  }
  const handleOKEditAutoEvaluation = () => {
    setIsEditModalOpen(false)
  }
  const handleCancelEditAutoEvaluation = () => {
    setIsEditModalOpen(false)
  }

  const autoEvaluacionMutation = useMutation({
    mutationFn: createAutoEvaluationFunction,
    onSuccess: (autoEvaluacionData) => {
      console.log(autoEvaluacionData)
      queryClient.invalidateQueries('autoEvaluations')
      notifySuccess('autoEvaluacion creada con éxito')
    },
    onError: async (error) => {
      if (error?.response?.status === 401) {
        await dispatch(startHandleLogout())
      }
      console.log(error)
      notifyError('Ocurrió un error al actualizar la Autoevaluacion')
    }
  })
  const hundleUpdateAutoEvaluationMutation = (values, actions) => {
    const newValues = {
      state: values.state,
      puntuation: values.puntuation,
      idPeiod: values.period.idPeriod,
      date: values.date,
      evaluated: values.evaluated,
      act: values.act
    }
  }
  return (
    <div className="pt-6 text-center">
      <div className="flex justify-between px-2 mb-2">
        <h1 className="font-semibold pt-1 md:pl-12 text-2xl text-stone-700">
          Gestion Autoevaluaciones
        </h1>
        <button
          className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-2 md:mr-20 font-semibold text-sm"
          onClick={showCreateAutoEvaluationModal}
        >
          Crear nueva
        </button>
      </div>

      {isCreateAutoEvaluationModalOpen && (
        <CreateAutoEvaluationModal
          isModalOpen={isCreateAutoEvaluationModalOpen}
        />
      )}
    </div>
  )
}

export default ManageAutoevaluation
