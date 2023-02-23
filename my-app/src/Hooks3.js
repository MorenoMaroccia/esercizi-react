import React, { useEffect, useState } from "react";

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

    }, {username})
    

    
return (
    <div>
        {data && <h1>{data.name}<img src={data.avatar_url} /></h1>}
    </div>
)
}

export default UseGithubUser