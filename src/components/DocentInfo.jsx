import { useParams } from 'react-router-dom'
import { useGetDocent } from '../hooks/queries/useGetDocent'
import React from 'react'
import { Descriptions, Skeleton, Tag } from 'antd'
import { format } from 'date-fns'

const DocentInfo = () => {
  const { uid } = useParams()
  const { isLoading, isError, data } = useGetDocent(uid)

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

  if (isError) return <p>Ha ocurrido un error</p>

  const items = [
    {
      key: '1',
      label: 'Nombres',
      children: `${data.educator.firstName}`
    },
    {
      key: '2',
      label: 'Apellidos',
      children: `${data.educator.lastName}`
    },
    {
      key: '3',
      label: 'Rol',
      children: `${data.educator.role}`
    },
    {
      key: '4',
      label: 'Tipo docente',
      children: `${data.educator.docentType}`
    },
    {
      key: '5',
      label: 'Tipo de identificación',
      children: `${data.educator.idType}`
    },
    {
      key: '6',
      label: 'Estado',
      children: (
        <Tag color={data.educator.isActive ? 'green' : 'red'}>
          {data.educator.isActive ? 'Activo' : 'Inactivo'}
        </Tag>
      )
    },
    {
      key: '7',
      label: 'Número de identificación',
      children: `${data.educator.identification}`
    },
    {
      key: '8',
      label: 'Último título alcazado',
      children: `${data.educator.title}`
    },
    {
      key: '9',
      label: 'Email',
      children: `${data.educator.email}`
    },
    {
      key: '10',
      label: 'Fecha de creación',
      children: `${format(new Date(data.educator.joinDate), 'dd/MM/yyyy')}`
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
      <Descriptions title="Información del docente" items={items} />
    </div>
  )
}

export default DocentInfo
