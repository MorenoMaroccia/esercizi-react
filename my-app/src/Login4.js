import React from "react";

export class Login4 extends React.Component {
    state = {
        username: "",
        password: "",
        remember:  false
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked
        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    handleResetState = () => {
        this.setState({
        username: "",
        password: "",
        remember:  false
        })
    }

    handleLogin = () => {
        this.props.onLogin(this.state)
    }
 
    componentDidUpdate = () => {
        console.log(this.state);
    }
    
    render() {
        const {username, password} = this.state
        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                <button name="button" type="button" disabled={!username || !password} onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleResetState}>Reset</button>
            </div>
        )
    }
}