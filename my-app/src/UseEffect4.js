import React, { useEffect, useState } from "react";
import {GithubUser} from "./UseEffect3"


export function GithubUserList () {
    const [list, setList] = useState([])
    const [username ,setUsername] = useState('')

    const adUsername = () => {
        setList((list)=> [...list, username] )
    }

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }
        return(

            <div>
                <input onChange={changeUsername} value={username} />
                <button onClick={adUsername}>Add</button>
                <ul>
                    {!!list.length > 0 && list.map((user) => <li key={user}><GithubUser username={user}/></li>)}
                </ul> 
            </div>
           
        )
    }
