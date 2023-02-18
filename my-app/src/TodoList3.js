// import React from 'react'


// export class TodoList3 extends React.Component{
//     render () {
//         state = {
//             items:''
//         }

//         handleClick = (event) => {
//             this.setState((state) => {
//                 return {
//                      items: state.items.map(name => <li>{this.input.target}</li>)
//                 }
//             })
           
//         }
        
//         return (
//         <div>
//            <ul>{this.state.items}</ul>
//            <input name="inp" type="text" />
//            <button onClick={handleClick} type='submit'>scrivi</button>
//         </div>)
//     }

// }

// export default TodoList3

import React from "react";

export class TodoList3 extends React.Component {
   state = {
    username:'',
   items : []
   }

    handleFormDefault = (event) => {
       event.preventDefault()
       
  this.setState( (state)=> {
      state.items = username.map((name) => <li>{name}</li>)
        username  event.target.elements.username.value
})
    }

    handleClick =() => {
        { this.state.items &&<ul>
                        <li>{this.state.items.name}</li>
                    </ul>}
    }
   



  
    render() {
        
        return (
            <div>
               
                <form onSubmit={this.handleFormDefault}>
                    
                    <input name="username" />
                    
                    <button onClick={this.handleClick} type="submit">Login</button>

                    { this.state.username &&<ul>
                        <li>{this.state.username.name}</li>
                    </ul>}
                    
                </form>
                
            </div>
        )
    }
}