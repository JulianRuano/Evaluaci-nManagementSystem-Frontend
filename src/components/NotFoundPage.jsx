import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center my-10">
        <svg
          className="mx-auto h-24 w-24 text-highlightColor animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          ></path>
        </svg>
        <h2 className="mt-6 text-6xl font-extrabold text-highlightColor">
          404
        </h2>
        <p className="mt-2 text-xl text-gray-600">
          ¡Ups! Parece que te has perdido.
        </p>
        <Link to="/">
          <button className="mt-5 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-highlightColor hover:bg-indigo-400">
            Regresar al inicio
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
