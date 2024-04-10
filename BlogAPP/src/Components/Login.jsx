import React from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { AuthService } from '../AppWrite/Auth'
import { Login as StoreLogin } from '../Store/slice'
import  Input  from '../Components/Input'
import  Button from '../Components/Button'
 
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // useform is the  hook that we will use to handle our forms in react. to hadle  validation and form data 
    // we usually get 2 things from useform  : register and handleSubmit 
    // register is used for handling the data  of each input field , 
    // while handleSubmit is fuction which take another function as a input this function is always as onSubmit event
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    
    const login = async (data) => {
        setError('')
        try {
            const session = await AuthService.Login(data)
            if (session) {
                const userData = await AuthService.getCurrentUser()
                if (userData) dispatch(StoreLogin(userData))
                navigate("/")
            }

        } catch (error) {
            setError(error)
        }

    }
    return (
        <div
            className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                    <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup"   className="font-medium text-primary transition-all duration-200 hover:underline">
                       Sign Up
                    </Link>
                    </p>
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                  <form className='mt-8'  onSubmit={handleSubmit(login)}>
                  <div className='space-y-5'>
                    <Input label = "Email:"
                    type = "email"
                    placeholder="Enter your email"
                    {...register("email" , {
                        required : true,
                        validate:{
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}/>
                    <Input 
                    label = "Password:"
                    type = 'password'
                    placeholder= "Enter your password"
                    {...register("password" , {
                        required:true
                    })}
                    />
                    <Button type='submit' className="w-full">Sign In </Button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    )
}

export default Login
