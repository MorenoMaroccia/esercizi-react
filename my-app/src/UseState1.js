import React, { useState } from "react";




export function ClickCounter ({initialValue = 0}){
const [counter, setCounter] = useState(initialValue)

 function handleCounterIncrement() {
   setCounter(c => c + 1)
    };
  
    return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleCounterIncrement}>increment</button>
    </div>
    )

}

ClickCounter.defaultProps = {
incrementBy:1,
initialValue:0,
}

export default ClickCounter