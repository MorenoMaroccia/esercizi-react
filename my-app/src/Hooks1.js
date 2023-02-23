import  {useState } from "react";


export function UseCounter(initialValue=0) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
   setCounter(c => c + 1)
    };

    function handleCounterDecrement() {
        setCounter(c => c - 1)
         };

    function handleCounterReset() {
        setCounter(initialValue)
    }

    return{
        counter:counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
       

    }
}


// export function UseCounter ({initialValue = 0}){

//   const {counter, onIncrement, onDecrement,onReset} = useCounter(initialValue)


//     return (
//     <div>
//         <h1>{counter}</h1>
//         <button onClick={handleCounterIncrement}>increment</button>
//         <button onClick={handleCounterDecrement}>Decrement</button>
//         <button onClick={handleCounterReset}>Reset</button>
//     </div>
//     )

// }


