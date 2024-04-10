
import { useRef } from 'react'
import First  from './First.jsx'
import VideoPlay from './VideoPlay.jsx'
function App() {

  const inputRef = useRef(null)
  const ClickMe = () =>{

    console.log(inputRef.current.focus());
  }
  return (
   <>
     {/* <div>
       <h2>UseRef Hook Learining</h2>
     <input type="text"  ref={inputRef}/>
      <button onClick={() => ClickMe()} > Focus the input </button>
    </div>
   <First/> */}
   <VideoPlay/>
   
    </>
  )
}

export default App
