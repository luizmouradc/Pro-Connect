import React, { useContext } from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import MenageJobs from './pages/MenageJobs'
import ViewApplications from './pages/ViewApplications' 
import 'quill/dist/quill.snow.css'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const {showRecruiterLogin, companyToken} = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/candidatar-se-a-emprego/:id' element={<ApplyJob/>}></Route>
        <Route path='/aplicacoes' element={<Applications/>}></Route>
        <Route path='/painel' element={<Dashboard/>}>
          {companyToken ? <>
            <Route path='adicionar-vaga' element={<AddJob/>}/>
            <Route path='gerenciar-vagas' element={<MenageJobs/>}/>
            <Route path='vizualizar-aplicacoes' element={<ViewApplications/>}/>
          </>: null}
        </Route>
      </Routes>
    </div>
  )
}

export default App
