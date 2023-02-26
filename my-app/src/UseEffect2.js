import React, { useEffect, useState } from "react";




export function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
      const interval= setInterval(() => {
        setCounter(c => c + 1)
       },1000)
       return () => clearInterval(interval)
    }, [counter])


    // function a() { return (setInterval(() => {
    //        setCounter(c => c + 1)
    //       },1000))
    //     }



//   constructor(props){
//     super(props)
//     setInterval(() => {
//       this.setState((state) => {
//         return{
//           count:state.count + 1 
//       }
//       })
//     },1000)
//   }
  
      return (
      <div>
        <h1>{counter}</h1>
      </div>
      )

}


