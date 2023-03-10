import React from "react";




export class ClickTracker extends React.Component{
  state = {
    name:''
  }

handleClick = (event) => {
    this.setState({name:event.target.name})
    
  };


  render () {
      return (
      <div>
     
        <button type="button" onClick={this.handleClick} name="button1" >bottone 1</button>
        <button type="button" onClick={this.handleClick} name="button2" >bottone 2</button>
        <button type="button" onClick={this.handleClick} name="button3" >bottone 3</button>

        <h1>{this.state.name}</h1>
      </div>
      )

}
}



export default ClickTracker