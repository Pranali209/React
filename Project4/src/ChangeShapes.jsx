import { useState } from "react";
let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];
export default function ChangeShapes(params) {
     const[shapes ,setShapes] = useState(initialShapes)
  function handleClick(params) {
    setShapes(
      shapes.map((shape)=> 
      shape.type === 'circle' ? {...shape , y :shape.y +20} :shape
    ))
  }

      return(
        <>
        <button onClick={handleClick}>Move Circle</button>
        {shapes.map((shape)=>{

            return(
                <div  key={shape.id} style={{
                    position:'absolute',
                    left : shape.x,
                    top: shape.y,
                    width:50,
                    height:50,
                    borderRadius:
                   shape.type === 'circle'  ? '50%' : '' ,
                   backgroundColor: "orangered",
                }}>
                  
                </div>
            )

        })}
      


        </>
      )
}