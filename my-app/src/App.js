import React from "react";
import { Welcome } from "./ComponentiFunzionali1";
import { Sum } from "./ComponentiFunzionali2";

import {DisplayLanguage} from "./Contesto1"
import {Language} from "./Contesto2"




export class App extends React.Component{
 

  render () {
      return (
      <div>
          <DisplayLanguage/>
          <Language/>
          <Welcome/>
          <Sum />
          
      
        </div>
      )

}
}