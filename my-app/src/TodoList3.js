import React from 'react'


export class TodoList3 extends React.Component{
    render () {
        state = {
            items:''
        }

        handleClick = (event) => {
            this.setState((state) => {
                return {
                     items: state.items.map(name => <li>{this.input.target}</li>)
                }
            })
           
        }
        
        return (
        <div>
           <ul>{this.state.items}</ul>
           <input name="inp" type="text" />
           <button onClick={handleClick} type='submit'>scrivi</button>
        </div>)
    }

}

export default TodoList3