import React from 'react'
import { NavLink, Outlet, useNavigate} from  'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className=' min-h-screen'>

      {/*Navbar For Recruiter Panel */}
      <div className=' shadow py-4'>
        <div className=' px-5 flex justify-between items-center'>
          <img onClick={e => navigate('/')} className=' max-sm:w-32 cursor-pointer' src={assets.logo} alt="logo" />
          <div className=' flex items-center gap-3'>
            <p className=' max-sm:hidden'>Bem vindo, Puma</p>
            <div className=' relative group'>
              <img className=' w-8 border rounded-full' src={assets.company_icon} alt="" />
              <div className=' absolute hidden group-hover:block top-0 right-0 z-10 text-black roudend pt-12'>
                <ul className=' list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className=' py-1 px-2 cursor-pointer pr-10'>Sair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex items-start'>

        {/*left sidebar with option to add job, ... */}
        <div className='inline-block min-h-screen border-r-2'>
          <ul className='flex flex-col items-start pt-5 text-gray-800'>
            <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-teal-100 border-r-4 border-teal-500'}`} to={'/painel/adicionar-vaga'}>
              <img className=' min-w-4' src={assets.add_icon} alt="" />
              <p className=' max-sm:hidden'>Adicionar Vaga</p>
            </NavLink>

            <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-teal-100 border-r-4 border-teal-500'}`} to={'/painel/gerenciar-vagas'}>
              <img className=' min-w-4' src={assets.home_icon} alt="" />
              <p className=' max-sm:hidden'>Gerenciar Vagas</p>
            </NavLink>

            <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-teal-100 border-r-4 border-teal-500'}`} to={'/painel/vizualizar-aplicacoes'}>
              <img className=' min-w-4' src={assets.person_tick_icon} alt="" />
              <p className=' max-sm:hidden'>Vizualizar Aplicações</p>
            </NavLink>
          </ul>
        </div>

        <div >
          <Outlet/>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
