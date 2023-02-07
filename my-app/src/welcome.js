import React from 'react'
import Age5 from './Age5'

export class Welcome extends React.Component{
    render () {
        return (
        <div>
            <p>Welcome, {this.props.name}</p>
            <Age5 age={22}/>
            </div>)
    }

}

export default Welcome