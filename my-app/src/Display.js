

import React from "react";




export class CounterDisplay extends React.Component{
  render () {
      return (
      <div>
        <h1>{this.props.state}</h1>
      </div>
      )

}
}



export default CounterDisplay