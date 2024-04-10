import { useState } from "react";
let nextId =  0;

export default function AddingDeleting() {
    const[items, setItems] = useState([])
    const [name , setName] = useState('')
    
  

  function handleDelete(id) {
      
       const filterArray = items.filter(item => item.id !== id)
      
       setItems(filterArray);
  }
    // Add item to list
    return(
        <div>
            <input type="text" name="textbox" onChange={(e)=> setName(e.target.value)} />
            <button onClick={()=>{  setName(' ');
                setItems( 
                [...items , 
             {id : nextId++ , value : name}
                ]
            )
          
        }
            }>ADD</button>

            {items.map((ele)=>{
                console.log(ele)
                return(
                    <>
                    <li key={ele.id}>{ele.value}</li>
                    <button onClick={()=>handleDelete(ele.id)}>delete</button>
                    </>
                    
                )
            })}
        </div>
    )
}