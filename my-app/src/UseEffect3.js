import React, { useEffect, useState } from "react";

export function GithubUser({username}) {
    const [data, setdata] = useState({})

    useEffect(()=> {
        fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
         return response.json()

        .then((json) => {

            console.log(json)

            setdata(json)
        })

    })

    }, {username})
    

    
return (
    <div>
        {data && <h1>{data.name}<img src={data.avatar_url} /></h1>}
    </div>
)
}