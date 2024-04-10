export default function MovingCircle(params) {
    const [postion, setPostion] = useState({
        x:0,y:0
      })
    
      return (
        <>
         <div onPointerMove={(event)=>{setPostion({
           x :  event.clientX ,
           y :  event.clientY 
         });
         }}style={{width:"100vw" , height:"100vh" , border:"1px solid black", position:"relative"}}
         >
             <div style={{width:"1rem" , height:"1rem" , position:"absolute", backgroundColor:"blue", borderRadius:"50%",
             transform: `translate(${postion.x}px, ${postion.y}px)`}}></div>
          </div> 
         
        </>
      )
}