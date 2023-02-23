import { useState }from "react";


export function Hooks2() {

    const [data, setData] = useState({
        username: '',
        password: '',

    })



    function handleInputChange(event) {
        const { name, value, } = event.target;

        setData({
            [name]: [value]
        })
    }

    



    const { username, password } = data
    return (
        <div>
            <input name="username" type="text" value={data.username} onChange={handleInputChange} />
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <button name="button" type="button" >Login</button>
        </div>
    )

}