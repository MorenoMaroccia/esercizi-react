 import React, { useMemo } from "react"
 
 

 export function FilteredList(props) {

    const list = useMemo(() => {
     return [props.name, props.id, props.age]
    }, [props.name, props.id, props.age]) 
  
  
 


  
    return(
      <p>{props.age >18  && <h1>{list}</h1> }</p>
    )
 }