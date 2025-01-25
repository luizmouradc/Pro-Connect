import React, { useContext, useEffect, useState } from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const ViewApplications = () => {

  const {backendUrl, companyToken} = useContext(AppContext)

  const [applicants, setApplicants] = useState(false)

  // function to fetch company job applicants data
  const fetchCompanyJobApplicantions = async () => {

    try {

      const {data} = await axios.get(backendUrl+'api/company/applicants',{headers:{token : companyToken}})

      if(data.success){
        setApplicants(data.applications.reverse())
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  // function to update job Applications Status
  const changeJobApplicationStatus = async (id, status) => {
    try {
      
      const {data} = await axios.post(backendUrl+'/api/company/change-status',{id, status},{headers:{token:companyToken}})

      if(data.success){
        fetchCompanyJobApplicantions()
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(companyToken){
      fetchCompanyJobApplicantions()
    }
  },[companyToken])

  return applicants ? applicants.length === 0 ? ( 
    <div className=' flex items-center justify-center h-[70vh]'>
      <p className='text-xl sm:text-2xl'>No Appliecations Available</p>
    </div> ) : (
    <div className='container mx-auto p-4'>
      <div>
        <table className=' w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr className=' border-b'>
              <th className=' py-2 px-4 text-left'>#</th>
              <th className=' py-2 px-4 text-left'>Nome do Usuario</th>
              <th className=' py-2 px-4 text-left max-sm:hidden'>Título da Vaga</th>
              <th className=' py-2 px-4 text-left max-sm:hidden'>Localização</th>
              <th className=' py-2 px-4 text-left'>Currículo </th>
              <th className=' py-2 px-4 text-left'>Decisão</th>
            </tr>
          </thead>

          <tbody>
            {applicants.filter(item => item.jobId && item.userId).map((applicant, index) => (
              <tr key={index} className=' text-gray-700'>
                <td className=' py-2 px-4 border-b text-center'>{index+1}</td>

                <td className=' py-2 px-4 border-b text-center flex items-center'>
                  <img className=' w-10 h-10 rounded-full mr-3 max-sm:hidden' src={applicant.useId.imgSrc} alt="" />
                  <span>{applicant.userId.name}</span>
                </td>

                <td className=' py-2 px-4 border-b  max-sm:hidden'>{applicant.jobId.jobTitle}</td>

                <td className=' py-2 px-4 border-b max-sm:hidden'>{applicant.jobId.location}</td>

                <td className=' py2 px4 border-b'>
                  <a href={applicant.userId.resume} className=' bg-teal-50 text-teal-400 px-3 py-1 rounded inline-flex gap-2 items-center' target='_blank'>
                    Currículo <img src={assets.resume_download_icon} alt="" />
                  </a>
                </td>

                <td className=' py-2 px-4 border-b relative'>
                   {/*ou Desição*/ }
                  {applicant.status === "Peding"
                  ?
                  <div className=' relative inline-block text-left group'>
                    <button className=' text-gray-500 action-button'>...</button>
                    <div className=' z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block'>
                      <button onClick={() => changeJobApplicationStatus(applicant._id, 'Aceito')} className=' block w-full text-left px-4 py-2 text-green-400 hover:bg-gray-100'>Aceito</button>
                      <button onClick={() => changeJobApplicationStatus(applicant._id, 'Rejeitado')} className=' block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-100'>Rejeitado</button>
                    </div>
                  </div>
                  :
                  <div>{applicant.status}</div>
                  }
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading/>
}

export default ViewApplications
