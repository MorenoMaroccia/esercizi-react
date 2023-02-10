

import React from 'react'
 import { Name } from './Name'



export class Age4 extends React.Component{
  
 a = <Name name = 'john'/>
    render () {
        
        return (
        <div>
          
            {this.props.age > 18 && this.props.age < 65 && this.a && <p>Your age is, {this.props.age}</p>}
             
        </div>)
      
    }

}


