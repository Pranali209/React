import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (
 <div className='w-screen h-screen' style={{backgroundColor:color}}>
      <div className='fixed bottom-7 left-96 right-96'>
           <div className='w-70 h-15 bg-white  flex  flex-wrap justify-center items-center p-1 '>
            <button className='p-1 outline-none  m-1'style={{backgroundColor:"red", color:"white"}} onClick={()=>{setColor("red")}}>Red</button>
            <button className='p-1 outline-none  m-1'style={{backgroundColor:"Green" , color:"white"}} onClick={()=>{setColor("green")}}>Green</button>
            <button className='p-1 outline-none  m-1'style={{backgroundColor:"Blue" , color:"white"}} onClick={()=>{setColor("Blue")}}>Blue</button>
            <button className='p-1 outline-none  m-1'style={{backgroundColor:"Orange", color:"white"}} onClick={()=>{setColor("Orange")}}>Orange</button>
            <button className='p-1 outline-none  m-1'style={{backgroundColor:"Pink", color:"white"}} onClick={()=>{setColor("Pink")}}>Pink</button>

           </div>

      </div>
 </div>
    // Y writing a callback on  onclick function ? bcoz onclick needs a function though setColor is function 
    // but as we want to pass a parameter to a function we cant Write  setColor() bcoz its like executing the function and giving the return 
    // value to the onclick function which is wrong so we are giving a callback . 

  )
}

export default App
