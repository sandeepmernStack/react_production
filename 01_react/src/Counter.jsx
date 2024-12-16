import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [counter, setCounter] = useState(0);
    function addValue (){
        setCounter(counter+1)
    }
    function removeValue (){
        if(counter>0) setCounter(counter-1)
    }
  return (
    <div>
       <h1>Value Is {counter}</h1>
       <button onClick={addValue}>Add Value</button>
       <button onClick={removeValue}>Remove Value</button>
    </div>
  )
}

export default Counter