import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Items from './Item'


export default function App() {
  const [text, setText] = useState('')
  const [txtSent, settxtSent] = useState(false)
  const ref  = useRef(null)
  function HandleSent() {
    settxtSent(!txtSent)
   ref.current =  setTimeout(() => {
      alert("message sent successfully")
    }, 2000)
    
  }
  function UndoHandleSent(params) {
    settxtSent(!txtSent)
    clearTimeout(ref.current);
  }
  return (
    <>
      <input type="text" onChange={(e) => { setText(e.target.value) }} value={text} />
      <button onClick={HandleSent}  disabled={txtSent}>{txtSent ? "Sending..." : "Sent"}</button>
      {txtSent ? (
      <>
  
        <button onClick={UndoHandleSent}>Undo</button>
      </>
      ) : null}

    </>
  )
}