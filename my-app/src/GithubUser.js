import React from "react";
import { UseGithubUser } from "./Hooks3";


export function GithubUser(username) {
    const {data, useEffect} = UseGithubUser()

    return (
        <div>
            {data && <h1>{data.name}</h1>}
        </div>
    )
}

{/* <img src={data.avatar_url} /> */}