import { useState } from "react"

export default function ChangeColor(params) {
    const initialpostion = {
        x: 0, y: 0,initialX:0 , initialY:0
    }
    const [properties, setProperties] = useState({
        color: "orange",
        pos: initialpostion
    })
    function handleMove(e) {
        if (properties.pos.initialX) {
            setProperties(prevstate =>( {
                ...prevstate,
                pos: {
                    ...prevstate.pos,
                    x: prevstate.pos.initialX - e.clientX,
                    y: prevstate.pos.initialY - e.clientY
                }
            }))
        }
    }
    function handlePointerUp(e) {
        setProperties(prevstate =>({
            ...prevstate,
            pos: {
                ...prevstate.pos,
                initialX: 0,
                initialY: 0
            }
        }));
        
    }
    function handlePointerDown(e) {
        setProperties(prevstate=>({
            ...prevstate,
            pos: {
                ...prevstate.pos,
                initialX: e.clientX,
                initialY: e.clientY
            }
        }));
    }
    return (
        <>
            <select name="" id="">
                <option value={1}>Purple</option>
                <option value={2}>Yellow</option>
                <option value={3}>Blue</option>
            </select>
            <div style={{ width: "10rem", height: "15rem", border: "1px solid blue", position: "relative" }}>
                <div style={{
                    width: "5rem", height: "5rem", border: "1px solid black", backgroundColor: properties.color,
                     position: "absolute" , 
                     transform: `translate(${properties.pos.x}px, ${properties.pos.y}px)`
                }}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerMove={handleMove}
                >Drag Me</div>
            </div>
        </>
    )
}