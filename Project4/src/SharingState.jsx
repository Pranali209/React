import { useState } from "react";

function SharingState() {
    const[show , setShow] = useState(true);

    return ( 
        <>
        <h1>Shareing is Caring</h1>
        <div style={{width:"50rem", height:"420px" , border:"1px solid blue" ,padding:"10px"}}>
            
             <div style={{width:"45rem", height:"auto" , border:"2px solid black" ,padding:"10px",margin:"5px"}}>
               <h3>About</h3> 
               <p style={{display : show ? "block" : "none"}}>With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.</p>
               <button onClick={()=> setShow(!show)}>Show</button>
             </div>
             <div style={{width:"45rem", height:"auto" , border:"2px solid black" ,padding:"10px", margin:"5px"}}>
               <h3>Etymology</h3> 
               <p style={{display:show ? "none" : "block"}}>The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.</p>
               <button onClick={()=> setShow(!show)}>Show</button>
             </div>
        </div>
        </>
     );
}

export default SharingState;