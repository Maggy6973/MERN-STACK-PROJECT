import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaTachometerAlt, FaUsers, FaBuilding, FaCalendarAlt, FaMoneyBillWave, FaCogs} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className='bg-gray-800 text-white w-64 h-screen fixed left-0 top-0 bottom-0 space-y-2'>
      <div className='bg-teal-600 h-12 flex tems-center justify-center'>
        <h3 className='text-2xl text-center font-pacific'>Employee MS</h3>
      </div>
      <div>
        <NavLink to="/admin-dashboard"
            className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}
            end> 
            <FaTachometerAlt />
            <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin-dashboard/employees"
            className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}> 
            <FaUsers />
            <span>Employees</span>
        </NavLink>
        <NavLink to="/admin-dashboard/departments"
            className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}> 
            <FaBuilding />
            <span>Departments</span>
        </NavLink>
        <NavLink to="/admin-dashboard/leaves"
            className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}> 
            <FaCalendarAlt />
            <span>Leaves</span>
        </NavLink>
        <NavLink to="/admin-dashboard/salary/add"
            className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}> 
            <FaMoneyBillWave />
            <span>Salary</span>
        </NavLink>
        <NavLink to="/admin-dashboard/setting"
            className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}>  
            <FaCogs />
            <span>settings</span>
        </NavLink>
        
        

      </div>
    </div>
  )
}

export default AdminSidebar
