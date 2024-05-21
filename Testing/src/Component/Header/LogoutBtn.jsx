import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authservice from '../../Appwrite/Auth'
import { Logout as storeLogout } from '../../store/AuthSlice'
import { useNavigate } from 'react-router-dom'
function LogoutBtn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        authservice.LogOut().then(() => {
            dispatch(storeLogout())
             
             navigate()
        })
       
    }
    return (
        <button 
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-lg text-black text-lg'
        onClick={handleSubmit}>LogOut</button>
    )
}

export default LogoutBtn
