import React, { useEffect, useState } from "react";




export function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
      const interval= setInterval(() => {
        setCounter(c => c + 1)
       },1000)
       return () => clearInterval(interval)
    }, [counter])


    
  
      return (
      <div>
        <h1>{counter}</h1>
      </div>
      )

}


