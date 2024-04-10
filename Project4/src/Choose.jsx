import { useState } from "react";
const Data = [
    {id: 1, name: "John Doe", age: 32 },
    {id: 2, name: "Jane Smith", age: 45 }, 
    {id:3 , name: 'Tom Brown',age:67},
    {id:4 ,name:'Harry Potter',age:19},
    {id:5 , name:'Peter Potter' , age:47}
  
]
function Choose() {
    const[info , setInfo] = useState(Data)
    const[selected , setSelected] = useState('')
    function handleClick(person) {
      
     setSelected(person.name)
                  
    }
    function handleInputClick(data) {
        setInfo( info)
    }
    return ( 
        <>
        {
           info.map((person)=>{
            return(
                <div>
                <input type="text" style={{display:"inline-block"}} value={person.name} onChange={()=>handleInputClick(person)}/>
                <button onClick={() => handleClick(person)}>Choose</button>
                </div>  
            )
            
           } )
        } 
           <h3> You Picked {selected}</h3>
        </>
     );
}

export default Choose;