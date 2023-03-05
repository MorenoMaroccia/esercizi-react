// import React,{useState} from "react";


// export function CarDetails() {
//     const [data, setData] = useState({
//         model: '',
//         year: '',
//         color:''

//     })

//     function handleValueChange(event) {
//         // setData(event.target.value)
//         const name =event.target.name
//         const value = event.target.value;
        
//         setData({
//             [name]: value,
//         })

      
        
//     }
//     return(
//         <div>
//             <h1>model, {data.model}</h1>
//             <h1>year, {data.year}</h1>
//             <h1>color, {data.color}</h1>
//             <input value={data.model} onChange={handleValueChange} placeholder='model'></input>
//             <input value={data.year} onChange={handleValueChange} placeholder='year'></input>
//             <input value={data.color} onChange={handleValueChange} placeholder='color'></input>

//         </div>

//     )
// }

import React,{useEffect, useRef, useState} from "react";


export function CarDetails() {
    const [data, setData] = useState({
        model:'',
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
             <h1> model:{data.model}</h1>
            <h1> year:{data.year}</h1>
            <h1>color: {data.color}</h1>
           
            <input  value={data.model}  onChange={handaleInputChange} ref={inputRef} ></input>
            <input  value={data.year} onChange={handaleInputChange} ref={inputRef}></input>
            <input  value={data.color} onChange={handaleInputChange} ref={inputRef}></input>

        </div>

    )
}