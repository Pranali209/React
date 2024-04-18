import { useId } from "react"
import React from "react";
const Input = React.forwardRef(function Input({label , type =" text" , classname = '' , ...props} , ref) 
{
    const Id = useId();
  return(
    <div  className='w-full'>
        {label &&  <label className='inline-block mb-1 pl-1 text-lg' htmlFor={Id}>{label}</label>}
        <input 
        type = {type}
        id={Id} 
        className={`${classname} px-3 py-2 p-2  bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `} 
        ref = {ref}
        {...props}/>
    </div>
  )
})
export default Input