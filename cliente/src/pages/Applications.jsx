import React, { memo, useState } from 'react'
import NavBar from '../components/NavBar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'

const Applications = () => {

  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)

  return (
    <>
      <NavBar/>
      <div className=' container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className=' text-xl font-semibold'>Seu Currículo</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {
            isEdit 
            ? <>
              <label className=' flex items-center' htmlFor="resumeUpdate">
                <p className=' bg-teal-100 text-teal-600 px-4 py-2 rounded-lg mr-2'>Selecionar Currículo</p>
                <input id='resumeUpdate' onChange={e => setResume(e.target.files[0])} accept='aplicacao/pdf' type="file" hidden />
                <img src={assets.profile_upload_icon} alt="" />
              </label>

              <button onClick={e => setIsEdit(false)} className=' bg-green-100 border-green-400 rounded-lg px-4 py-2'>Salvar</button>
            </>
            : <div className=' flex gap-2'>
              <a className='bg-teal-100 text-teal-600 px-4 py-2 rounded-lg' href="#">Currículo</a>

              <button onClick={() => setIsEdit(true)} className=' text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>Editar</button>
            </div>
          }
        </div>

        <h2 className=' text-xl font-semibold mb-4'>Vagas Aplicadas</h2>
        <table className=' min-w-full bg-white border rounded-lg'>
          <thead>
            <tr>
              <th className=' py-3 px-4 bordeb[ text-left'>Empresa</th>
              <th className=' py-3 px-4 bordeb[ text-left'>Título do Cargo</th>
              <th className=' py-3 px-4 bordeb[ text-left max-sm:hidden'>Localicação</th>
              <th className=' py-3 px-4 bordeb[ text-left max-sm:hidden'>Data</th>
              <th className=' py-3 px-4 bordeb[ text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => true ? (
              <tr>
                <td className=' py-3 px-4 flex items-center gap-2 border-b'>
                  <img className=' w-8 h-8' src={job.logo} alt="" />
                  {job.company}
                </td>
                <td className=' py-2 px-4 border-b'>{job.title}</td>
                <td className=' py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                <td className=' py-2 px-4 border-b max-sm:hidden'>{moment(job.date, 'DD MMM, YYYY').format('DD/MM/YY')}</td>
                <td className=' py-2 px-4 border-b'>  
                  <span className={`${job.status === 'Aceito' ? 'bg-green-100' : job.status === 'Rejeitado' ? 'bg-red-100' : 'bg-blue-100'} px-4 pe-1.5 rounded`}>
                    {job.status}
                  </span>  
                </td>
              </tr>
            ) : (null) )}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  )
}

export default Applications
