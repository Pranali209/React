import { useState } from 'react'
import { sculptureList } from './data.js'

export default function DisplaySlupture(params) {
    const [index, setIndex] = useState(0);
    const [show , setShow] = useState(false)
    const data = sculptureList[index]
    return (
        <div style={{width:"auto" , height:"auto" ,border:"1px solid black" , padding:"20px" }}>
             
             <h1 style={{textAlign:"center"}}>{data.name}</h1>
             <img src = {data.url} style={{margin:"auto 450px"}}/>
             <button onClick={()=>setShow(!show)}>{show ? "Hide": "Show"}</button>
             <p>{show ? data.description: ""}</p> 
             <button onClick={()=>setIndex((index+1) % sculptureList.length)}>Next</button>
             <h4 style={{textAlign:"center"}}>{index + '/' +sculptureList.length}</h4>
        </div>

    )

}