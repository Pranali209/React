import { levelContext } from "./levelContext";
function Section({children ,level}) {
    return ( 
       <section style={{width:"auto", height:"auto" , border:'2px solid Purple' , margin:"2px" , padding:"5px"}}>
        <levelContext.Provider value = {level}>
        {children}
        </levelContext.Provider> 
       
       </section>
    );
}

export default Section;