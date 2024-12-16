import React, { useState } from 'react'
import './style.css'
const Bgchanger = () => {
    const [color, setColor] = useState("olive")
  return (
    <div className='main-container' style={{backgroundColor:color}}>
       <div className="buttons-container">
          <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("cyan")} style={{backgroundColor:"cyan"}}>Cyan</button>
          <button onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
       </div>
    </div>
  )
}

export default Bgchanger