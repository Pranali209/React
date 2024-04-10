import React from 'react';

function Comp({greetings}) {
    
    return (  
        <div className='w-50 h-70 bg-orange-500 p-5 ' >
        <h2>{greetings}</h2>
        <img src='https://images.pexels.com/photos/17066896/pexels-photo-17066896/free-photo-of-minimalistic-interior-design.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' className='w-50 h-60 m-3'/> 
    </div>
    );
}

export default Comp;