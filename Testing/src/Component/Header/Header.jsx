import React from 'react'

import { Link } from 'react-router-dom'
import  LogoutBtn  from './LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../Logo'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: authStatus
    }, 
    {
        name : 'Login',
        slug :"/login",
        active :!authStatus
    },
    {
        name : "SignUp" ,
        slug :"/signup",
        active :!authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    }

  ]



  return (
    <header className='py-3 px-3 shadow bg-gradient-to-r from-purple-500 to-blue-500 text-white'>
        <nav className='flex items-center'>
          <div className='mr-6'>
            <Logo width='20%'/>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
               <Link
                    to={item.slug} // Use Link for navigation
                    className='inline-bock px-6 py-2  duration-200 hover:bg-blue-100 rounded-full text-black text-xl'
                  >
                    {item.name}
                  </Link>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
           
          </ul>
        </nav>
    
    </header>
  )
}

export default Header