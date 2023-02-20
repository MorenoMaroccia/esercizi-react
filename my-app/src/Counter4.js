import React from "react";
import CounterDisplay from "./Display";




export class Counter4 extends React.Component{
  state = {
    count: this.props.initialValue
  }

  constructor(props){
    super(props)
    setInterval(() => {
      this.setState((state) => {
        return{
          count:state.count + this.props.incrementBy
      }
      })
    },this.props.timeout)
  }
  render () {
      return (
      <div>
        <CounterDisplay state = {this.state.count} />
      </div>
      )

}
}

Counter4.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
    timeout: 1000,
}

export default Counter4