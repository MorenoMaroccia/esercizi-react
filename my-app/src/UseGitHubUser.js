



import React, { useEffect, useState } from "react";
import { UseGithubUser } from "./UseGitHubUser";

export function GithubUser({username}) {
    const {username} = UseGithubUser(username)
    
useEffect(() => {
    fetchGithubUser(username)
})
    
return (
    <div>
        {data && <h1>{data.name}<img src={data.avatar_url} /></h1>}
    </div>
)
}