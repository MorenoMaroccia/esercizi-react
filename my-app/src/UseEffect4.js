import React, { useEffect, useState } from "react";


export function TodoList () {
    const [data, setData] = useState({
         item:'',
        items:['ciao'],
        
    })
        
           
            
        
    // useEffect(()=> {
    //     fetch(`https://api.github.com/users/${data.item}`)
    //     .then((response) => {
    //      return response.json()

    //     .then((json) => {

    //         console.log(json)

    //         setData(json)
    //     })

    // })

    // }, [data.item]);
    
    function handleInputChange(event) {
        setData({item:event.target.value})
    }

    function handleAddItem()  {
        data.items.push(data.item)
        setData({items: data.items, item:'' }); 

        }


        return(

            <div>
                <input onChange={handleInputChange} value={item} />
                <button onClick={handleAddItem}>Add</button>
                <ul>
                {data.items.map((item) => <li key={item}>{item}{data.name}</li>) }
                </ul> 
            </div>
           
        )
    }
