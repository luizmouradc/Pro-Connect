import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import NavBar from '../components/NavBar'
import { assets } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '@clerk/clerk-react'

const ApplyJob = () => {

  const { id } = useParams()

  const {getToken} = useAuth()

  const navegate = useNavigate()

  const [JobData, setJobData] = useState(null)
  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false)

  const { jobs, backendUrl, userData, userApplications , fetchUserApplications} = useContext(AppContext)
  
  const fetchJob = async () => {

    try {
      
      const {data} = await axios.get(backendUrl+`/api/jobs/${id}`)

      if(data.success){
        setJobData(data.job)
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const applyHandler = async () => {
    try {
      
      if(!userData){
        return toast.error('Faça login para se inscrever')
      }

      if (!userData.resume){
        navegate('/aplicacoes')
        return toast.error('Carregar currículo para se inscrever')
      }

      const token = await getToken()

      const {data} = await axios.post(backendUrl+'api/users/apply', {jobId: JobData._id},{headers: {Authorization:`Bearer ${token}`}})

      if(data.success) {
        toast.success(data.message)
        fetchUserApplications()
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const chechAlreadyApplied = () => {
    const hasApplied = userApplications.some(item => item.jobId._id === JobData._id)
    setIsAlreadyApplied(hasApplied)

  }

  useEffect(() => {
    fetchJob()
  }, [id])

  useEffect(() => {
    if(userApplications.length > 0 && JobData) {
      chechAlreadyApplied()
    }
  },[JobData,userApplications, id])

  return JobData ? (
    <>
      <NavBar/>

      <div className=' min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
        <div className='bg-white text-black rounded-lg w-full'>
          <div className=' flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-teal-300 rounded-xl'>
            <div className='flex flex-col md:flex-row items-center'>
              <img className=' h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border' src={JobData.companyId.image} alt="logo da empresa" />
              <div className='text-center md:text-left  text-neutral-700'>
                <h1 className=' text-2xl sm:text-4xl font-medium'>{JobData.title}</h1>
                <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2'>
                  <span className='flex items-center gap-1'>
                    <img src={assets.suitcase_icon} alt="malinha" />
                    {JobData.companyId.name}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.location_icon} alt="localizador" />
                    {JobData.location}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.person_icon} alt="pesoinha" />
                    {JobData.level}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.money_icon} alt="dinheiro" />
                    Salário: R${Number(JobData.salary).toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center'>
              <button onClick={applyHandler} className='bg-lightseagreen p-2.5 px-10 text-white rounded'>{isAlreadyApplied? 'Já aplicado' : 'Inscreva-se agora'}</button>
              <p className='mt-1 text-gray-600 '>Publicado em {moment(JobData.date).format('DD/MM/YYYY')}</p>
            </div>

          </div>

          <div className=' flex flex-col lg:flex-row justify-between items-start'>
            <div className=' w-full lg:w-2/3'>
              <h2 className=' font-bold text-2xl mb-4'>Descrição da Vaga</h2>
              <div className=' rich-text' dangerouslySetInnerHTML={{__html:JobData.description}}></div>
              <button onClick={applyHandler} className='bg-lightseagreen p-2.5 px-10 text-white rounded mt-10'>{isAlreadyApplied? 'Já aplicado' : 'Inscreva-se agora'}</button>
            </div>
            {/*Rigth Section More Jobs */}
            <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
              <h2>Mais Vagas da {JobData.companyId.name}</h2>
              {jobs.filter( job => job._id !== JobData._id && job.companyId._id === JobData.companyId._id).filter(job => {
                // conjunto de IDs de trabalho aplicados
                const appliedJobsIds = new Set(userApplications.map(app => app.jobId && app.jobId._id))
                //retornar verdadeiro se o usuário ainda não tiver se candidatado para esta vaga
                return !appliedJobsIds.has(job._id)
              }).slice(0,4).map((job, index)=> <JobCard key={index} job={job}/>)}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <Loading/>
  )
}

export default ApplyJob
