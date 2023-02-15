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
   items : []
   }

    handleFormDefault = (event) => {
       event.preventDefault()
       const username = event.target.elements.username.value
this.setState( (state)=> {
      items: this.items.username.map((name) => <li>{name}</li>)

})
    
       
       console.log(this.state.items)

               
    }

//     handleClick =() => {
//         return(
           
//    )
//     }
   



  
    render() {
        
        return (
            <div>
               
                <form onSubmit={this.handleFormDefault}>
                     <ul>
                        {this.state.items}
                    </ul>
                    <input name="username" />
                    
                    <button  type="submit">Login</button>
                    
                </form>
                
            </div>
        )
    }
}