import React from "react";
import { Counter } from "./Counter";
import { Counter3 } from "./Counter3";
import { Counter4 }from "./Counter4";




export class App extends React.Component{
  render () {
      return (
      <div>
        <Counter />
        <Counter3 />
        <Counter4 />
      </div>
      )

}
}