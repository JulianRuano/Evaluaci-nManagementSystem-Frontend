import { useParams } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { Descriptions, Skeleton, Tag } from 'antd'
import { format } from 'date-fns'
import ElementNotFound from './ElementNotFound'
import { useMutation } from '@tanstack/react-query'
import { updateDocentFunction } from '../hooks/mutations/useUpdateDocent'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { startHandleLogout } from './actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { addEducator, updateEducator } from '../redux/slices/educatorSlice'
import EditDocentModal from './EditDocentModal'
import { useGetDocent } from '../hooks/queries/useGetDocent'
import _ from 'lodash'

const DocentInfo = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const educator = useSelector((state) =>
    state.educators.educators.find((educator) => educator.uid === id)
  )

  // useQuery hook to fetch the educator from the backend
  const { data, isLoading, isError } = useGetDocent(id, !educator)

  // Comprueba si data está definido antes de intentar acceder a su propiedad 'educator'
  const backendEducator = data && data.educator

  // Si el educador no está en el Redux store, usa el del backend
  const finalEducator = educator || backendEducator

  useEffect(() => {
    if (backendEducator) {
      dispatch(addEducator(finalEducator))
    }
  }, [backendEducator, dispatch])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const notifySuccess = (message) =>
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: false
    })
  const notifyError = (message) =>
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 2000,
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
  // const queryClient = useQueryClient()
  const formEditInitialValuesRef = useRef({
    firstName: finalEducator.firstName,
    lastName: finalEducator.lastName,
    role: finalEducator.role,
    title: finalEducator.title,
    identification: finalEducator.identification,
    idType: finalEducator.idType,
    email: finalEducator.email,
    docentType: finalEducator.docentType,
    isActive: finalEducator.isActive
  })
  const docentUpdateMutation = useMutation({
    mutationFn: updateDocentFunction,
    onSuccess: (data) => {
      console.log(data)
      // queryClient.invalidateQueries('docents')
      // dispatch(addEducators(data.payload))
      notifySuccess('Docente actualizado con éxito')
      setIsModalOpen(false)
    },
    onError: async (error) => {
      if (error?.response?.status === 401) {
        await dispatch(startHandleLogout())
        return
      }
      console.log(error)
      notifyError(error.response.data.message)
    }
  })
  const handleUpdateDocentMutation = (values) => {
    if (_.isEqual(values, formEditInitialValuesRef.current)) {
      notifyError('No han modificado datos')
      return
    }
    docentUpdateMutation.mutate(
      { id, values },
      {
        onSuccess: () => {
          formEditInitialValuesRef.current = values
          dispatch(updateEducator({ id, values }))
        }
      }
    )
  }
  if (isLoading)
    return (
      <div className="px-5 py-5">
        <Skeleton active />
        <br />
        <Skeleton active />
        <br />
        <Skeleton active />
      </div>
    )

  if (!finalEducator) {
    return (
      <ElementNotFound
        title="¡Ups! Parece que no se ha encontrado el docente."
        btnText="Regresar a la lista de docentes"
        redirect="/docentes"
      />
    )
  }

  const items = [
    {
      key: '1',
      label: 'Nombres',
      children: `${finalEducator.firstName}`
    },
    {
      key: '2',
      label: 'Apellidos',
      children: `${finalEducator.lastName}`
    },
    {
      key: '3',
      label: 'Rol',
      children: `${finalEducator.role}`
    },
    {
      key: '4',
      label: 'Tipo docente',
      children: `${finalEducator.docentType}`
    },
    {
      key: '5',
      label: 'Tipo de identificación',
      children: `${finalEducator.idType}`
    },
    {
      key: '6',
      label: 'Estado',
      children: (
        <Tag color={finalEducator.isActive ? 'green' : 'red'}>
          {finalEducator.isActive ? 'Activo' : 'Inactivo'}
        </Tag>
      )
    },
    {
      key: '7',
      label: 'Número de identificación',
      children: `${finalEducator.identification}`
    },
    {
      key: '8',
      label: 'Último título alcazado',
      children: `${finalEducator.title}`
    },
    {
      key: '9',
      label: 'Email',
      children: `${finalEducator.email}`
    },
    {
      key: '10',
      label: 'Fecha de creación',
      children: `${format(new Date(finalEducator.joinDate), 'dd/MM/yyyy')}`
    },
    {
      key: '13',
      label: 'Config Info',
      children: (
        <>
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
          <br />
        </>
      )
    }
  ]
  return (
    <div className="px-4 py-4">
      <div className="flex justify-between container">
        <h1>Información del docente</h1>
        <button
          className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-2 font-semibold"
          onClick={showModal}
        >
          Editar
        </button>
      </div>
      <Descriptions items={items} />
      <EditDocentModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        educator={finalEducator}
        handleUpdateDocentMutation={handleUpdateDocentMutation}
        docentUpdateMutation={docentUpdateMutation}
      />
    </div>
  )
}

export default DocentInfo
