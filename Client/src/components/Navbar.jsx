import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('user'))
  
  return (
    <div className='bg-[#810CA8] absolute top-0 h-12 w-full text-white flex justify-between items-center px-5'>
        <span className='text-lg font-semibold'>DropBox</span>
        <div className='flex gap-6 items-center'>
        <span>{userInfo.name}</span>
        <span className='border px-2 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer' onClick={()=>{
          localStorage.clear()
          navigate('/login')
        }}>Logout</span>
        </div>
    </div>
  )
}

export default Navbar