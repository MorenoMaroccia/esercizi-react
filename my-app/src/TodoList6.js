import React from "react";


export class TodoList6 extends React.Component{
    state= {
            item:'',
            items:['ciao', 'Mario', 'Rossi']
        }

    handleInputChange =(event) => {
        this.setState({item:event.target.value})

    }

    handleAddItem = ()=> {
        this.state.items.push(this.state.item)
        this.setState({items: this.state.items, item:'' }); 

        }
        handleInputReset =() => {
          
           this.setState({items:[]}); 
          }

        handleInputRemove=() => {
            // 
           
           }
          
        

    render() {
        return(

            <div>
                <input onChange={this.handleInputChange} value={this.state.item}></input>
                <button onClick={this.handleAddItem}>Add</button>
                <button onClick={this.handleInputReset}>Reset</button>
                <ul>
                {this.state.items.map((item) => <li key={this.state.items.indexOf(item)}>{item}
                <button onClick={this.handleInputRemove}>remove</button></li>) }
                </ul> 
            </div>
           
        )
    }
}