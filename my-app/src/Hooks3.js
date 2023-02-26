

import React, { useEffect, useState } from "react";
import { GithubUser } from "./UseGithubUser";

export function Hooks3(username) {
    const { data} = GithubUser(username)
    
    
return (
    <div>
        {data && <h1>{data.name}<img src={data.avatar_url} /></h1>}
    </div>
)
}