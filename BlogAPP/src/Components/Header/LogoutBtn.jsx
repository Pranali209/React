import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../AppWrite/Auth'
import { Logout } from '../../Store/slice'
function LogoutBtn({}) {

    const dispatch = useDispatch()

    function handleSubmit(params) {
        authservice.LogOut().then(
            () => dispatch(Logout())
        )
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={handleSubmit}>LogOut</button>
    )
}

export default LogoutBtn
