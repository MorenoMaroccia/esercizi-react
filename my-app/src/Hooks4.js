

import React, { useEffect, useState } from "react";

export function GithubUser({username}) {
    const [data, setdata] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)


    async function fetchGithubUser(username) {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json= await response.json()
            
        } catch (error) {
            setError(error)
            setdata(null)
        }finally {
            setLoading(false)
        }
    }

}

// useEffect(()=> {
//    ferchGithubUser(username)
//     }, [username])



// }, {username})
