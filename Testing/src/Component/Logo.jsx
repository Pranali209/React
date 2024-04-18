import React from 'react'
import LogoImage  from '../assets/LogoImage.png'
function Logo({width = "30px"}) {
  
    return (
        <img src= {LogoImage} alt="" className='w-10 rounded-md ml-2' />
      )
}

export default Logo
