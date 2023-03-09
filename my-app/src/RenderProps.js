import React from "react";


export class RenderProps extends React.Component{
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

    handleSubmitItem = (event)=> {
        event.preventDefault();
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
                <form onSubmit={this.handleSubmitItem}>
                    <input type="text" value={this.state.item} onChange={this.handleInputChange} />
                    <button type="submit">ADD</button>
                </form>
                {this.props.render(this.state.items, this.handleDeleteItem)}
            </div>
           
        )
    }
}