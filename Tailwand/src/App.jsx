import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Component'
function App() {
  const [count, setCount] = useState(0)
  let msg = "Welcome Back"
  let myarr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Welcome To Tailwand</h1>
      <Comp greetings = {msg}/>
    </>
  )
}

export default App
