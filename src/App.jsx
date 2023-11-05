import React from 'react'
import { useDispatch } from 'react-redux'
import './index.css'
import { login } from './redux/slices/authSlice'

function App() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(login('prueba'))
  }
  return (
    <>
      <div></div>
      <h1 className="text-red-600">Vite + React</h1>
      <div className="text-red-600">
        <button onClick={handleClick}>count is count</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs font-extrabold">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
