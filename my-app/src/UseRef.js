

import React,{useEffect, useRef, useState} from "react";


export function CarDetails() {
    const [date, setData] = useState({
        model:'ciao',
        year:'',
        color:'',
    })

    const inputRef = useRef(null)

        
    function handaleInputChange(event) {
        setData(event.target.value)
    }
        

    useEffect(() => {
        inputRef.current.focus()
    }, [])
       
        
    
    return(
        <div>

             <h1> model:{date.model}</h1>
            <h1> year:{date.year}</h1>
            <h1>color: {date.color}</h1>
           
            <input  value={date.model}  onChange={handaleInputChange} ref={inputRef} ></input>
            <input  value={date.year} onChange={handaleInputChange} ref={inputRef}></input>
            <input  value={date.color} onChange={handaleInputChange} ref={inputRef}></input>

        </div>

    )
}