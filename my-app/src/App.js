import React from "react";

import {DisplayLanguage} from "./Contesto1"
import {Language} from "./Contesto2"



export class App extends React.Component{
 

  render () {
      return (
      <div>
          <DisplayLanguage/>
          <Language/>
          
      
        </div>
      )

}
}