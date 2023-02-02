import React from 'react'

export class Name extends React.Component{
    render () {
        return (<p>hello, {this.props.name}</p>)
    }

}

export default Name