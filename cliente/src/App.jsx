import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/candidatar-se-a-emprego/:id' element={<ApplyJob/>}></Route>
        <Route path='/aplicacoes' element={<Applications/>}></Route>
      </Routes>
    </div>
  )
}

export default App
