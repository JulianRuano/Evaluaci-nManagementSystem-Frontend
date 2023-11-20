import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

const ElementNotFound = ({ title, btnText, redirect }) => {
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
        <p className="mt-2 text-xl text-gray-600">{title}</p>
        <Link to={redirect}>
          <button className="mt-5 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-highlightColor hover:bg-indigo-400">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ElementNotFound

ElementNotFound.propTypes = {
  title: propTypes.string,
  btnText: propTypes.string,
  redirect: propTypes.string
}
