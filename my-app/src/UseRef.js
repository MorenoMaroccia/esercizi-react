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

import React,{useState} from "react";


export function CarDetails() {
    const [model, setModel] = useState('Macchina')

    function handleValueChange(event) {
         setModel(event.target.value)
       
        
    }
    return(
        <div>
            <p> {model}</p>
           
            <input value={model} onChange={handleValueChange} placeholder='model'></input>

        </div>

    )
}