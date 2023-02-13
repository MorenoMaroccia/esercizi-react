import React from "react";




export class ClickCounter extends React.Component{
  state = {
    count: this.props.initialValue
  }

 handleCounterIncrement = (event) => {
  this.setState((state) => {
    return {
      count:state.count + this.props.incrementBy
    }
  })
 }
  render () {
      return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCounterIncrement}>increment</button>
      </div>
      )

}
}

ClickCounter.defaultProps = {
incrementBy:1,
initialValue:0,
}

export default ClickCounter