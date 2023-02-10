import React from "react";




export class Counter3 extends React.Component{
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
        <h1>{this.state.count}</h1>
      </div>
      )

}
}

Counter3.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
    timeout: 1000,
}

export default Counter3