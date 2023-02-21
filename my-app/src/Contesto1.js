

import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component{
    state = {
        language: "en"
    }

    handleLanguageChange = (event) => {
        this.setState({
            language:event.target.value
        })
    }


  render () {
    
      return (
      <div>
         <h1>Contesto1</h1>
          <select  value={this.state.language} onChange={this.handleLanguageChange}>
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
          <LanguageContext.Provider value={this.state.language}>

            
          </LanguageContext.Provider>
        
      
      </div>
      )
}
}