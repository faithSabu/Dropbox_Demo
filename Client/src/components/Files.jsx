import React from 'react'
import {FaRegEdit,FaTrashAlt} from "react-icons/fa";

function Files() {

         
    return (
        <div className='w-[60%] min-h-[60%] bg-blue-300 border border-black rounded-lg px-2'>
            <div className='flex justify-center py-2 items-center'>
                <span className='font-medium'>Uploaded Files </span>
            </div>
            <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-center bg-white px-3 py-2 rounded-lg hover:bg-purple-100'>
                <div>
                    <div>
                        <span>file name</span>
                    </div>
                    <div>
                        <small>created at</small>
                        <small>updated at</small>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button className=' px-2 py-1 rounded-sm text-xl hover:text-gray-600'><FaRegEdit/></button>
                    <button className=' px-2 py-1 rounded-sm text-xl hover:text-gray-600'><FaTrashAlt/></button>
                </div>
            </div>
            <div className='flex justify-between items-center bg-white px-3 py-2 rounded-lg hover:bg-purple-100'>
                <div>
                    <div>
                        <span>file name</span>
                    </div>
                    <div>
                        <small>created at</small>
                        <small>updated at</small>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button className=' px-2 py-1 rounded-sm text-xl hover:text-gray-600'><FaRegEdit/></button>
                    <button className=' px-2 py-1 rounded-sm text-xl hover:text-gray-600'><FaTrashAlt/></button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Files