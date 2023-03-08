import  {useCallback, useState } from "react";


export function UseCallback() {
    const [counter, setCounter] = useState(0)

    const handleCounterIncrement = useCallback(
       function handleCounterIncrement() {
        setCounter(c => c + 1)
    }, [])
    

    const handleCounterDecrement = useCallback(
        function handleCounterDecrement() {
         setCounter(c => c - 1)
     }, [])

    const handleCounterReset= useCallback( function handleCounterReset() {
        setCounter(0)
    }, [0])
return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleCounterIncrement}>increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
    </div>
    )
    
}



    

