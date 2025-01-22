import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const RecruiterLogin = () => {

    const [ state, setState] = useState('Login')
    const  [ name, setName] = useState('')
    const [password, setPassword] = useState('')
    const[email, setEmail] = useState('')

    const [ image, setImage] = useState(false)

    const [isTextDataSubmited, setIsTextDataSubmited] = useState(false)

    const {setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData} = useContext(AppContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if (state == "Cadastro" && !isTextDataSubmited){
            setIsTextDataSubmited(true)
        }

        try {
            if(state === "Login"){
                const {data} = await axios.post(backendUrl + '/api/company/login', {email,password})

                if (data.success){
                    console.log(data);
                    setCompanyData(data.company)
                    setCompanyToken(data.token)
                    localStorage.setItem('companyToken', data.token)
                    setShowRecruiterLogin(false)
                    
                }
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }
    },[])

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">

        <form onSubmit={onSubmitHandler} className=' relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className=' text-center  text-2xl text-neutral-700 font-medium'>{state} do Recrutador</h1>
            <p className='text-sm'>
              {state === 'Login' 
                ? 'Bem-vindo de volta! Por favor, faça login para continuar.' 
                : 'Crie sua conta para começar a recrutar os melhores talentos!'}
            </p>
            {state === "Cadastro" && isTextDataSubmited 
                ?<>
                   <div className='flex items-center gap-4 my-10'>
                        <label htmlFor="image">
                            <img className=' w-16 rounded-full' src={image ? URL.createObjectURL(image) :  assets.upload_area} alt="" />
                            <input onChange={e => setImage(e.target.files[0])} type="file" id='image' hidden />
                        </label>
                        <p>Upload de Empresa <br/> logo</p>
                    </div> 
                </>
                : <>

                    {state !== 'Login' && (
                        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                            <img src={assets.person_icon} alt="" />
                            <input className=' outline-none text-sm' onChange={e => setName(e.target.value)} value={name}   type="text" placeholder='Nome da Empresa' required />
                        </div>
                    )} 

                    <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img src={assets.email_icon} alt="" />
                        <input className=' outline-none text-sm' onChange={e => setEmail(e.target.value)} value={email}     type="text" placeholder='E-mail' required />
                    </div>

                    <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img src={assets.lock_icon} alt="" />
                        <input className=' outline-none text-sm' onChange={e => setPassword(e.target.value)} value={password}   type="password" placeholder='Senha' required />
                    </div>

                </>
            }

            <p className='text-sm text-lightseagreen my-4 cursor-pointer'>
                {state === 'Login' && 'Esqueceu sua senha'}
            </p>

            <button type='submit' className='bg-lightseagreen w-full  text-white py-2 rounded-full'>
                {state === 'Login' ? 'login' : isTextDataSubmited ? 'criar conta' : 'next'}
            </button>

            {
                state === 'Login'
                ? <p className=' mt-5 text-center'>Não tem uma conta? <span className=' text-lightseagreen cursor-pointer' onClick={() => setState("Cadastro")}>Cadastrar-se</span></p>
                : <p className=' mt-5 text-center'>Já possui uma conta? <span className=' text-lightseagreen cursor-pointer' onClick={() => setState("Login")}>Login</span></p>
            }

            <img onClick={e => setShowRecruiterLogin(false)} className=' absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />

        </form>
    </div>
  )
}

export default RecruiterLogin
