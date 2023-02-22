import React, { useEffect, useState } from "react";





export function ClickCounter1 ({initialValue = 0}){

const [counter, setCounter] = useState(initialValue)

useEffect(() => {
    console.log(`the counter is now ${counter}`)
}, [counter])

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

ClickCounter1.defaultProps = {
incrementBy:1,
initialValue:0,
}

