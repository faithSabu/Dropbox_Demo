import React, { useEffect, useState } from 'react'
import Files from './Files'
import { MdFileUpload } from "react-icons/md";
import axiosInstance from '../config/baseUrl';

function FileViewer() {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('')
    const [uploadedFile,setUploadedFile] = useState({})

    const handleChange = (e) => {
        setFile(prev=>{
            handleSubmit(e.target.files[0])
            return e.target.files[0]
        })
    }

    const handleSubmit = async(fileInfo) =>{
        const formData = new FormData()
        formData.append('file',fileInfo)

        try {
            const resp = await axiosInstance.post('/upload',{
                formData,
                userId:userInfo._id
            },{
                headers:{
                    'Content-Type': 'multipart/form-data'
                },
                
            })
            const {fileName,filePath} = resp.data
            setUploadedFile({fileName,filePath})
        } catch (err ) {
            
        }
    }

    return (
        <div className='h-[100vh] bg-[#E5B8F4] flex flex-col items-center justify-center gap-5'>
            <input type="file" id='fileUpload' onChange={handleChange} hidden />
            <label htmlFor="fileUpload">
                <span className='border w-max px-5 py-1 bg-blue-800 text-white flex items-center gap-2 rounded-md cursor-pointer'>
                    <div className='flex gap-2 items-center'>
                        <span>Upload File</span>
                        <span className='text-2xl'><MdFileUpload /></span>
                    </div>
                </span>
            </label>
            <Files />
        </div>
    )
}

export default FileViewer