import { useState } from "react"

export function getUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
export default function Profile({person}) {
   const[clicked , setClicked] = useState(true)
return(
    <div style={{width:"250px" , height:"300px" , border:"1px solid black"}}>
        <button onClick={()=>{setClicked(!clicked)}}>{clicked ? "Expand" : "Collapse"}</button>
        {
            clicked ? null :
            (
                <div>
                    <img src= {getUrl(person)}/>
                     <h2>{person.name}</h2>
                </div>


            )
            
        }
        
    </div>

)
    
}