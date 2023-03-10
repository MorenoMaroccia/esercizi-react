import React from "react";


export class TodoList6 extends React.Component{
    state= {
            item:'',
            items:[]
        }

    handleInputChange =(event) => {
        this.setState({item:event.target.value})

    }

    handleAddItem = ()=> {
        this.state.items.push(this.state.item)
        this.setState({items: this.state.items, item:'' }); 

        }
        handleDeleteItem = (index) => {
            const arrayCopy = [...this.state.items]
            arrayCopy.splice(index, 1)
            this.setState({items:[...arrayCopy]})
        }

        
          
        

    render() {
        return(

            <div>
                
                <input onChange={this.handleInputChange} value={this.state.item}></input>
                <button onClick={this.handleAddItem}>Add</button>
                
                
                <ul>
                {this.state.items.map((item) => <li key={this.state.items.indexOf(item)}>{item}
                <button onClick={this.handleDeleteItem}>delete</button></li>) }
                </ul> 
            
            </div>
           
        )
    }
}