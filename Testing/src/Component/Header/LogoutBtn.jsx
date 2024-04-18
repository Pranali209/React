import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../Appwrite/Auth'
import { Logout as storeLogout } from '../../store/AuthSlice'
function LogoutBtn() {
    const dispatch = useDispatch()
    const handleSubmit = () => {
        authservice.LogOut().then(() => {
            dispatch(storeLogout())
        })
       
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-lg text-black text-lg'
        onClick={handleSubmit}>LogOut</button>
    )
}

export default LogoutBtn
