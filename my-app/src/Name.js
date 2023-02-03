import React from 'react'


export class Name extends React.Component{


    render () {
        return (
        <div>

        {<p>Your name is, {this.props.name}</p>}
        </div>)
    }

}