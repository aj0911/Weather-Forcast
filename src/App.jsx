import React from 'react'
import './index.css'
import Main from './Components/Main'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Main/>
      <ToastContainer/>
    </>
  )
}
