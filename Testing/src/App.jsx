import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header  , Footer }from './Component/index'


function App() {

  

 
  return (

    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-r from-purple-500 to-blue-500 text-black  '>
      <div className='w-full '>
        <Header/>
        <main className='h-auto'>
         <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) 


}

export default App
