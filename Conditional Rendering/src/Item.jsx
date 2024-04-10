import React from "react";

export default function Items({item , isPacked}) {
    return( 
        isPacked ? <li>{item}✅</li> : <li>{item}</li>
        
    )
    
    
}