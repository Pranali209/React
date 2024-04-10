import { useState } from "react";

function Quiz() {

    const [answer, setAnswer] = useState('')
    const [typing, setTyping] = useState(false)
    const [message ,setMessage] = useState('')
    const CorrectAnswer = "due to scattering of light"
    function handleSubmit(params) {
        
        setAnswer('')
        setTyping(false)
        
        
        setTimeout(() => {
            if (answer.toLowerCase === CorrectAnswer) {
           
              setMessage( <h2 style={{color:"green"}}>Correct Answer!</h2> ) 
             
                
            }
            else {
              
               setMessage(<h2 style={{color:"red"}}>Nice Try :But wrong answer</h2>) 
            }

        }, 3000);
    }
 

    function handleChange(e) {
        setMessage('')
        setAnswer(e.target.value);
        setTyping(true);
        if (e.key === 'Enter') {
            setTyping(false)
        }
    }
    return (
        <>
            <h1>Why is the sky Blue ? </h1>
            <textarea cols="30" rows="10" value={answer} onChange={handleChange} ></textarea><br />
            <button onClick={handleSubmit} disabled={typing ? false : true}>Submit</button>
           {message}
        </>
    );
}

export default Quiz;