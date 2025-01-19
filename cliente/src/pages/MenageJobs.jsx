import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const MenageJobs = () => {

  const navigate = useNavigate()

  return (
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
            {manageJobsData.map((job, index)=>(
              <tr className=' text-gray-700' key={index}>
                <td className=' py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
                <td className=' py-2 px-4 border-b' >{job.title}</td>
                <td className=' py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('DD/MM/YYYY')}</td>
                <td className=' py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                <td className=' py-2 px-4 border-b text-center'>{job.applicants}</td>
                <td className=' py-2 px-4 border-b'>
                  <input className='scale-125 ml-4' type="checkbox" />
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
  )
}

export default MenageJobs
