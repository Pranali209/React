import { useContext } from "react";
import { levelContext } from "./levelContext";
function Section2({isFancy , children}) {
    const level = useContext(levelContext)
    return ( 
        <section style={{width:"auto" , height : "auto", border : isFancy ? "2px dotted orange" : "1px solid blue" }}>
            <levelContext.Provider value={level+1}>{children}</levelContext.Provider>
        </section>
     );
}

export default Section2;