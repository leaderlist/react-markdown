import React from 'react'
import { Routes, Route } from 'react-router'
import { useNavigate } from 'react-router-dom'

import { Editor } from './pages/index'

function App () {
  const navigate = useNavigate()
  navigate('/eitor')
  return (
    <Routes>
      <Route path="/" element={<Editor />}></Route>
    </Routes>
  )
}

export default App