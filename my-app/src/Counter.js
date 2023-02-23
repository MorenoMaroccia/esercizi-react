import React from "react"
import { UseCounter } from "./Hooks1"

export function Counter({initialValue=0}) {
    const { counter, onIncrement, onDecrement, onReset} = UseCounter(initialValue)
    return (
        <div>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>increment</button>
         <button onClick={onDecrement}>Decrement</button>
         <button onClick={onReset}>Reset</button>
     </div>
    )
    
    

    
}


// counter:counter,
        // onIncrement: handleCounterIncrement,
        // onDecrement: handleCounterDecrement,
        // onReset: handleCounterReset