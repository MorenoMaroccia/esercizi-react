
import React, { useEffect, useState } from "react";

export function GithubUser({username}) {
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

    }, [username])
    

    
return (
 {data:data}
)
}