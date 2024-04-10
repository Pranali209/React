import { useState } from "react"

export default function Buyer(){
const[pending , setPending] = useState(0);
const[completed , setCompleted] = useState(0);
function HandleBuyProduct(params) {
    // note dat as pending value depends opon the previous pending value hence  we used a callback to update it.
    // next wen u press the  buy button for multiples times its might only  add 1 to pending  
    //bcoz it React batches the updates 
    setPending(pending => pending+1)
    setTimeout(()=>{
        setCompleted(completed =>completed + 1)
        if(pending>=0){
              setPending(pending =>pending-1)
        }
      
    },2000)
}
    return(
        <>
        <h2>Pending:{pending}</h2>
        <h2>Completed:{completed}</h2>
        <button onClick={HandleBuyProduct}>Buy</button>
        </>
    )
}