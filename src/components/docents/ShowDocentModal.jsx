import React from 'react'
import { Modal } from 'antd'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'

const ShowDocentModal = ({ setIsModalOpen, isModalOpen }) => {
  const uid = useSelector((state) => state.educators?.selectedEducatorUid)

  const educator = useSelector((state) =>
    state.educators.educators.data.find((educator) => educator.uid === uid)
  )

  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
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
      width={800}
      centered={true}
    >
      <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto">
        <img
          className="h-56 w-full object-cover"
          src={educator.picture}
          alt="Profile picture"
        />
        <div className="p-6 space-y-2">
          <h1 className="text-xl font-bold text-gray-900">
            {educator.firstName} {educator.lastName}
          </h1>
          <h2 className="text-lg text-gray-700">{educator.title}</h2>
          <p className="text-gray-500">Email: {educator.email}</p>
          <p className="text-gray-500">Docent Type: {educator.docentType}</p>
          <p className="text-gray-500">ID Type: {educator.idType}</p>
          <p className="text-gray-500">
            Is Active: {educator.isActive.toString()}
          </p>
          <p className="text-gray-500">Labours: {educator.labours}</p>
          <p className="text-gray-500">Role: {educator.role}</p>
          <p className="text-gray-500">
            Auto Evaluations: {educator.autoEvaluations}
          </p>
          <p className="text-gray-500">Join Date: {educator.joinDate}</p>
        </div>
      </div>
    </Modal>
  )
}

export default ShowDocentModal

ShowDocentModal.propTypes = {
  setIsModalOpen: propTypes.func.isRequired,
  isModalOpen: propTypes.bool.isRequired
}
