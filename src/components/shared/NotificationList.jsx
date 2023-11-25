import React, { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'

const NotificationList = () => {
  const items = [
    {
      label: (
        <div className="w-10">
          <div className="inline-block absolute top-1 right-2  hover:bg-slate-200 rounded-md px-1.5">
            <CloseOutlined className=" text-stone-500 text-sm" />
          </div>
          <h1 className="font-semibold text-sm text-indigo-500">
            Nueva notificación
          </h1>
          <p className=" break-keep overflow-auto max-h-20 text-xs ">
            Jairo te ha enviado un recordatorio de llenar tu autoevaluación.
            ¡Haz click aqui para hacerla!
          </p>
        </div>
      ),
      key: '1'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <div className="w-10">
          <div className="inline-block absolute top-1 right-2  hover:bg-slate-200 rounded-md px-1.5">
            <CloseOutlined className=" text-stone-500 text-sm" />
          </div>
          <h1 className="font-semibold text-sm text-indigo-500">
            Nueva notificación
          </h1>
          <p className=" break-keep overflow-auto max-h-20 text-xs ">
            Jairo te ha enviado un recordatorio de llenar tu autoevaluación.
            ¡Haz click aqui para hacerla!
          </p>
        </div>
      ),
      key: '2'
    },
    {
      label: (
        <div className="w-10">
          <div className="inline-block absolute top-1 right-2  hover:bg-slate-200 rounded-md px-1.5">
            <CloseOutlined className=" text-stone-500 text-sm" />
          </div>
          <h1 className="font-semibold text-sm text-indigo-500">
            Nueva notificación
          </h1>
          <p className=" break-keep overflow-auto max-h-20 text-xs ">
            Jairo te ha enviado un recordatorio de llenar tu autoevaluación.
            ¡Haz click aqui para hacerla!
          </p>
        </div>
      ),
      key: '3'
    },
    {
      label: (
        <div className="w-10 ">
          <h1 className="font-semibold text-sm text-indigo-500">
            Nueva notificación
          </h1>
          <p className=" break-keep overflow-auto max-h-20 text-xs ">
            Jairo te ha enviado un recordatorio de llenar tu autoevaluación.
            ¡Haz click aqui para hacerla!
          </p>
        </div>
      ),
      key: '4'
    }
  ]

  return (
    <div>
      {notificationItems.map((item) => (
        <div key={item.key} className="w-10">
          <div
            className="inline-block absolute top-1 right-2 hover:bg-slate-200 rounded-md px-1.5 cursor-pointer"
            onClick={() => handleRemoveNotification(item.key)}
          >
            <CloseOutlined className="text-stone-500 text-sm" />
          </div>
          {/* Resto del contenido de la notificación */}
        </div>
      ))}
    </div>
  )
}

export default NotificationList
