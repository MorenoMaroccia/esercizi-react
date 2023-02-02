import React from "react";
import { Welcome } from "./Welcome";
import { Welcome2 } from "./Welcome2";
import { Welcome3 } from "./Welcome3";
import { Welcome4 } from "./Welcome4";



export class App extends React.Component{
  render () {
      return (
      <div>
        <ul>
          <li><Welcome name='Mario' /></li>
          <li><Welcome2 /></li>
          <li><Welcome3 name='Mario' age={22} /></li>
          <li><Welcome4 /></li>
        </ul>
      </div>
      )

}
}