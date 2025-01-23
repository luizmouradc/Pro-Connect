import React, { useContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const AddJob = () => {

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const {backendUrl, companyToken} = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      
      const description = quillRef.current.root.innerHTML

      const {data} = await axios.post(backendUrl+'/api/company/post-job', 
        {title, description, location, salary, category, level},
        {headers:{token:companyToken}}
      )
      console.log(data)

      if(data.success){
        toast.success(data.message)
        setTitle('')
        setSalary(0)
        quillRef.current.root.innerHTML = ""
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    // initiate qill onl once
    if (!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current,{
        theme:'snow',
      })
    }
  },[])

  return (
    <form onSubmit={onSubmitHandler} className=' container p-4 flex flex-col w-full items-start gap-3'>
      <div className=' w-full'>
        <p className=' mb-2'>Título da Vaga</p>
        <input className=' w-full max-w-lg px-3 border-2 border-gray-300 rounded' type="text" placeholder='Digite aqui'
          onChange={e => setTitle(e.target.value)}  value={title} 
          required
        />
      </div>

      <div className=' w-full max-w-lg'>
        <p className=' my-2'>Descrição da Vaga</p>
        <div ref={editorRef}></div>
      </div>

      <div className=' flex flex-col sm:flex-row  gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Categoria da Vaga</p>
          <select className=' w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)} >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <p className=' mb-2'>Localização do Emprego</p>
          <select className=' w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)} >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Nível de Experiência</p>
          <select className=' w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)} >
            <option value="Júnior">Júnior</option>
            <option value="Pleno">Pleno</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </div>

      <div>
        <p className=' mb-2'>Salário</p>
        <input min={0} className=' w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e => setSalary(e.target.value)} type="Number" placeholder='3000' />
      </div>

      <button className='w-28 py-3 mt-4 bg-black text-white rounded-lg shadow-md '>ADICIONAR</button>
   
    </form>

  )
}

export default AddJob
