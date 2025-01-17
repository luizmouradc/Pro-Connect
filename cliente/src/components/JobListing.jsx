import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {

  const {isSearched, searchFilter, setSearchFilter, jobs} = useContext(AppContext)

  const [showFilter, setShowFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
      {/*Sidebar*/}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/*Filtro de pesquisa do componente Hero*/}
        {
          isSearched && ( searchFilter.title !== "" || searchFilter.location !== "" ) && (
            <>
              <h3 className='font-medium text-lg mb-4'>Pesquisa atual</h3>
              <div className='mb-4 text-gray-600'>
                {searchFilter.title && (
                  <span className='inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-4 py-1.5 rounded'>
                    {searchFilter.title}
                    <img onClick={e =>setSearchFilter(prev => ({...prev, title:""})) }  className='cursor-pointer' src={assets.cross_icon} alt="fechar(X)" />
                  </span>
                )}

                {searchFilter.location && (
                  <span className='inline-flex items-center gap-2.5 bg-red-50 border-red-200 px-4 py-1.5 rounded'>
                    {searchFilter.location}
                    <img onClick={e =>setSearchFilter(prev => ({...prev, location:""})) } className='cursor-pointer' src={assets.cross_icon} alt="fechar(X)" />                
                  </span>
                )}
              </div>
            </>
          )
        }

        <button onClick={e => setShowFilter(prev => !prev)} className='px-6 p-1.5 rounded border border-gray-400 lg:hidden'>
          {showFilter ? "Fechar":"Filtros"}
        </button>

        {/*Category Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4'>Pesquisar por Categorias</h4>
          <ul className='space-y-4 text-gray-600'>
            {
              JobCategories.map((category, index) => (
                <li key={index} className='flex gap-3 items-center'>
                  <input className='scale-125'  type="checkbox" name='' id='' />
                  {category}
                </li>
              ))
            }
          </ul>
        </div>

        {/*Location Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4 pt-14'>Pesquisar por Localização</h4>
          <ul className='space-y-4 text-gray-600'>
            {
              JobLocations.map((location, index) => (
                <li key={index} className='flex gap-3 items-center'>
                  <input className='scale-125'  type="checkbox" name='' id='' />
                  {location}
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/*Job listing */}
      <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-medium text-3xl py-2' id='lista-de-empregos'>Últimas Vagas</h3>
        <p className='mb-8'>Obtenha o emprego desejado nas melhores empresas</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
            {jobs.slice((currentPage-1)*6,currentPage*6).map((job, index) => (
              <JobCard key={index} job={job}/>
            ))}
        </div>

        {/*PAgination */}
        {jobs.length > 0 && (
          <div className=' flex items-center justify-center space-x-2 mt-10'>
            <a href="#lista-de-empregos">
              <img onClick={() => setCurrentPage(Math.max(currentPage-1),1)} src={assets.left_arrow_icon} alt="seta pra esquerda" />
            </a>
            {Array.from({length:Math.ceil(jobs.length/6)}).map((_, index) => (
              <a href="#lista-de-empregos">
                <button onClick={() => setCurrentPage(index+1) } className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1 ? 'bg-blue-100 text-lightseagreen' : 'text-gray-500'}`}>{index + 1}</button>
              </a>
            ))}
            <a href="#lista-de-empregos">
              <img onClick={() => setCurrentPage(Math.min(currentPage+1,Math.ceil(jobs.length / 6)))} src={assets.right_arrow_icon} alt="seta pra direita" />
            </a>
          </div>
        )}
      </section>
    </div>
  )
}

export default JobListing
