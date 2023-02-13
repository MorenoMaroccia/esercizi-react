
import React from "react";
import Welcome from "./Welcome";




export class InteractiveWelcome1 extends React.Component{
    state = {
        name: ''
    }

    handleInputChange = (event) => {
        const value = event.target.value
        
        this.setState({
            name: value
        })
    }
 
  render () {
  
      return (
      <div>
        <Welcome name={this.state.name }/> 
        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}></input>
      </div>
      )

}
}




export default InteractiveWelcome1
