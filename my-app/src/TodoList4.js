import React from "react";


export class TodoList4 extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            item:'',
            items:[]
        }
    }
    handleInputChange =(event) => {
        this.setState({item:event.target.value})

    }

    handleAddItem = ()=> {
        this.state.items.push(this.state.item)
        this.setState({items: this.state.items, item:'' }); 

        }

    render() {
        return(

            <div>
                <input onChange={this.handleInputChange} value={this.state.item}></input>
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                {this.state.items.map((item) => <li key={this.state.items.indexOf(item)}>{item}</li>) }
                </ul> 
            </div>
           
        )
    }
}