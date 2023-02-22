import React, { useEffect, useState } from "react";




export function Counter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        console.log(a)
    }, [counter])


    function a() { return (setInterval(() => {
           setCounter(c => c + 1)
          },1000))
        }



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

