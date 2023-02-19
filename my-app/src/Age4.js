

import React from 'react'




export class Age4 extends React.Component{
  
 
    render () {
        
        return (
        <div>
          
            {this.props.age > 18 && this.props.age < 65 && this.props.name === "john" && <p>Your age is, {this.props.age}</p>}
             
        </div>)
      
    }

}


