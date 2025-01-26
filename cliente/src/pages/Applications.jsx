import React, { memo, useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'
import { useAuth, useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Applications = () => {

  const {user} = useUser()
  const {getToken} = useAuth()

  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)

  const { backendUrl, userData: contextUserData, userApplications, fetchUserData, fetchUserApplications } = useContext(AppContext);

  // Estado local para userData
  const [userData, setUserData] = useState(contextUserData || {});

  const updateResume = async () => {

    try {
      
      const formData = new FormData()
      formData.append('resume',resume)

      const token = await getToken()

      const {data} = await axios.post(backendUrl+'/api/users/update-resume', formData, {headers:{Authorization:`Bearer ${token}`}})

      if (data.success) {
        toast.success(data.message)
        await fetchUserData()
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

    setIsEdit(false)
    setResume(null)
  }

  useEffect(() => {
    if(user) {
      fetchUserApplications()  
    }
  },[user])

  return (
    <>
      <NavBar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='text-xl font-semibold'>Seu Currículo</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {
            isEdit || (userData && userData.resume === "") ? (
              <>
                <label className='flex items-center' htmlFor="resumeUpdate">
                  <p className='bg-teal-100 text-teal-600 px-4 py-2 rounded-lg mr-2'>
                    {resume ? resume.name : "Selecionar Currículo"}
                  </p>
                  <input 
                    id='resumeUpdate' 
                    onChange={e => setResume(e.target.files[0])} 
                    accept='application/pdf' 
                    type="file" 
                    hidden 
                  />
                  <img src={assets.profile_upload_icon} alt="" />
                </label>
                <button 
                  onClick={updateResume} 
                  className='bg-green-100 border-green-400 rounded-lg px-4 py-2'
                >
                  Salvar
                </button>
              </>
            ) : (
              <div className='flex gap-2'>
                <a 
                  target='_blank' 
                  href={userData.resume} 
                  className='bg-teal-100 text-teal-600 px-4 py-2 rounded-lg'
                >
                  Currículo
                </a>
                <button 
                  onClick={() => setIsEdit(true)} 
                  className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'
                >
                  Editar
                </button>
              </div>
            )
          }
        </div>
  
        <h2 className='text-xl font-semibold mb-4'>Vagas Aplicadas</h2>
        <table className='min-w-full bg-white border rounded-lg'>
          <thead>
            <tr>
              <th className='py-3 px-4 border text-left'>Empresa</th>
              <th className='py-3 px-4 border text-left'>Título do Cargo</th>
              <th className='py-3 px-4 border text-left max-sm:hidden'>Localização</th>
              <th className='py-3 px-4 border text-left max-sm:hidden'>Data</th>
              <th className='py-3 px-4 border text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            {userApplications.map((job, index) => (
              <tr key={index}>
                <td className='py-3 px-4 flex items-center gap-2 border-b'>
                  <img className='w-8 h-8' src={job.companyId.image} alt="" />
                  {job.companyId.name}
                </td>
                <td className='py-2 px-4 border-b'>{job.jobId.title}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>{job.jobId.location}</td>
                <td className='py-2 px-4 border-b max-sm:hidden'>
                  {moment(job.date).format('DD/MM/YY')}
                </td>
                <td className='py-2 px-4 border-b'>
                  <span className={`${job.status === 'Aceito' ? 'bg-green-50' : job.status === 'Rejeitado' ? 'bg-red-50' : 'bg-blue-50'} px-4 pe-1.5 rounded`}
                  >
                    {job.status === "Pending" ? "Pendente" : job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}

export default Applications
