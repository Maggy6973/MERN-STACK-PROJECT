import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/authContext';

const Setting = () => {
   const navigate = useNavigate();
   const {user} = useAuth();
   const [setting, setSetting] = useState({
    userId: user._id,
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
   })
   const [error, setError] = useState(null);

   const handleChange = (e) => {
    const {name, value} = e.target;
    setSetting({ ...setting, [name]: value });
   }

    const handleSubmit = async (e) => {
    e.preventDefault();
    if(setting.newPassword !== setting.confirmPassword) {
      setError("Password not matced");
    }else {
        try {
            const response = await axios.put(
                "https://mern-stack-project-backend-psi.vercel.app/api/setting/change-password",
                setting,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            if(response.data.success) {
                navigate("/admin-dashboard/employees")
                setError("")
            }
        } catch (error) {
            if(error.response && !error.response.data.success) {
                setError(error.response.data.error);
            }
            
        }
    }
    
  }

  return (
     <div className='max-w-3xl mx-auto mt-10 p-8 bg-white shadow-md rounded-md w-96'>
      <h2 className='text-2xl font-bold mb-6'>Change Password</h2>
      <p className='text-red-500'>{error}</p>
      <form onSubmit={ handleSubmit}>
        
           {/* Department Name */}
            <div>
                <label className='text-sm font-medium text-gray-700'> Old Password</label>
                <input 
                type="password" 
                name='oldPassword' 
                onChange={handleChange}
                placeholder='Change Password' 
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                required 
                />
            </div>

            
            <div >
                <label className='text-sm font-medium text-gray-700'> New Password </label>
                <input 
                type="password" 
                name='newPassword' 
                onChange={handleChange}
                placeholder='New Password' 
                className='mt-1 p-2  w-full border border-gray-300 rounded-md'
                required 
                />
            </div>

            <div>
                <label className='text-sm font-medium text-gray-700'>Confirm Password</label>
                <input 
                type="password" 
                name='confirmPassword' 
                onChange={handleChange}
                placeholder='Confirm Password' 
                className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                required 
                />
            </div>

            
       

         <button
            type='submit'
            className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md'
            >
              Change Password
            </button>

      </form>
    </div>
  )
}

export default Setting
