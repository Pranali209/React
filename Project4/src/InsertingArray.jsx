import { useState } from "react";
let nextId = 6
function InsertingArray() {
    const[name , setName] = useState('')
     const [data ,setData] = useState([
        {id:1, name:"John"},
        {id:2,name:"Jane"},
        {id:3,name:"Alice"},
        {id:4,name:"Bob"},
        {id:5,name:"Eve"},
        {id:6,name:"Ross"} 
         ]);

         function handleAdd(params) {
            setName(" ")
            setData([
             
                ...data , 
                {id: nextId++ , name:name}
            ]
                
            )
         }
         function handleReverse(params) {
            const NewData = [...data].reverse();
             setData(NewData)
         }
    return (  
        <>
        <h1>Add Ur Name If Intrested</h1>
           <input type="text" placeholder="Type ur Name"  value = {name} onChange={(e)=> setName(e.target.value)} />
           <button onClick={handleAdd}>Add</button>
           <button onClick={handleReverse}>Reverse</button>
           {data.map((person)=>(
            <li>{person.name}</li>
           ))}
        </>
    );
}

export default InsertingArray;