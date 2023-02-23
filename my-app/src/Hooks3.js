import { useEffect, useState } from "react";

export function UseGithubUser({username}) {
    const [data, setdata] = useState(null)

    useEffect(()=> {
        fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
         return response.json()

        .then((json) => {
            console.log(json)
            setdata(json)
        })

    })

    })

    return{
        data:data.name,
        username:username
    }
    
    // return (
    //     <div>
    //         {data && <h1>{data.name}</h1>}
    //     </div>
    // )
        
}