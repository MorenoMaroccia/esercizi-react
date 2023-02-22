import React from "react";
import { ClickCounter } from "./UseState1";
import { Login } from "./UseState2";

import { ClickCounter1 } from "./UseEffect1";







export class App extends React.Component{
  render () {
      return (
      <div>
        <ClickCounter/>
        <Login />
        <ClickCounter1 />
        
        
      </div>
      )

}
}