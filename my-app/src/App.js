import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker }from "./ClickTracker";
import { InteractiveWelcome1 } from "./InteractiveWelcome1";
import { Login2 } from "./Login2";
import { Login3 } from "./Login3";
import { Login4 } from "./Login4";
import { UncontrolledLogin5 } from "./UncontrolledLogin5";
import { UncontrolledLogin6 } from "./UncontrolledLogin6";





export class App extends React.Component{
  render () {
      return (
      <div>
        <ClickCounter/>
        <ClickTracker />
        <InteractiveWelcome1 />
        <Login2 />
        <Login3 />
        <Login4 />
        <UncontrolledLogin5 />
        <UncontrolledLogin6 />
        
      </div>
      )

}
}