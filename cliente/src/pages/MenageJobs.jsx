import React, { useContext, useEffect, useState } from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const MenageJobs = () => {

  const navigate = useNavigate()

  const [jobs, setJobs] = useState(false)

  const {backendUrl, companyToken} = useContext(AppContext)

  // function to fetcj company job applications date
  const fetchCompanyJobs = async () => {

    try {
      
      const {data} = await axios.get(backendUrl+'/api/company/list-jobs', {headers:{token: companyToken}})

      if(data.success){
        setJobs(data.jobsData.reverse())        
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }

  useEffect(() =>{
    
    if(companyToken){
      fetchCompanyJobs()
    }
  },[companyToken])

  // function to change job visiblity
  const changeJobVisiblity = async (id) => {

    try {

      const {data} = await axios.post(backendUrl+'/api/company/change-visiblity',
        {id},
        {headers:{token:companyToken }}
      )

      if(data.success){
        toast.success(data.message)
        fetchCompanyJobs()
      }else{
        toast.error(data.message)
      }

    }catch(error){
      toast.error(data.message)
    }
  }

  return jobs ? jobs.length === 0 ? ( 
  <div className=' flex items-center justify-center h-[70vh]'>
    <p className='text-xl sm:text-2xl'>Nenhuma vaga disponível ou publicada</p>
  </div> ) : (
    <div className=' container p-4 max-w-5xl'>
      <div className=' overflow-x-auto'>
        <table className=' min-w-full bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
              <th className='py-2 px-4 border-b text-left'>Título da Vaga</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Data</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Localização</th>
              <th className='py-2 px-4 border-b text-center'>Aplicações</th>
              <th className='py-2 px-4 border-b text-left'>Visivel</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, index)=>(
              <tr className=' text-gray-700' key={index}>
                <td className=' py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
                <td className=' py-2 px-4 border-b' >{job.title}</td>
                <td className=' py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('DD/MM/YYYY')}</td>
                <td className=' py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                <td className=' py-2 px-4 border-b text-center'>{job.applicants}</td>
                <td className=' py-2 px-4 border-b'>
                  <input onChange={() => changeJobVisiblity(job._id)} className='scale-125 ml-4' type="checkbox" checked={job.visible} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=' mt-4 flex justify-end'>
        <button onClick={()=> navigate('/painel/adicionar-vaga')}  className='w-45 px-6 py-3 mt-4 bg-black text-white rounded-lg shadow-md '>Adicionar Nova Vaga</button>
      </div>
    </div>
  ) : <Loading/>
}

export default MenageJobs
