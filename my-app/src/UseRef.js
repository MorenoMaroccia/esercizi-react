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
    const [data, setData] = useState({
        model:'',
        year:'',
        color:'',
    })

    function handleValueChange(event) {
        //  setData(event.target.value)
         const name=event.target.name
         const value =event.target.value

         setData( {
            [name]: [value]
         })
       
        
    }
    return(
        <div>
            <p> model:{data.model}</p>
            <p> year:{data.year}</p>
            <p>color: {data.color}</p>
           
            <input name="model" value="model"  onChange={handleValueChange} ></input>
            <input name="year" value="year" onChange={handleValueChange} ></input>
            <input name="color" value="color" onChange={handleValueChange} ></input>

        </div>

    )
}