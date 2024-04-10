import { useRef } from 'react';
import { useCallback, useEffect, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const CurrRef = useRef(null)
  const [NumberChecked, setNumberChecked] = useState(false);
  const [CharacterChecked, setCharacterChecked] = useState(false);
  const [password, setPassword] = useState("")

  const PassGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIFKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (NumberChecked) str += "1234567890"
    if (CharacterChecked) { str += "@#$%^&*()" }

    for (let index = 0; index <= length; index++) {

      let i = Math.floor(Math.random() * str.length + 1);
      console.log(i);
      pass += str.charAt(i)
      console.log(str);

    }

    setPassword(pass)
 
  },[NumberChecked, CharacterChecked, length, setPassword])
  useEffect(() => { PassGenerator() }, [NumberChecked, CharacterChecked, length, PassGenerator])
  
  let CopyPassword = useCallback(()=>{
   
    CurrRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className=' w-[700px] h-[250px] bg-red-200  absolute inset-y-10 inset-x-60 px-6'>
        <h1 className='text-center text-cyan-950 text-4xl my-5'>Password Generator</h1>
        <input ref={CurrRef}  className=' w-[500px] h-[50px] bg-slate-200 mb-3 p-2' placeholder='Password' value={password} />
        <button className='p-3 bg-sky-500' onClick={() => CopyPassword()}>Copy</button>
        <input  type="range" min={8} max={50} value={length} onChange={(e) => { setLength(e.target.value) }} />
        <label className='mr-4 ml-1 '>Length:{length}</label>
        <input type="checkbox" defaultChecked={NumberChecked} onChange={() => setNumberChecked((prev) => !prev)} />
        <label className='mr-4'> Numbers </label>
        <input type="checkbox" defaultChecked={CharacterChecked} onChange={() => setCharacterChecked((prev) => !prev)} />
        <label className='ml-1'>Characters</label>
      </div>
    </>
  )
}

export default App
