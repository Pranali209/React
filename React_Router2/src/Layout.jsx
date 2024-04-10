import React from 'react'
import Home from '../../React_Router/src/Component/Home/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
       <Outlet/>

        </>
    )
}

export default Layout
