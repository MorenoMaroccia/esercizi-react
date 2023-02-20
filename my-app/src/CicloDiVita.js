import React from "react";




export class CicloDiVita extends React.Component{
  state = {
    count: 0
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return{
          count:state.count + 1 
      }
      })
    },1000)
}
  render () {
      return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
      )

}
}

