import React from "react";

export class UncontrolledLogin6 extends React.Component {
   

    handleFormDefault = (event) => {
       event.preventDefault()

       const username = event.target.elements.username.value
       const password = event.target.elements.password.value
       const remember = event.target.elements.remember.checked

       console.log( 
        username,
        password,
        remember,)
    }



  
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleFormDefault}>
                    <input name="username" defaultValue="Mario"  />
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"  />
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
                
            </div>
        )
    }
}