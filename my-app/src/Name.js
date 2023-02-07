import React from 'react'


export class Name extends React.Component{
    a = this.props.name 
    render () {
        
        return (
        <div>

       {this.a === 'john'&& <p>Your name is, {this.props.name}</p>}
        
       
        
        </div>)
    }

}

export default Name