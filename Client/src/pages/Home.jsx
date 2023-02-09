import React, { useEffect } from 'react'
import FileViewer from '../components/FileViewer'
import Navbar from '../components/Navbar'

function Home() {

  useEffect(() => {
    const getFiles = () =>{
      
    }
    getFiles()
  }, [])
  
  
  return (

    <div className='relative'>
        <Navbar/>
        <FileViewer/>
    </div>
  )
}

export default Home