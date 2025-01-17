import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import NavBar from '../components/NavBar'
import { assets, jobsData } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'

const ApplyJob = () => {

  const { id } = useParams()

  const [jobData, setJobData] = useState(null)

  const { jobs } = useContext(AppContext)
  
  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id)
    if(data.length !== 0){
      setJobData(data[0])
      console.log(data[0])
    }
  }

  useEffect(() => {
    if(jobs.length > 0){
      fetchJob()
    }
  }, [id, jobs])

  return jobData ? (
    <>
      <NavBar/>

      <div className=' min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
        <div className='bg-white text-black rounded-lg w-full'>
          <div className=' flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-teal-300 rounded-xl'>
            <div className='flex flex-col md:flex-row items-center'>
              <img className=' h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border' src={jobData.companyId.image} alt="logo da empresa" />
              <div className='text-center md:text-left  text-neutral-700'>
                <h1 className=' text-2xl sm:text-4xl font-medium'>{jobData.title}</h1>
                <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2'>
                  <span className='flex items-center gap-1'>
                    <img src={assets.suitcase_icon} alt="malinha" />
                    {jobData.companyId.name}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.location_icon} alt="localizador" />
                    {jobData.location}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.person_icon} alt="pesoinha" />
                    {jobData.level}
                  </span>

                  <span className='flex items-center gap-1'>
                    <img src={assets.money_icon} alt="dinheiro" />
                    Salário: R${Number(jobData.salary).toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center'>
              <button className='bg-lightseagreen p-2.5 px-10 text-white rounded'>Candidate-se agora</button>
              <p className='mt-1 text-gray-600 '>Publicado em {moment(jobData.date).format('DD/MM/YYYY')}</p>
            </div>

          </div>

          <div className=' flex flex-col lg:flex-row justify-between items-start'>
            <div className=' w-full lg:w-2/3'>
              <h2 className=' font-bold text-2xl mb-4'>Descrição da Vaga</h2>
              <div className=' rich-text' dangerouslySetInnerHTML={{__html:jobData.description}}></div>
              <button className='bg-lightseagreen p-2.5 px-10 text-white rounded mt-10'>Candidate-se agora</button>
            </div>
            {/*Rigth Section More Jobs */}
            <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
              <h2>Mais Vagas da {jobData.companyId.name}</h2>
              {jobs.filter( job => job._id !== jobData._id && job.companyId._id === jobData.companyId._id).filter(job => true).slice(0,4).map((job, index)=> <JobCard key={index} job={job}/>)}
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
