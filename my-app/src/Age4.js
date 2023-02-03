import React from 'react'
import { Name } from './Name'



export class Age4 extends React.Component{


    render () {
        return (
        <div>
            <Name name='john' />
        {this.props.age > 18 && this.props.age < 65 && this.props.name === "John" && 
        <p>Your age is, {this.props.age}</p>}
        </div>)
    }

}