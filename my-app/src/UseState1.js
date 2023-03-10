import React, { useState } from "react";




export function ClickCounter (){
const [counter, setCounter] = useState(0)

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