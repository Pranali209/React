import React, { useRef, useState } from 'react';
function VideoPlayer() {
    const [recentState , SetrecentState ] = useState(false) ;
    const CurRef = useRef(null);
    
    const PlayVideo = (index) => {
        if(index == 1) SetrecentState(true)
        else SetrecentState(false)
       
        if(recentState == true)
        {
            CurRef.current.play()
        }
        else{
            CurRef.current.pause();
        }
    }
    return ( 
        <div style={{display:"flex", justifyContent:"center" ,alignItems:"center", flexDirection:"column"}}>
            <h1>Video Player with useRef Hook</h1>
            <button style={{margin : "10px", padding : "10px", backgroundColor :"coral" }} onClick={() => PlayVideo(1)}>Play</button>
            <button style={{margin : "10px", padding : "10px", backgroundColor :"coral"}} onClick={() => PlayVideo(0)}>Pause</button> <br></br>
            <video width='450' style={{border : "6px solid blue"}}   ref={CurRef}  onPause={()=>SetrecentState(false)}><source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4" 
        /></video>
        </div>
     );
}

export default VideoPlayer;
