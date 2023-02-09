import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import axiosInstance from '../config/baseUrl';

function Signup() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [emailExist, setEmailExist] = useState('')

    const formSubmit = () =>{
        console.log(email,name,password,'ljljl');
        axiosInstance.post('/signup',{
            email,
            name,
            password
        }).then(resp=>{
            console.log(resp)
            let registered = true;
            if(resp.data.userExist) {
                registered = false
                setEmailExist('Email already used')
            }
            if(registered){
                navigate('/login')
            }
        }).catch((error)=>console.log(error))
    }

    const {errors,formError,handleChange,handleSubmit} = useForm(formSubmit)
    
    return (
        <div>
            <section className="bg-[#810CA8] dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1 className="logoAnchor text-6xl flex items-center mb-6 font-semibold text-gray-900 dark:text-white">
                        <span className='text-white'>DropBox</span>
                    </h1>
                    <div className="w-full bg-[#E5B8F4] border border-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl  leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account to save your files...
                            </h1>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                                <div>
                                    <input type="email" name="email" id="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            handleChange(e)
                                            setEmailExist('')
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder='Your Email' />
                                        {errors.email && <small className='text-red-600'>{errors.email}</small>}
                                    {emailExist && <small className='text-red-600'>{emailExist}</small>}
                                </div>
                                <div>
                                    <input type="text" name="name" id="name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                            handleChange(e)
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Full Name" />
                                        {errors.name && <small className='text-red-600'>{errors.name}</small>}
                                </div>
                                <div>
                                    <input type="password" name="password" id="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            handleChange(e)
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password" />
                                        {errors.password && <small className='text-red-600'>{errors.password}</small>}
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                                {formError && <small className='text-red-600'>Please Enter valid Details</small>}
                                <div className='flex justify-center'>
                                    <Link to='/login'>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 cursor-pointer hover:underline">
                                            Already have an account? <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign In</span>
                                        </p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Signup