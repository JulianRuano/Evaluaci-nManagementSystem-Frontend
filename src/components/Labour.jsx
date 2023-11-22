import React, { useState, useEffect, useRef } from 'react'
import { Skeleton } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { createLabourFunction } from '../hooks/mutations/useCreateLabour'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import LabourTable from './tables/LabourTable'
import _ from 'lodash'
import { useGetLabours } from '../hooks/queries/useGetLabours'
import { startHandleLogout } from './actions/auth'
import CreateLabourModal from './CreateLabourModal'
import { addLabourTypes, setLabours } from '../redux/slices/labourSlice'
import EditLabourModal from './EditLabourModal'
import { updateLabourFunction } from '../hooks/mutations/useUpdateLabour'
import { useGetLabourTypes } from '../hooks/queries/useGetLabourTypes'

const Labour = () => {
  const [isCreateLabourModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditLabourModalOpen, setIsEditModalOpen] = useState(false)
  const oldLabour = useRef({})
  const labourIdToEdit = useSelector(
    (state) => state.labours.labourTypeUidToEdit
  )
  const labour = useSelector((state) =>
    state.labours.labours.find((labour) => labour.uid === labourIdToEdit)
  )

  const dispatch = useDispatch()

  const {
    data: labourData,
    isLoading: labourLoading,
    isError: labourError
  } = useGetLabours()

  useEffect(() => {
    if (labourData) {
      dispatch(setLabours(labourData))
    }
  }, [labourData])

  const {
    data: labourTypeData,
    isLoading: labourTypesLoading,
    isError: labourTypesError
  } = useGetLabourTypes()

  useEffect(() => {
    if (labourTypeData) {
      dispatch(addLabourTypes(labourTypeData))
    }
  }, [labourTypeData])

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
  const showCreateLabourModal = () => {
    setIsCreateModalOpen(true)
  }
  const handleOkCreateLabour = () => {
    setIsCreateModalOpen(false)
  }
  const handleCancelCreateLabour = () => {
    setIsCreateModalOpen(false)
  }

  const handleOkEditLabour = () => {
    setIsEditModalOpen(false)
  }
  const handleCancelEditLabour = () => {
    setIsEditModalOpen(false)
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

  const labourUpdateMutation = useMutation({
    mutationFn: updateLabourFunction,
    onSuccess: (labourData) => {
      console.log(labourData)
      queryClient.invalidateQueries('labours')
      // dispatch(addLabours(data.payload))
      notifySuccess('Labor actualizada con éxito')
      setIsEditModalOpen(false)
    },
    onError: async (error) => {
      if (error?.response?.status === 401) {
        await dispatch(startHandleLogout())
        return
      }
      console.log(error)
      notifyError('Ocurrió un error al actualizar la labor')
    }
  })

  const handleUpdateLabourMutation = (values, actions) => {
    const newValues = {
      nameWork: values.nameWork,
      labourType: values.labourType.labourTypeUid,
      isActive: values.isActive
    }
    oldLabour.current = {
      nameWork: labour.nameWork,
      labourType: labour.labourType.uid,
      isActive: labour.isActive
    }
    console.log(oldLabour.current, newValues)
    if (_.isEqual(oldLabour.current, newValues)) {
      notifyError('No se han modificado datos')
      return
    }
    const actionsRef = actions
    labourUpdateMutation.mutate(
      { values: newValues, id: labourIdToEdit },
      {
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
      }
    )
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
    <div className="pt-6 text-center">
      <div className="flex justify-between px-2 mb-2">
        <h1 className="font-semibold pt-1 md:pl-12 text-2xl text-stone-700">
          Labores
        </h1>
        <button
          className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-2 md:mr-20 font-semibold text-sm"
          onClick={showCreateLabourModal}
        >
          Crear nueva
        </button>
      </div>
      {isCreateLabourModalOpen && (
        <CreateLabourModal
          isModalOpen={isCreateLabourModalOpen}
          handleOk={handleOkCreateLabour}
          handleCancel={handleCancelCreateLabour}
          handleCreateLabourMutation={handleCreateLabourMutation}
          labourMutation={labourMutation}
          labourTypesLoading={labourTypesLoading}
          labourTypesError={labourTypesError}
        />
      )}
      {isEditLabourModalOpen && (
        <EditLabourModal
          isModalOpen={isEditLabourModalOpen}
          handleOk={handleOkEditLabour}
          handleCancel={handleCancelEditLabour}
          handleUpdateLabourMutation={handleUpdateLabourMutation}
          labourUpdateMutation={labourUpdateMutation}
          labourTypesLoading={labourTypesLoading}
          labourTypesError={labourTypesError}
        />
      )}
      <div className="container mx-auto">
        <LabourTable
          labours={labourData}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      </div>
    </div>
  )
}

export default Labour
