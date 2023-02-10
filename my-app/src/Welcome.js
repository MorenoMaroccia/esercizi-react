import React from 'react'
import { Age } from './Age'
import { Age2 } from './Age2'
import { Age3 } from './Age3'
import { Age4 } from './Age4'
import { Age5 } from './Age5'
import { Name } from './Name'



export class Welcome extends React.Component{
    render () {
        return (
        <div>
            <p>Welcome, {this.props.name}</p>
            <Age age={20}/>
            <Age2 age={11}/> 
            <Age3 age={60} />
            <Name />
           <Age4 age={50}   /> 
            <Age5 age={60} />
            
            
            
            </div>)
    }

}

export default Welcome