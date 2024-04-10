import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [c , setC] = useState(0);
  const addValue = ()=>{
    if(c < 12){
      c  = c + 1 ;
      setC(c)
    }
   
  }
  const removeValue = ()=>{
    if (c > 0 ){
      setC(c - 1)
    }  
  }
  // let counter = 0;
  return (
    <>
     <h1>Incremental App</h1>
     <h2>Inital value : {c}</h2>
     <button onClick={addValue}>Add Value</button>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
