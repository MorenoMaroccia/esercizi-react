import React from "react";
import { Counter1 } from "./Counter1"
import { Counter3 }from "./Counter3";
import { Counter4 }from "./Counter4";






export class App extends React.Component{
  render () {
      return (
      <div>
        <Counter1 />
        <Counter3 />
        <Counter4 />
      </div>
      )

}
}