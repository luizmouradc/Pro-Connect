import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const JobCard = ({job}) => {

  const navigate = useNavigate()

  return (
    <div className='border p-6 shadow rounded'>
      <div className='flex justify-between items-center'>
        <img  className='h-8' src={job.companyId.image} alt="" />
      </div>

      <h4 className=' font-medium text-xl mt-2'>{job.title}</h4>
      <div className=' flex items-center gap-3 mt-2 text-xs'>
        <span className=' bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
        <span className=' bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{job.level}</span>
      </div>

      <p className=' text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
      <div className=' mt-4 flex gap-4 text-sm'>
        <button onClick={() => {navigate(`/candidatar-se-a-emprego/${job._id}`); scroll(0,0)}} className='bg-lightseagreen text-white px-4 py-2 rounded'>Inscreva-se agora</button>
        <button onClick={() => {navigate(`/candidatar-se-a-emprego/${job._id}`); scroll(0,0)}} className=' text-gray-500 border border-gray-500 px-4 py-2 rounded'>Saber mais</button>
      </div>
    </div>
  )
}

export default JobCard
