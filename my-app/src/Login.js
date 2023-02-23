import React from "react"
import { Hooks2 } from "./Hooks2"

export function Login({initialValue=0}) {
    
    const { username, password,handleInputChange } = Hooks2()
    return (
        <div>
            <input name="username" type="text" value={username} onChange={handleInputChange} />
            <input name="password" type="password" value={password} onChange={handleInputChange} />
            <button name="button" type="button" >Login</button>
        </div>
    )

    
    

    
}