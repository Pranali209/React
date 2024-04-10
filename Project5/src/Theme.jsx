import { useContext, useState } from "react";
import Heading from "./Heading";
import { DarkTheme } from "./DarkTheme";
// wen passing the  state variable and  setter function to the context  while accessing it in child components always remember that they are not array but and object
// i.e  const {theme , setTheme} = useContext(DarkTheme) the retrun value of useContext is object but not and array unlike usestate
function Theme() {
   
    const [theme , setTheme] = useState(false)
    return ( 
        <>
        <DarkTheme.Provider value = {{theme , setTheme}} >
        <Form/>
        </DarkTheme.Provider> 
        </>
     );
}
function Button({text}) {
    const {theme , setTheme} = useContext(DarkTheme)
    
    return(
       <button onClick={()=>setTheme(!theme)} >{text}</button>
    )
    
}
function Form() {
    const {theme , setTheme}  = useContext(DarkTheme)
    return(
        <div style={{backgroundColor : theme ? "black" : "azure"  , width:"100vw"}}  >
           <center>
           <Heading>Welcome Back !</Heading>
           <img src="https://img.freepik.com/free-vector/happy-tiny-people-near-huge-welcome-word-flat-illustration_74855-10808.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1710115200&semt=ais"/>
           <br/>
           <Button text = "Click for a Dark Theme"/>
           </center>
        </div>
      
    )
}
export default Theme;