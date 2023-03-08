import React from "react";
import { GithubUser } from "./Hooks3";


export function GithubUsers({username}) {
    const {data} = GithubUser({username})


    return (
        <div>
            {data && <h1>{data.name} <img src={data.avatar_url} /></h1>}
        </div>
    )
}
