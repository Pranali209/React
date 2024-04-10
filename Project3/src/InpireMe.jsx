import { useState } from "react";
import qutoes from './qutoes'
import FancyText from "./FancyText";
export default function InpireMe(params) {
    
    const[index ,setIndex] = useState(0)
    const qutoe = qutoes[index]
    return(
        <>
        <FancyText text = {qutoe}/>
        <button onClick={()=>setIndex((index+1)% qutoes.length)}>Inpire Me </button>
        <h6>@2004</h6>
        </>
    )
}

