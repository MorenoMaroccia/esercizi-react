import React from 'react'


export class Age5 extends React.Component{



    render () {
        return (
        <div>

        <p>{this.props.age > 18 && this.props.age < 65 ? <p>Your age is, {this.props.age}</p> : <p>You are very young!</p>}</p>
        </div>)
    }

}