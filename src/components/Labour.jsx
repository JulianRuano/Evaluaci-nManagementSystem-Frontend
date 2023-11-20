import React, { useState } from 'react'
import { Skeleton } from 'antd'
import { useDispatch } from 'react-redux'
import { createLabourFunction } from '../hooks/mutations/useCreateLabour'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import LabourTable from './tables/LabourTable'

import { useGetLabours } from '../hooks/queries/useGetLabours'
import { startHandleLogout } from './actions/auth'
import CreateLabourModal from './CreateLabourModal'

const Labour = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const {
    data: labourData,
    isLoading: labourLoading,
    isError: labourError
  } = useGetLabours()

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
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const labourMutation = useMutation({
    mutationFn: createLabourFunction,
    onSuccess: (labourData) => {
      console.log(labourData)
      queryClient.invalidateQueries('labours')
      // dispatch(addLabours(data.payload))
      notifySuccess('Labor creada con éxito')
    },
    onError: async (error) => {
      if (error?.response?.status === 401) {
        await dispatch(startHandleLogout())
        return
      }
      console.log(error)
      notifyError('Ocurrió un error al crear la labor')
    }
  })
  const handleCreateLabourMutation = (values, actions) => {
    const newValues = {
      nameWork: values.nameWork,
      labourType: values.labourType.labourTypeUid,
      assignedHours: values.assignedHours,
      isActive: values.isActive
    }
    const actionsRef = actions
    labourMutation.mutate(newValues, {
      onSuccess: () => {
        actionsRef.resetForm({
          nameWork: '',
          labourType: {
            idLabourType: '',
            code: '',
            description: ''
          },
          assignedHours: '',
          isActive: ''
        })
      }
    })
  }
  if (labourLoading)
    return (
      <div className="px-5 py-5">
        <Skeleton active />
        <br />
        <Skeleton active />
        <br />
        <Skeleton active />
      </div>
    )
  if (labourError) return <p>Ha ocurrido un error</p>
  return (
    <div className="pt-4 text-center">
      <div className="flex justify-between px-10 container">
        <h1 className="font-semibold pt-1 text-xl">Labores</h1>
        <button
          className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-2 font-semibold"
          onClick={showModal}
        >
          Crear nuevo
        </button>
      </div>
      {isModalOpen && (
        <CreateLabourModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          handleCreateLabourMutation={handleCreateLabourMutation}
          labourMutation={labourMutation}
        />
      )}
      <LabourTable labours={labourData} />
    </div>
  )
}

export default Labour
